import { useState } from "react"

const apiKey = import.meta.env.VITE_WEATHER_KEY

//city data
export interface cityData {
    name: string
    lat: number
    lon: number
    country: string
    state: string
}

//weather data
export interface weatherData {
    cod: string
    message: number
    cnt: number
    list: List[]
    city: City
}

export interface List {
    dt: number
    main: Main
    weather: Weather[]
    clouds: Clouds
    wind: Wind
    visibility: number
    pop: number
    rain?: Rain
    sys: Sys
    dt_txt: string
}

export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
}

export interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

export interface Clouds {
    all: number
}

export interface Wind {
    speed: number
    deg: number
    gust: number
}

export interface Rain {
    "3h": number
}

export interface Sys {
    pod: string
}

export interface City {
    id: number
    name: string
    coord: Coord
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}

export interface Coord {
    lat: number
    lon: number
}

//parsed weather type
export interface parsedWeater {
    time: string
    date: string
    temp: number
    icon: string
    description: string
}

function Demo2() {
    const [city, setCity] = useState("")
    const [weatherDataBycity, setWeatherDataByCity] = useState<null | weatherData>(null)

    const getCityData = (): Promise<cityData[]> => {
        return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`, { method: "GET" })
            .then(respose => respose.json())
            .then(response => response)
    }

    const getCityWeatherData = (lat: number, lon: number): Promise<weatherData> => {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`, { method: "GET" })
            .then(response => response.json())
            .then(response => response)
    }

    const getWeather = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        const [cityInfo] = await getCityData()
        const data = await getCityWeatherData(cityInfo.lat, cityInfo.lon)
        setWeatherDataByCity(data)
    }
   // console.log(weatherDataBycity?.list, 'weather')

    const parsedWeater: parsedWeater[] = (weatherDataBycity?.list || []).map(weather => ({
        "time": new Intl.DateTimeFormat("fi-FI", {hour: '2-digit', minute: '2-digit' }).format(weather.dt * 1000),
        "temp": weather.main.temp, "icon": weather.weather[0].icon, "description": weather.weather[0].description,
        date: new Date(weather.dt * 1000).toDateString()
    }))

    const parsedWeaterInGroups: Map<string, parsedWeater[]> = new Map()
    for (const row of parsedWeater) {
        if (!parsedWeaterInGroups.has(row.date)) {
            parsedWeaterInGroups.set(row.date, [])
        }
        const group = parsedWeaterInGroups.get(row.date)!
        group.push(row)
    }
    const parsedWeaterInChunks = Array.from(parsedWeaterInGroups.values())

    return (
        <div className="demo">
            <p>Weather widget</p>
            <form onSubmit={getWeather}>
                <label >Get weather from </label>
                <input placeholder="City name" type="text" onChange={e => setCity(e.target.value)}></input>
                <input type="submit"></input>
            </form>
            <div className="weatherBox-container">
                {!parsedWeaterInChunks ? null : parsedWeaterInChunks
                    .map((chunk, i) =>
                        <div key={i} className="weatherBox-row">
                            <div id="date">{chunk[0]?.date}</div>
                            
                            {chunk
                                .map((item, i) =>
                                    <div key={i} className="weatherBox">
                                        <span>{item.time}</span> <span>{(item.temp - 273.15).toFixed(0)} °C</span> {item.description}<img src={`https://openweathermap.org/img/wn/${item.icon}.png`} />
                                    </div>
                                )
                            }
                        </div>
                    )}

            </div>
        </div>
    )
}

export default Demo2