import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ currTerm, newTerm, onTermSubmit } ) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Search" 
                // onChangeText={newTerm()}
                // this notation: newTerm(), calls newTerm when this component is rendered
                // Uncomment to turn on

                // The consistency for the following comment props are strange..
                // autoCapitalize="none"
                // autoCorrect={false}

                onEndEditing={onTermSubmit}
                onChangeText={newTerm}
                value={currTerm}
            />
        </View>
        
    )
};

const styles = StyleSheet.create({
    backgroundStyle : {
        backgroundColor: '#F0EEEE',
        borderRadius: 10,
        margin: 15,
        height: 50,
        flexDirection: 'row',
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    }
});

export default SearchBar;