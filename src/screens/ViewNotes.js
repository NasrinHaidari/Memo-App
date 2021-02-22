import React from 'react'
import {StyleSheet, View} from 'react-native'
import { Text } from 'react-native-paper'

function ViewNotes() {
    return(
        <View style = {styles.container}>
            <View style= {styles.titleContainer}>
                <Text style={styles.title}>You do not have any Notes</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizonta:10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    }
})

export default ViewNotes