import noteContext from "./noteContext";
import{useState} from "react";
const NoteState = (props)=>{
 const notesInitial=[
    {
      "_id": "61cf1f7615f7c0d6c79ac166",
      "user": "61cdfabb1a8587d9958642ef",
      "title": "My title updated",
      "description": "this is a description updated",
      "tag": "personal",
      "date": "2021-12-31T15:19:18.786Z",
      "__v": 0
    },
    {
      "_id": "61cf1f7e15f7c0d6c79ac16a",
      "user": "61cdfabb1a8587d9958642ef",
      "title": "My title",
      "description": "this is a description",
      "tag": "personal",
      "date": "2021-12-31T15:19:26.456Z",
      "__v": 0
    }
  ];
  const {notes,setNotes}=useState(notesInitial);
    return(
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;