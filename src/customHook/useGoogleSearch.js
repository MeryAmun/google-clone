import {useState, useEffect} from 'react';
import { CONTEXT_KEY,API_KEY } from '../utils';
import './styles.css'

function useGoogleSearch(term) {
    const [searchResults, setSearchResults] = useState([])
// console.log(term)
// console.log(searchResults)
    useEffect(() => {
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then((response) => response.json())
      .then(data => {
       setSearchResults(data)
      })
      .catch((err) => {
       console.log(err)
      })
     }, [term])
     

 return searchResults
 
}

export default useGoogleSearch