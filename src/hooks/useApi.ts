import axios, { type AxiosRequestConfig } from "axios"
import { useState } from "react"

function useApi<T>(url: string)
    : [T|null, boolean, string|null, (conf: AxiosRequestConfig) => void] {
    const [data, setData] = useState<T|null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string|null>(null)

    async function call(config: AxiosRequestConfig) {
        setData(null)
        setError(null)
        setLoading(true)
        const result = await axios
            .get<T>(url, config)
            .catch(e => setError(e.message))
        setData(result!.data)
        setLoading(false)
    }    

    return [data, loading, error, call]
}

export default useApi