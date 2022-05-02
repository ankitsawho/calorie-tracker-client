import React, {useEffect} from 'react'
import BasicContainer from './BasicContainer'
import CalorieDetail from './CalorieDetail'
import './style/Home.css'
import { StoreCurrentDateData } from '../actions'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import axios from 'axios'

function Home() {
  const dateState = useSelector((state) => state.dateReducer)
  const myState = useSelector((state) => state.userReducer)

  let dispatch = useDispatch()
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/get-main-date/${myState['email']}/${dateState}`)
    .then(res => {
      dispatch(StoreCurrentDateData(res.data.message))
    })
  }, [])
  return (
    <div className='home'>
      <div className='left-home-container'>
        <BasicContainer title="Breakfast" name="breakfast" />
        <BasicContainer title="Lunch" name="lunch" />
        <BasicContainer title="Snacks" name="snacks" />
        <BasicContainer title="Dinner" name="dinner" />
      </div>
      <CalorieDetail />
    </div>
  )
}

export default Home