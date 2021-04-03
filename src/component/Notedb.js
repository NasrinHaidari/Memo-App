import React from 'react'

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('note_app.db')

const refreshNotes = (note) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'select * from note',
        [],
        (_, { rows: { _array } }) => {
          note(_array)
        }
      );
    },
    (_t,_error) => { console.log("can't load the notes!"); console.log(error) },
    (_t, _success) => { console.log("loaded notes!")}
  );
}

const insertNote = (title,description,noteFunction) => {
  db.transaction( tx => {
      tx.executeSql( 'insert into note (title,description) values (?,?)', [title,description] );
    },
    (_t,_error) => { console.log("db error inserttitle"); console.log(error);},
    (_t, _success) => { noteFunction() }
  )
}

const deleteData = async (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'delete * note where id= ? ',
        [id],
        (_, result) => { resolve(result) },
        (_, error) => { console.log("error dropping users table"); reject(error)
        }
      )
    })
  })
}

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql(
          'create table if not exists note (id integer primary key not autoincrement, title text,description text);'
        );
      },
      (_, error) => { console.log("db error creating tables"); console.log(error); reject(error) },
      (_, success) => { resolve(success)}
    )
  })
}


export const database = {
    refreshNotes,
    insertNote,
    deleteData,
    setupDatabaseAsync
  
}