import React, {useEffect, useState} from 'react'
import './style/Detail.css'
import {useParams} from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'
import {IoMdAddCircle} from 'react-icons/io'
import {AiFillMinusCircle} from 'react-icons/ai'
import axios from 'axios'
import {useSelector} from 'react-redux'


function Detail() {
  const params = useParams()
  const myState = useSelector((state) => state.userReducer)
  const date = useSelector((state) => state.dateReducer)
  const [query, setquery] = useState("")
  const [search_res, setsearch_res] = useState({})
  const [added_items, setadded_items] = useState({})
  const [qtn, setqtn] = useState("")
  const [rerender, setrerender] = useState(true)
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/search/${query}`)
    .then(res => setsearch_res(res.data.data))
    return () => {
      setsearch_res([])
    }
  },[query])

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/get-time-data/${myState['email']}/${date}/${params.time}`)
    .then(res => {
      setadded_items(res.data.data)
      console.log(res.data.data)
  })

  },[rerender])

  
  return (
    <div className='detail-container'>
      <div className="left-container">
      {
        Object.values(added_items).map(val => {
          return(
            <div className="food-data-container">
              <div className="food-item">Item : {val.item}</div>
              <div className="food-quantity"> Qty : {val.quantity}</div>
              <div className="total-calorie">{val.calorie} cal</div>
              <AiFillMinusCircle className='icon' onClick={
                () => {
                  axios.delete(`http://127.0.0.1:8000/api/delete-item/${val.id}`)
                  .then(res => {
                    setrerender(!rerender)
                  })
                }
              } />
            </div>
          )
        })
      }
      </div>
      <div className="right-container">
        <div className="search-bar">
          <FcSearch className='search-icon' />
          <input type="text" className='input-search' value={query} placeholder='Search for food ...' onChange={e => {
            setquery(e.target.value)
          }} />

          <select name="qty" id="qty"  value={qtn} onChange={(e)=>{
              setqtn(e.target.value)
            }}>
          <option value="" disabled selected>Quantity</option>
          <option value="0.25">0.25</option>
          <option value="0.50">0.50</option>
          <option value="0.75">0.75</option>
          <option value="1">1</option>
          <option value="1.25">1.25</option>
          <option value="1.5">1.50</option>
          <option value="1.75">1.75</option>
          <option value="2">2</option>
        </select>
        </div>
          <div className="search-result">
            {
              Object.values(search_res).map(val => {
                return(
                  <div className='result-data'>
                    <span>{val.item}</span>
                    <IoMdAddCircle className='icon' onClick={
                      () => {
                        var data = val
                        data['email'] = myState['email']
                        data['date'] = date
                        data['time'] = params.time
                        data['quantity']  = qtn
                        data['calorie'] = data['calories']*qtn
                        axios.post('http://127.0.0.1:8000/api/add/', {data})
                        .then(res => setrerender(!rerender))
                      }
                    } />
                  </div>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default Detail