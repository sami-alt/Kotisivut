import { useState } from "react";

interface Stopdata {
  recordedattime: number
  lineref: string
  monitored: boolean
  latitude: number
  longitude: number
  originaimeddeparturetime: number
  destinationaimedarrivaltime: number
  destinationdisplay: string
  aimedarrivaltime: number
  expectedarrivaltime: number
  aimeddeparturetime: number
  expecteddeparturetime: number
  delay: number
}

const getData = (station:string):Promise<Record<number, Stopdata>> => {
    return fetch(`https://data.foli.fi/siri/sm/${station}`, { method: 'GET' })
        .then(response => response.json())
        .then(response => response.result)
}

const Stopdata = () => {
    const [timetable, setTimetable] = useState<Record<number, Stopdata>>([])
    const [station, setStation] = useState<string>()

    const handleInput: React.ChangeEventHandler<HTMLSelectElement> = (event)=> {
        event.preventDefault()
        setStation(event.target.value)
    }

    async function displayTimetable(station:string){
        const data = await getData(station)
        setTimetable(data)
    }

    return (
        <div>
            <label htmlFor='lines'>Line number
                <select name="lines" id="lines" onChange={handleInput}>
                    <option value='197'>Möörönkuja</option>
                    <option value='768'>Otavanaukio</option>
                    <option value='1902'>Kauppatori A2</option>
                    <option value='4'>Turun linna</option>
                    <option value='846'>Kupittaan Asema</option>
                </select>
            </label>
            <button onClick={() => displayTimetable(!station ? '1' : station)}>Search</button>
            <div>
                <ul>
                    {!timetable ? null : Object.values(timetable)
                        .map(time => ({"destination": time.destinationdisplay, 'line': time.lineref, 'time': new Intl.DateTimeFormat('fi-FI', { hour: '2-digit', minute: '2-digit' })
                        .format(new Date(time.aimedarrivaltime * 1000))}))
                        .map((item, i) => <li key={i} style={{listStyleType:'none'}}>Destination:{item.destination}  Departure:{item.time}  Line:{item.line}</li>).splice(0, 5)}
                </ul>
            </div>

        </div>
    )
}

export default Stopdata