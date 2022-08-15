import React from 'react';
import styled from "styled-components";
import {useState} from "react"
import Footer from '../components/Footer'
import Seoul from './Seoul';
import Jeju from './Jeju';
import GyeongGi from './Gyeongi_Tourist_Dsetination/Gyeongi';

const Wrapper = styled.div`

height: 75vh;
border: 5px solid black;

.region_tap{
    height: 15%;
    display: flex;
    justify-content: space-around;
    padding-top : 10px;
}

.region_list{
    background-color: #D4F6CC;
    padding: 15px;
    font-size: 150%;
    width: 100px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;
}

.region_list:hover{
    background-color: #76BA99;
    padding: 15px;
    font-size: 150%;
    width: 100px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;
}

.maps {
    position: absolute;
    top: 30%;
    left: 3%;
}

`

const InKorea = () => {

    const [click, setClick] = useState(false)
    const [regionIndex, setRegionIndex] = useState(null)

    // select:<GyeongGi/>
    const dummy_region = [
        {region : '서울', id:0, select:<Seoul />},
        {region : '경기', id:1, select:<GyeongGi/>},
        {region : '인천', id:2},
        {region : '강원', id:3},
        {region : '충청', id:4},
        {region : '경상', id:5},
        {region : '전라', id:6},
        {region : '제주', id:7, select:<Jeju />}
    ]

    const handleRegionClick = (key) => {

        console.log(key)
        setRegionIndex(key)
        setClick(!click)

    }

    return (
        <>
            <Wrapper>
                <div className='region_tap'>
                    {dummy_region.map((el, key) => {
                        return (
                            <div key={key}>

                                <div>
                                    <div className='region_list' onClick={() => {
                                    handleRegionClick(key)
                                    }}>{el.region}
                                    </div>
                                </div>

                                <div key={key} className="maps">
                                    {regionIndex === el.id ? el.select : undefined}
                                </div>

                            </div>
                        )
                    })}
                </div>


            </Wrapper>
        <Footer />
        </>
)

}

export default InKorea;