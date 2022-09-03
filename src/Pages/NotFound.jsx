import React from 'react'
import {Link} from "react-router-dom"



const Notfound = () => {
    const mystyle ={
        color:"red",
        backgroundColor:"yellow",
        borderRadius:"8px"
    }
    
  return (
    <div className='d-flex align-items-center justify-content-center'>
        <h1 style={{color:"BLACK"}} >🧧404 N O T_F O U N D  🧧</h1>
        
        <Link to="/"> <button style={mystyle} >Go Home</button> </Link>
    </div>
  )
}

export default Notfound