import { useState } from "react"

export default function Team (){
    
    const [team,setTeam ]= useState(11)
    const handleAdd=()=>{
    const newTeam=team+1;
    setTeam(newTeam)
}
    const handleReduce=()=>{
        const newTeam=team-1;
        setTeam(newTeam)
    }


    const teamStyle ={
        border: '2px solid red',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return(
        <div>
            <h3 style={teamStyle}>Players:{team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}