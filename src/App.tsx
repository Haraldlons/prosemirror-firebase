import React, { useEffect } from 'react';
import logo from './logo.svg';
// import './firebase'
import './App.css';
import './AddTextEditor'
import { database } from './firebase';

function App() {
  useEffect(() => {
    console.log("Hello")
    var ref = database.ref('text')
    // var ref = defaultDatabase.ref('text')
    ref.get().then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [])
  return (<>
      <div id="editor"></div>
      <div id="content">
        <h3>Hello What is up</h3>

        <p>This is editable text. You can focus it and start typing.</p>


        <p>Block-level structure can be manipulated with key bindings (try
        ctrl-shift-2 to create a level 2 heading, or enter in an empty
        textblock to exit the parent block), or through the menu.</p>

        <p>Try using the “list” item in the menu to wrap this paragraph in
        a numbered list.</p>
      </div>
    </>

  );
}

export default App;
