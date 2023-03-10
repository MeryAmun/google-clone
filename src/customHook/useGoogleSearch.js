import React,{useState, useEffect} from 'react';
import { CONTEXT_KEY,API_KEY } from '../utils';
import './styles.css'

function useGoogleSearch(term) {
    const [searchResults, setSearchResults] = useState([])

 useEffect(() => {
 const fetchSearchTerm = async () => {
   await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
    .then((response) => response.json())
    .then(data => {
     setSearchResults(data)
    })
 }
 fetchSearchTerm()
 }, [term])

 return searchResults
 
}

export default useGoogleSearch