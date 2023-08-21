import React, { useState, useContext, useEffect } from "react";
import noteContext from "../context/NoteContext";
import Card from "./Card";

export const Page = () => {
    const context = useContext(noteContext);
    // console.log(state)
    const { state, fetchUni } = context

    useEffect(() => {
        fetchUni()
    }, [])
    
    
    console.log(state.length === 0)
    return (
        <div className="container mb-4">
            {state.length !== 0?<h1 className="text-center mb-4">Universities found</h1>: ""}
            <div className="row justify-content-center gap-3">{
            state.map((value) =>{
                return <Card country={value.country} name={value.name} province={value.state} url={value.web_pages[0]} key={value.web_pages[0]}/>
            })
            
            }</div></div>
    )
}
