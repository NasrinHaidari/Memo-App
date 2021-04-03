import React,{useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper'
import AppNavigator from './src/navigation/Index'
import { Provider as NoteProvider } from './src/context/NoteContext'
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('note_app.db');
export default function App() {
  useEffect(()=>{
    db.transaction(tx =>{
        tx.executeSql('create table if not exists note (id integer primary key autoincrement,title text,description text);',[],()=>console.log('table created successfully!'))
    })
})
  return (
    <NoteProvider>
      <AppNavigator/>
    </NoteProvider>
  )
}

