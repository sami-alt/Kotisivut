import { useState, useEffect, useRef} from "react"
import L from 'leaflet'

interface Vehicle {
  recordedattime: number
  validuntiltime: number
  linkdistance: number
  percentage: number
  lineref: string
  directionref: string
  publishedlinename: string
  operatorref: string
  originref: string
  originname: string
  destinationref: string
  destinationname: string
  originaimeddeparturetime: number
  destinationaimedarrivaltime: number
  monitored: boolean
  incongestion: boolean
  inpanic: boolean
  longitude: number
  latitude: number
  delay: string
  delaysecs: number
  blockref: string
  vehicleref: string
  next_stoppointref: string
  next_visitnumber: number
  next_stoppointname: string
  vehicleatstop: boolean
  next_destinationdisplay: string
  next_aimedarrivaltime: number
  next_expectedarrivaltime: number
  next_aimeddeparturetime: number
  next_expecteddeparturetime: number
  onwardcalls: Onwardcall[]
  destinationname_sv: string
  destinationname_en: string
  next_stoppointname_sv: string
  next_destinationdisplay_sv: string
  next_destinationdisplay_en: string
}

export interface Onwardcall {
  stoppointref: string
  visitnumber: number
  stoppointname: string
  aimedarrivaltime: number
  expectedarrivaltime: number
  aimeddeparturetime: number
  expecteddeparturetime: number
  stoppointname_sv: string
}


function getData(): Promise<Record<number, Vehicle>> {
        return fetch('https://data.foli.fi/siri/vm', { method: "GET" })
            .then(response => response.json())
            .then(response => response.result.vehicles)
}

function BusData() {
    const [busData, setBusData] = useState<Record<number, Vehicle>>([])
    const [line, setLine] = useState<string>('1')
    const [showLocations, setShowLocations] = useState(false)
    const mapInstanceRef = useRef<{ el: HTMLDivElement, map: L.Map }>()

    useEffect(() => {
        let unmounted = false
        let timeoutId: number
        const updateData = async () => {
            const data = await getData()
            console.log(data, 'type')
            if (!unmounted) {
                setBusData(data)
                timeoutId = setTimeout(updateData, 3000)
            }
        }
        updateData()

        return () => {
            unmounted = true
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [])

    const byLine = (Object.values(busData).filter(bus => bus.lineref === line))

    const lineData = showLocations
        ? byLine
            .map(e => ({ 'linja': e.lineref, 'longitude': e.longitude, 'latitude': e.latitude}))
            .filter(e => e.longitude && e.latitude)
            .map((bus): [number, number] => [Number(bus.latitude), Number(bus.longitude)])
        : []

    useEffect(() => {
        const currentMapInstanceRef = mapInstanceRef.current
        if (!currentMapInstanceRef) {
            return
        }

        const map = currentMapInstanceRef.map
        map.eachLayer(layer => {
            if (layer.options.pane === 'markerPane') {
                map.removeLayer(layer)
            }
        })

        lineData.forEach(lineDataMarker => {
            L.marker(lineDataMarker)
                .addTo(map).bindPopup(line)
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(lineData), line])


    const onMapElementInit = (el: HTMLDivElement | null) => {
        if (!el) {
            return
        }


        if (mapInstanceRef.current) {
            if (mapInstanceRef.current.el === el) {
                // Already initialized for this element
                return
            }
            // Already initialized, but some other element. Remove the old one.
            mapInstanceRef.current.map.remove()
        }
        const map = L.map(el).setView([60.451498, 22.266637], 15)
        mapInstanceRef.current = { el, map }

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 17,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map)

    }

    const handleInput: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        event.preventDefault()
        setShowLocations(false)
        setLine(event.target.value)
    }

    return (
        <div>
            <p>Bus location on a map</p>
            <label>Choose line
                <select onChange={handleInput}>
                    <option value='1' >1</option>
                    <option value='18'>18</option>
                    <option value='32'>32</option>
                    <option value='42'>42</option>
                    <option value='53'>53A</option>
                    <option value='32'>32A</option>
                </select>
            </label>
            <button onClick={() => setShowLocations(true)}>Show location</button>
            <div ref={onMapElementInit} className="map"></div>
        </div>
    )
}

export default BusData