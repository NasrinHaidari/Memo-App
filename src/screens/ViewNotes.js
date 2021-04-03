import React, {useState,useEffect, useContext} from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import { Text, FAB, List } from 'react-native-paper'
import Header from '../component/Header'
import { Context as NoteContext } from '../context/NoteContext'
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('note_app.db')


function ViewNotes({navigation}) {
    // we need to create new useState variable for new notes, we will show this notes add into faltList
     const [notes, setNotes] = useState([])
    useEffect(()=>{
        db.transaction(tx=>{
            tx.executeSql('select * from note',[],(tx,{rows})=>{
                var data = [];
                for(var i =0; i<rows.length ; i++){
                    data.push(rows[i]);
                }
                setNotes(data);
            })
        })
    })
    const {state, addnote, deletenote} = useContext(NoteContext)

    function addNotes(notes) { 
        
        notes.id = state.length + 1
        addnote(notes)

        // setNotes([...notes, note])
    }
    return(
        <>
        <Header titleText= 'Sample Memo App'/>
        <View style = {styles.container}>
            {state.length === 0 ? (
                <View style= {styles.titleContainer}>
                    <Text style={styles.title}>You do not have any Notes</Text>
                </View>
            ) : (
                <FlatList 
                    data={state}
                    renderItem={({ item }) => (
                        <List.Item
                            title={item.noteTitle}
                            description={item.noteDescription}
                            descriptionNumberOfLines={1}
                            titleStyle={styles.listTitle}
                            onPress = {()=> deletenote(item.id)}
                        />
                    )}
                    keyExtractor= {item => item.id.toString()}
                
                />
            )}

            
            <FAB style = {styles.fab}
                small
                icon = 'plus'
                label= 'Add a new Note'
                onPress= {()=> navigation.navigate('AddNotes',{ 
                    addNotes
                    })
                }

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
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    fab: {
        backgroundColor: '#219653',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    listTitle: {
        fontSize: 20
    }
})

export default ViewNotes