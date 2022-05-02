import React from 'react'
import './style/Navbar.css'
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {StoreDate} from '../actions/index'
import axios from 'axios'
import {StoreCurrentDateData} from '../actions/index'


function Navbar() {
    const dispatch = useDispatch()
    const myState = useSelector((state) => state.userReducer)
    const dateState = useSelector((state) => state.dateReducer)
    return (
        <div className='navbar'>
            <Link to='/' className='logo'><h3>Calorie Tracker</h3></Link>
            <input type="date" name="date" id="date" value={dateState} onChange={(e) =>  {
                axios.get(`http://127.0.0.1:8000/api/get-main-date/${myState['email']}/${e.target.value}`)
                .then(res => {
                  dispatch(StoreCurrentDateData(res.data.message))
                })
                dispatch(StoreDate(e.target.value))
                }
            } />
            <Link to="/profile" className="user-profile-logo">
                <img src={myState['imageUrl']} className='profile-pic' alt={myState['name']} />
                <span>{myState['name']}</span>
            </Link>
        </div>
    )
}

export default Navbar