import React, { useEffect } from 'react'
import {useState} from "react"
import styled from "styled-components"
import Haeundae from './Haeundae'
import Geoje from './Geoje'
import Suseongmot from './Suseongmot'
import axios from 'axios';

const Gyeongsang=()=>{

  const [isclick, setIsClick] = useState(false)
  const [isregionIndex, setIsRegionIndex] = useState(null)

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);


const apiCall = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=853c4cbd37a70d08e338339338dcb154&units=metric`
    )
    .then((res) => {
     // console.log(res);
      setCity(res.data.name);
      setWeather(res.data.weather[0].main);
      setTemp(res.data.main.feels_like);
    });

    const dummy_seoul = [
      {region : '해운대', id:0, select:<Haeundae />},
      {region : '거제도', id:1, select:<Geoje />},
      {region : '수성못', id:2, select:<Suseongmot />}
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

export default Gyeongsang;