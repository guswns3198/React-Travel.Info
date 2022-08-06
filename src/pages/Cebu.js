import styled from "styled-components";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  
  .section1 {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name {
    display: flex;
    padding : 40px 0px 20px 20px;
    font-weight: bold;
    font-size: 1.3rem;
  }

  .cal {
    padding : 20px 0px 0px 20px;
    display: flex;
    color: royalblue;
    font-size: 1.3rem;
  }

  .section2 {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    padding-top: 40px;
    width: 330px;
    height: 330px;
  }

  .pick {
    padding: 10px 0px 10px 0px;
    font-weight: bold;
    font-style: italic;
    font-size: 1.5rem;
  }

`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;

  .question {
    font-size: 1.5rem;
    padding: 10px;
    background-color: #2BAE66;
    font-weight: bold;
    border-radius: 20px;
    color: white;
    transition: .5s;
  }

  .question:hover {
    color: white;
    padding: 15px;
    font-weight: bold;
    font-size: 2rem;
    background-color: green;
    border-radius: 20px;
  }
`;

const Cebu = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
    <Wrapper>
    
    <div className="section1">
    <span className="name">[도전최저가] 세부 솔레아 리조트 4일/5일</span>

    <span className="cal">
    <Calendar onChange={onChange} value={value}/>
    </span>
    </div>

    <div className="section2">
    <img className="one" src="https://img.modetour.com/eagle/photoimg/11093/bfile/636977501233548972.JPG" />
    <span className="pick">MD Pick!</span>
    <span>세부 가성비 최강 솔레아</span>
      
    </div>

    </Wrapper>
    
    <Div className="section3">

    <Link to="/FAQ" style={{textDecoration: "none"}}>
    <span className="question">자주 묻는 질문 바로가기</span>
    </Link>

    </Div>

    </>

  )
}

export default Cebu;