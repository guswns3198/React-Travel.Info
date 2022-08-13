import React from 'react';
import styled from "styled-components";
import {useState} from "react"
import Footer from '../components/Footer'
import Seoul from './Seoul';

const Wrapper = styled.div`

height: 75vh;
border: 5px solid black;

.region_tap{
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding-top : 10px;
}

.region_list{
    background-color: #C1D5A4;
    padding: 15px;
    font-size: 150%;
    width: 100px;
    text-align: center;
    font-weight: bold;
}

.screen{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
}

`

const InKorea = () => {

    const [click, setClick] = useState(false)
    const [regionIndex, setRegionIndex] = useState(null)

    const dummy_region = [
        {region : '서울', id:0},
        {region : '경기', id:1},
        {region : '인천', id:2},
        {region : '강원', id:3},
        {region : '충청', id:4},
        {region : '경상', id:5},
        {region : '전라', id:6},
        {region : '제주', id:7}
    ]

    const handleRegionClick = (key) => {

        console.log(key)
        setRegionIndex(key)
        setClick(!click)

    }
//설마 ?
    return (
        <>
            <Wrapper>
                <div className='region_tap'>
                    {dummy_region.map((el, key) => {
                        return (
                            <div key={key}>
                                <div className='region_list' onClick={() => {
                                    handleRegionClick(key)
                                }}>{el.region}
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