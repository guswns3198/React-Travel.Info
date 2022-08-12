import React from 'react';
import styled from "styled-components";
import {useState} from "react"

  const Wrapper = styled.div`
    height: 85vh;
    display: flex;
    border: 5px solid red;
    font-size: 2rem;
    justify-content: center;

  .selectTripPlace {
    padding: 10px;
    position: absolute;
    top: 22%;
    /* font-style: italic; */
    font-weight: bold;
    background-color: #FFF9CA;
    transition: .3s;
    color: #0F3D3E;
    cursor: pointer;
    border-radius: 20px;
  }

  .selectTripPlace:hover {
    padding: 13px;
    position: absolute;
    top: 22%;
    /* font-style: italic; */
    font-weight: bold;
    background-color: #FFDEB4;
    cursor: pointer;
    border-radius: 20px;
  }

  .selectTripPlace:visited {
    
  }


  form {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 40px;
  place-content: center;
}

  .region {
    padding: 30px;
    margin: 10px;
    background-color: #D4F6CC;
    cursor: pointer;
    color: #002B5B;
    font-weight: 500;
    border-radius: 20%;
  }

  .region:hover {
    padding: 30px;
    margin: 10px;
    background-color: #D4F6CC;
    cursor: pointer;
    color: red;
    font-weight: 500;
    border-radius: 20%;
  }


  `;

const KoreaMap = () => {
  return (
    <>
    {/* <div className="menus"> */}
      <form name="forms">
      <span className="region">서울</span>
      <span className="region">경기</span>
      <span className="region">인천</span>
      <span className="region">강원</span>
      <span className="region">충청</span>
      <span className="region">전라</span>
      <span className="region">경상</span>
      <span className="region">제주</span>
      </form>
    {/* </div> */}
    
    </>
  )
}

const InKorea = () => {

  const [visible, setVisible] = useState(false);


return (

<>
  <Wrapper>
  
  <div className="selectTripPlace" onClick={() => {
    setVisible(!visible);
    }}>

    {visible ? "여행지 닫기" : "여행지 펼치기"}

  </div>

  {visible && <KoreaMap />}
  
  </Wrapper>
</>

)

}

export default InKorea;




