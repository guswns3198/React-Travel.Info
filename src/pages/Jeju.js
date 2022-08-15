import React from 'react'
import {useState} from "react"
import styled from "styled-components"
import Halla_mountain from "./Jeju_Tourist_Destination/Halla_mountain"
import Seongsan from './Jeju_Tourist_Destination/Seongsan';
import Cheonjiyeon from './Jeju_Tourist_Destination/Cheonjiyeon';

const Jeju_css = styled.div`

  height: 60vh;
  width: 94vw;

  .tap{
    display: flex;
    justify-content: space-around;
    padding-top : 10px;
  }

  .list{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E7F6F2;
    font-size: 150%;
    width: 150px;
    font-weight: bold;
    transition: .3s;
    cursor: pointer;
    border-radius: 20px;
    height: 60px;
  }

  .list:hover{
    background-color: #A5C9CA;
    font-size: 150%;
    width: 150px;
    text-align: center;
    font-weight: bold;
    border-radius: 20px;
  }

  .map{
    position: absolute;
    top: 20%;
    left: 3%;
  }
`

const Jeju = () => {

  const [select, setSelect] = useState(null);

  const tourist_destination = [
    {id : 0 , name : '한라산' , page : <Halla_mountain/>},
    {id : 1 , name : '성산일출봉' , page : <Seongsan />},
    {id : 2 , name : '천지연폭포' , page : <Cheonjiyeon />}
  ]

  const handleButtonClick = (e) => {
    setSelect(e)
  }


  return (
    <>
    <Jeju_css>
      <div className='tap'>
        {tourist_destination.map(el => {
          return (
            <div key={el.id}>
              <div className='list' onClick={() => {
                handleButtonClick(el.id)
              }}>
                {el.name}
              </div>
              <div className='map'>
                {select === el.id ? el.page : undefined}
              </div>
            </div>
          )
        })}
      </div>
    </Jeju_css>
    </>  
  )
}

export default Jeju;