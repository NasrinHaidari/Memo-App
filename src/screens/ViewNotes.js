import React, {useState} from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import { Text, FAB, List } from 'react-native-paper'
import Header from '../component/Header'

function ViewNotes({navigation}) {
    // we need to create new useState variable for new notes, we will show this notes add into faltList
    const [notes, setNotes] = useState([])

    const addNotes= note => {
        note.id = notes.length + 1
        setNotes([...notes, note])
    }
    return(
        <>
        <Header titleText= 'Sample Memo App'/>
        <View style = {styles.container}>
            {notes.length === 0 ? (
                <View style= {styles.titleContainer}>
                    <Text style={styles.title}>You do not have any Notes</Text>
                </View>
            ) : (
                <FlatList 
                    data={notes}
                    renderItem={({ item }) => (
                        <List.Item
                            title={item.noteTitle}
                            description={item.noteDescription}
                            descriptionNumberOfLines={1}
                            titleStyle={styles.listTitle}
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