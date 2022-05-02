import './style/CalorieChart.css'
import {GiWaterBottle} from 'react-icons/gi'
import {AiFillMinusCircle} from 'react-icons/ai'
import {RiAddCircleFill} from 'react-icons/ri'
import { CircularProgressbar } from 'react-circular-progressbar';
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'


function CalorieChart() {
  const [water_count, setwater_count] = useState(0)
  const dateState = useSelector((state) => state.dateReducer)
  const myState = useSelector((state) => state.dataReducer)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/get-count/${myState['email']}/${dateState}`).then(
      res => {
        setwater_count(res.data.message)
      }
    )
  }, [])

  const changeVal = (op) => {
    if(op === 1){
      axios.get(`http://127.0.0.1:8000/api/inc-count/${myState['email']}/${dateState}`).then(
        res => {
          console.log(res);
          setwater_count(water_count+1)
        }
      )
    }else{
      axios.get(`http://127.0.0.1:8000/api/dec-count/${myState['email']}/${dateState}`).then(
        res => {
          console.log(res);
          setwater_count(water_count-1)
        }
      )
    }
  }
  
  const [cal, setcal] = useState(0)
  useEffect(() => {
    var sum = 0
    for (const [key, value] of Object.entries(myState)) {
      sum = sum + value['calorie']
    }
    setcal(sum)
  })
  
  return (
    <div className='calorie-chart'>
      <div className="chart">
      <CircularProgressbar className='cal-progress' maxValue={2000} value={cal} text={`${cal} cal`} />
      </div>
      <div className="water-consumption">
        <div className="water-logo">
        <GiWaterBottle />
        </div>
        <div className="water-detail">
          <AiFillMinusCircle className='icon' onClick={() => changeVal(-1)} />
          <h4>{water_count} Glasses</h4>
          <RiAddCircleFill className='icon' onClick={() => changeVal(1)} />
        </div>
      </div>
    </div>
  )
}

export default CalorieChart