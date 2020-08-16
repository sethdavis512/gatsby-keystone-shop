import { useState } from 'react'
import queryString from 'query-string'

interface UseParamsType {
    search: string
}

const useParams = (location: UseParamsType) => {
    const [params] = useState(queryString.parse(location.search))
    return params
}

export default useParams
