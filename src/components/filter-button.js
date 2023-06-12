import React from 'react'


export default function FilterButton(props){
    return (
        <button aria-pressed="false" onClick={()=>props.setFilter(props.name)}>{props.name}</button>
    )
}