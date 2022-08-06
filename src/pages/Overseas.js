import styled from "styled-components";
import React from "react";

const Ready = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  font-size: 3rem;

  div {
    position: absolute;
    top: 50%;
  }
`;


const Overseas = () => {

  return (
    <>
    
    <Ready>
      <div>현재 서비스 준비중 입니다.</div>
    </Ready>
    
    </>
  )


}

export default Overseas;