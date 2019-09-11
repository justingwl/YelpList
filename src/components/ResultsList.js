import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>

            <FlatList
                horizontal
                data={results}
                keyExtractor={(result)=> result.id}
                // Item is the only item that we will need to use, destructured from result
                renderItem={({ item }) => {
                    return <Text> {item.name} </Text>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;