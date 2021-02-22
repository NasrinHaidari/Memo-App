import React from 'react'
import {StyleSheet, View} from 'react-native'
import { Text } from 'react-native-paper'

function ViewNotes() {
    return(
        <View>
            <View>
                <Text>You do not have any Notes</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal10
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