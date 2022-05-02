import React from 'react'
import './style/BasicContainer.css'
import {SiAddthis} from 'react-icons/si'
import {Link} from "react-router-dom";


function BasicContainer(props) {
  return (
    <div className='basic-container'>
        <h2>{props.title}</h2>
        <Link to={`/detail/${props.name}`}><SiAddthis className="add-icon" /></Link>
    </div>
  )
}

export default BasicContainer