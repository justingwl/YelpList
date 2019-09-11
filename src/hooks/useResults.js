import { useState, useEffect } from 'react';
import yelp from '../../api/yelp';


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san francisco'
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            console.log("Failure, show a try again later prompt");
            console.log(e);
            setErrorMessage("Something went wrong");
        }
    };

    useEffect(() => {
        searchAPI('Pasta');
        console.log("hello, running once");
    }, []);
    
    // Extracting hook related logic
    // Make these variables accessible in SearchScreen
    return [searchAPI, results, errorMessage];
};