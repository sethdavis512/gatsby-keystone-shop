import { useEffect, useState } from 'react'
import axios from 'axios'

const useAxios = (query, variables?) => {
    const [response, setResponse] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            const results = await axios.post('/admin/api', {
                query,
                variables
            })
            setResponse(results.data)
        }

        fetch()
    }, [])

    return response
}

export default useAxios
