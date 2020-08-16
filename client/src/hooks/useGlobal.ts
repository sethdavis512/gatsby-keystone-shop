import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalProvider'

const useGlobal = () => useContext(GlobalContext)

export default useGlobal
