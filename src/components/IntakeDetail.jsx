import React from 'react'
import './style/IntakeDetail.css'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

function IntakeDetail() {
  const [protein, setprotein] = useState(0)
  const [carbs, setcarbs] = useState(0)
  const [fats, setfats] = useState(0)
  const [fiber, setfiber] = useState(0)
  const myState = useSelector((state) => state.dataReducer)
  useEffect(() => {
    var psum = 0
    var ftsum = 0
    var csum = 0
    var fsum = 0
    for (const [key, value] of Object.entries(myState)) {
      psum = psum + parseFloat(value['proteins'])
      ftsum = ftsum + parseFloat(value['fats'])
      fsum = fsum + parseFloat(value['carbs'])
      csum = csum + parseFloat(value['fiber'])
    }
    
    setcarbs(csum.toFixed(1))
    setfats(ftsum.toFixed(1))
    setfiber(fsum.toFixed(1))
    setprotein(psum.toFixed(1))
  })
  return (
    <div className='intake-detail'>
      <table cellSpacing="20px" className='intake-table'>
        <tr>
          <td>Proteins :<span> {protein}g</span></td>
          <td>Fats :<span> {fats}g</span></td>
        </tr>
        <tr>
          <td>Carbs :<span> {carbs}g</span></td>
          <td>Fiber :<span> {fiber}g</span></td>
        </tr>
      </table>
    </div>
  )
}

export default IntakeDetail