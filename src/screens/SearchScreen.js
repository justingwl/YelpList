import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    // Variables made accessible when calling useResults
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    
    return (
        <View>
            <SearchBar
                currTerm={term}
                newTerm={(x) => { setTerm(x) }}
                onTermSubmit={() => {searchAPI(term)}} />
            {/* {errorMessage != "" ? <Text> {errorMessage} </Text> : null } */}
            { errorMessage != "" ? <Text> { errorMessage } </Text> : <Text> Search Results: { results.length } </Text> }

            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList results={filterResultsByPrice('$$')} title="Bit pricier"/>
            <ResultsList results={filterResultsByPrice('$$$')} title="Big spender"/>
            <ResultsList results={filterResultsByPrice('$$$$')} title="Spender spend spend" />
        </View>
    )
};

export default SearchScreen;