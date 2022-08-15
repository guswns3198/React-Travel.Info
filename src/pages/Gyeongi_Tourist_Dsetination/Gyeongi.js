import React, { useEffect } from 'react'
// import Castle from './Castle'
import {useState} from "react"
import styled from "styled-components"
// import Building from './Building'
// import LotteWorld from './LotteWorld'
import EverLand from './EverLand'
import Minsokchoen from './Minsokchoen'
import Osan from './Osan'

const GyeongGi=()=>{

  const [isclick, setIsClick] = useState(false)
  const [isregionIndex, setIsRegionIndex] = useState(null)

    const dummy_seoul = [
      {region : '에버랜드', id:0, select: <EverLand/>},
      {region : '민속촌', id:1, select: <Minsokchoen />},
      {region : '오산', id:2, select: <Osan/>}
  ]

    const handleRegionClick = (key) => {
      setIsRegionIndex(key)
      setIsClick(!isclick)
    }

    const Wrapper = styled.div`
      height: 60vh;
      width: 94vw;
      /* border: 5px solid black; */

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
        top: 20%;
        left: 3%;
    }
    `

    return (
      <>
        <Wrapper>
          
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

export default GyeongGi;