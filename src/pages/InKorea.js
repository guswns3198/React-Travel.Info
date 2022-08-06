import React from 'react';
import styled from "styled-components";

  const Wrapper = styled.div`
    height: 85vh;
    display: flex;
    justify-content: center;
    border: 1px solid red;
    font-size: 2rem;
    flex-direction: column;
    align-items: center;

    div {
      color: royalblue;
      padding: 40px 0px 40px 0px;
    }
  `;

const InKorea = () => {

return (

<>
  <Wrapper>

  <div>지도안에 지역들 나눠가지고...</div>
  <div>각 지역들의 여행지 API 연동시켜서....</div>
  <div>말은 쉽지 뭐...</div>

  </Wrapper>
</>

)

}

export default InKorea;