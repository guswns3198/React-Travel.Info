import styled from "styled-components";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Wrapper = styled.div`
  
  border: 2px solid red;

  span {
    width: 100px;
    height: 100px;
    color: black;
    font-size: 3rem;
  }
`;


const Cota = () => {

  return (
    <>
    <Wrapper>
    <span>세부 상세 페이지</span>
    </Wrapper>
    </>

  )
}

export default Cota;