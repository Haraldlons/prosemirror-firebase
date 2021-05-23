
import {
  schema,
} from '@aeaton/react-prosemirror-config-default'
// import {schema} from "prosemirror-schema-basic"
import {Schema, DOMParser} from "prosemirror-model"
import {addListNodes} from "prosemirror-schema-list"

import { FirebaseEditor } from "./TextEditor";
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import {database} from './firebase';;


console.log("Running AddTextEditor")
var defaultDatabase = database;
var ref = defaultDatabase.ref('text')

const node = document.getElementById('editor');
console.log(node)
const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  marks: schema.spec.marks
})

// console.log(FirebaseEditor)
const hei = new FirebaseEditor({
    firebaseRef: ref,
    stateConfig: {
        schema: mySchema,
    },
    view({ stateConfig, updateCollab }) {
        let view = new EditorView(node, {
            state: EditorState.create(stateConfig),
            dispatchTransaction(transaction) {
                let newState = view.state.apply(transaction)
                view.updateState(newState)
                updateCollab(transaction, newState)
            },
        })
        return view
    },
}).then(({ view, selections, destroy }) => {
    console.log('editor ready')
}).catch(console.error)
console.log(hei)