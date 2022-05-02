import React from 'react'
import CalorieChart from './CalorieChart'
import IntakeDetail from './IntakeDetail'
import './style/CalorieDetail.css'

function CalorieDetail() {
  return (
    <div className='calorie-detail'>
      <CalorieChart />
      <IntakeDetail />
    </div>
  )
}

export default CalorieDetail