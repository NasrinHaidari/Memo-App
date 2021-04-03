import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Header from '../component/Header'

// function SearchScreen() {
//     return(
//         <View style={styles.searchContainer}>
//             <TextInput placeholder="Search..." style={styles.searchInput} />
//         </View>
//     )
// }

const search = ({ navigation }) => {
    return (
      <>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search..." style={styles.searchInput} />
        </View>
      </>
    );
  };

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#fff'
    },
    searchInput: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 20,
        backgroundColor: '#219653'
    }
})

export default search;
