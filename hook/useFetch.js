import { useState, useEffect } from 'react'
import  axios from 'axios'


const useFetch = (endpoint, query) => {
    const [data, setData ] = useState([])
    const [isLoading, setIsLoading ] = useState(false)
    const [error, setError] = useState("")

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
        ...query
    },
    headers: {
        'X-RapidAPI-Key': '2465e156ddmshbc6234b1134ff03p15f91fjsna2ca23a09c46',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
    };

   const fetchData = async () => {
        setIsLoading(true)

        try{
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)

        }catch(error){
            setError(error)
            alert('There is an error')
        } finally{
            setIsLoading(false)
        }

        
   }
   useEffect(()=> {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch}
}

export default useFetch



