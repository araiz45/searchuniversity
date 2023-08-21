import NoteContext from './NoteContext';
import { useState } from 'react';

import React from 'react'

function NoteState(props) {
    const [state, setState] = useState([])
    const fetchUni = async (word) =>{
        console.log(word)
        const response = await fetch(`http://universities.hipolabs.com/search?country=${word}&limit=30`)
        const json = await response.json()
        setState(json)
    }


    return (
        <NoteContext.Provider value={ {fetchUni, state} }>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState