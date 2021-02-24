import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../component/Header'

function AddNotes({navigation}) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDescription, setNoteDescription] = useState('')

// when we press to save button we will navigate back to ViewNote Screen
    function onSaveNote() {
        navigation.state.params.addNotes({noteTitle, noteDescription})
        navigation.goBack()
    }


    return(
        <>
        <Header titleText= 'Add a New Note'/>
        <IconButton 
        icon = 'close'
        size = {25}
        color = 'white'
        onPress = {()=>navigation.goBack()}
        style = {styles.iconButton}
        />

        <View style = {styles.container}>

            <TextInput
                label="Add Note Title here"
                value= {noteTitle}
                mode='outlined'
                onChangeText={setNoteTitle}
                style={styles.title}
            />
            <TextInput
                label="Add Note Description"
                value= {noteDescription}
                onChangeText= {setNoteDescription}
                mode="flat"
                multiline={true}
                style={styles.text}
                scrollEnabled={true}
                returnKeyLabel= 'done'
                blurOnSubmit= {true}
            />
            <FAB
                style= {styles.fab}
                small
                icon= "check"
                disabled= {noteTitle == '' ? true : false}
                onPress= {()=>onSaveNote()}
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizonta:10
    },
    iconButton: {
        backgroundColor: '#219653',
        position: 'absolute',
        right: 0,
        top: 4,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    text:{
        height: 300,
        fontSize: 16
    },
    fab:{
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0
    }
})

export default AddNotes
