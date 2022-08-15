import React, { useEffect } from 'react'
import {useState} from "react"
import styled from "styled-components"
import Wolmido from './Wolmido'
import Songdo from './Songdo'
import Eulwangri from './Eulwangri'
import axios from 'axios';

const Incheon=()=>{

  const [isclick, setIsClick] = useState(false)
  const [isregionIndex, setIsRegionIndex] = useState(null)

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);


const apiCall = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=853c4cbd37a70d08e338339338dcb154&units=metric`
    )
    .then((res) => {
     // console.log(res);
      setCity(res.data.name);
      setWeather(res.data.weather[0].main);
      setTemp(res.data.main.feels_like);
    });

    const dummy_seoul = [
      {region : '월미도', id:0, select:<Wolmido />},
      {region : '송도', id:1, select:<Songdo />},
      {region : '을왕리', id:2, select:<Eulwangri />}
  ]

    const handleRegionClick = (key) => {
      setIsRegionIndex(key)
      setIsClick(!isclick)
    }

    const Wrapper = styled.div`
      height: 60vh;
      width: 94vw;
      /* border: 5px solid black; */
      margin-top: 50px;


    .region_tap{
        height: 15%;
        display: flex;
        justify-content: space-around;
        padding-top : 10px;
    }

    .region_list{
        background-color: #E7F6F2;
        font-size: 150%;
        width: 150px;
        text-align: center;
        font-weight: bold;
        transition: .3s;
        cursor: pointer;
        border-radius: 20px;
    }

    .region_list:hover{
        background-color: #A5C9CA;
        font-size: 150%;
        width: 150px;
        text-align: center;
        font-weight: bold;
        border-radius: 20px;
    }

    .maps {
        position: absolute;
        top: 35%;
        left: 3%;
    }

    .weather {
      font-weight: bold;
      font-size: 1.5rem;
      color: #0096FF;
      display: flex;
      justify-content: space-around;
      position: relative;
      top: -10%;
    }
    `

    return (
      <>
        <Wrapper>

        <div className="weather">
      <span>
      지역 : {city}
      </span>

      <span>
      날씨 : {weather}
      </span>

      <span>
      온도 : {temp}℃
      </span>
      </div>
          
          <div className='region_tap'>
                    {dummy_seoul.map((el, key) => {
                        return (
                            <div key={key}>

                                <div>
                                    <div className='region_list' onClick={() => {
                                    handleRegionClick(key)
                                    }}>{el.region}
                                    </div>
                                </div>

                                <div key={key} className="maps">
                                    {isregionIndex === el.id ? el.select : undefined}
                                </div>

                            </div>
                        )
                    })}
          </div>
        </Wrapper>
      </>  
    )
}

export default Incheon;