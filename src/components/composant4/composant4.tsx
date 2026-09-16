import { useEffect, useRef } from "react"
import useApi from "../../hooks/useApi"

const API_KEY = 'd52e50e34214ff0b92247f788638eeb9'

function Composant4() {
    const [meteoData, meteoLoading, meteoError, meteoCall] = useApi<WeatherResult>(`https://api.openweathermap.org/data/2.5/weather`)
    
    // use ref sera utiliser pour garder en mémoire une valeur qui ne provoquera pas de rerender du composant
    const nb = useRef(42)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async(p) => {
            meteoCall({ params: {
                lat: p.coords.latitude,
                lon: p.coords.longitude,
                appid: API_KEY,
                units: 'metric'
            } })
        })
    }, [])

    return <>
        { meteoError && meteoError }
        { meteoLoading ? <p>Chargement en cours ...</p> : <p>{meteoData?.main.temp} °C</p> }
        <button onClick={() => {nb.current++; console.log(nb.current)}}>+</button>
    </>
}

export default Composant4


export interface WeatherResult {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  rain: Rain
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Rain {
  "1h": number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}
