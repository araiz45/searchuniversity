import React, { useState, useContext, useEffect } from "react";
import noteContext from "../context/NoteContext";

export const Form = () => {
const context = useContext(noteContext);
const { fetchUni } = context
const [inputState, setInputState] = useState('')
const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(inputState)
    fetchUni(inputState)
}
  return (
    <><form onSubmit={handleSubmit}>
    <div className="my-5 container d-flex justify-content-center gap-2">
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='input' value={inputState} onChange={(e)=>{setInputState(e.target.value)}} style={{width: '30rem'}} placeholder="Enter country name "/>
        {/* <input type="number" className="form-control"/> */}
        <button type="submit" className="btn btn-success">Search</button>
    </div>
  </form></>
  )
}
