import React, {useState, useEffect} from 'react'
import './style/Profile.css'
import {GoogleLogout} from 'react-google-login'
import {useDispatch} from 'react-redux'
import {RemoveUserData} from '../actions/index'
import {useSelector} from 'react-redux'
import {Button} from '@material-ui/core'
import axios from 'axios'

const clientId = '44255827926-nnip3qs9o1orlq4u5vka3iou9o3up6u3.apps.googleusercontent.com'


function Profile() {
  const dispatch = useDispatch()
    const logout = () => {
        dispatch(RemoveUserData())
    }
    const myState = useSelector((state) => state.userReducer)
    const [user, setuser] = useState({})
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/user_detail/${myState['email']}`)
            .then(res => {
                setuser(res.data.user);
        })
    }, [])

    function updateData(){
      axios.post(`http://127.0.0.1:8000/api/user-update/${myState['email']}/`, {data:user})
      .then(res => alert(res.data.message))
    }
    
  return (
    <div className='profile'>
      <div className="profile-container">
      <div className="main-profile">
        <img src={myState['imageUrl']} alt="" />
        <div className="profile-detail">
          <h4 id='name'>{myState['name']}</h4>
          <h4 id='email'>{myState['email']}</h4>
        </div>

      </div>
        <div className="user-details">
          <table>
            <tr>
              <td>Gender</td>
              <td>
              <select name="gender" id="gender" value={user.gender ? user.gender : ""} onChange={(e)=>{
                setuser({...user, gender: e.target.value})
              }}>
                <option value="" disabled selected>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              </td>
            </tr>
            <tr>
              <td>Age</td>
              <td><input type="number" value={user.age ? user.age : NaN} onChange={(e)=>{
                setuser({...user, age: e.target.value})
              }} /></td>
            </tr>
            <tr>
              <td>Height</td>
              <td><input type="number" value={user.height ? user.height : NaN } onChange={(e)=>{
                setuser({...user, height: e.target.value})
              }} /></td>
            </tr>
            <tr>
              <td>Weight</td>
              <td><input type="number" value={user.weight ? user.weight : NaN} onChange={(e)=>{
                setuser({...user, weight: e.target.value})
              }} /></td>
            </tr>
            <tr>
              <td>BMI</td>
              <td>{
                (user.height && user.weight) ? ((user.weight)*10000/Math.pow(user.height,2)).toFixed(1) : "-"
              }</td>
            </tr>
            <tr>
              <td>Daily Activity</td>
              <td>
              <select name="activity" id="activity" value={user.activity ? user.activity : ""} onChange={(e)=>{
                setuser({...user, activity: e.target.value})
              }}>
                <option value="" disabled selected>Select</option>
                <option value="Little Activity">Little Activity</option>
                <option value="Lighly Active">Lighly Active</option>
                <option value="Moderately Active">Moderately Active</option>
                <option value="Very Active">Very Active</option>
              </select>
              </td>
            </tr>
          </table>
          
        </div>
      <Button className='update-btn' onClick={updateData}>
        Update
      </Button>
      <GoogleLogout
            className='google-btn'
            clientId={clientId}
            buttonText = "Logout"
            onLogoutSuccess={logout}
      />
      </div>
    </div>
  )
}

export default Profile