import styled from "styled-components";
import React, { useState } from "react";
import Korea from "../img/korea.jpeg";
import Vegas from "../img/vegas.jpeg";
import Greece from "../img/greece.jpeg";
import Borakay from "../img/borakay.jpeg";
import Footer from "./Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// test.youngha
const Section = styled.section`
 width: 100vw;
 height: 100h;
 display: flex;
 background-color: #FEFBF6;

 .flight {
  color: #3330E4;
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 10px;
 }
 .flight2 {
  color: #513252;
    font-weight: bold;
    font-size: 1.3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
 }

 nav {
  width: 20vw;
  height: 100vh;
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-top: 15px;
  flex-direction: column;
  position: fixed;
  border-right: 1px solid gray;
  background-color: #FEFBF6;

  @media (max-width: 1350px) {
      display: none;
  }
 }

 .minisection {
  background-color: royalblue;
  width: 80%;
  height: 20%;
  border: 3px solid black;
  margin-top: 15px;
  background-image: url("https://img.modetour.com/modetour/2021/main/thum/01_220721.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: relative;
  cursor: pointer;
  border-radius: 30px;
 }

 .minisection2 {
  background-color: royalblue;
  width: 80%;
  height: 20%;
  border: 3px solid black;
  margin-top: 15px;
  background-image: url("https://img.modetour.com/modetour/2021/main/thum/04_220714.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: relative;
  cursor: pointer;
  border-radius: 30px;
 }

 .star {
  color: #ffffff;
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 10px;
 }

 .star2 {
  color: #ffffff;
    font-weight: bold;
    font-size: 1.3rem;
 }

 .slide {
  padding-top: 20px;
  width: 80vw;
  height: 70vh;
  user-select: none;
  position: absolute;
  left: 20%;


   ul, li {
     list-style: none;
   }

   [name="slide"] {
     display: none;
   }

   .slidebox {
     max-width: 1000px;
     width: 100%;
     margin: 0 auto;
   }

   .slidebox img {
     max-width: 100%;
     border-radius: 40px;
   }
   .slidebox .slidelist {
     white-space: nowrap;
     font-size: 0;
     overflow: hidden;
   }

   .slidebox .slideitem {
     position: relative;
     display: inline-block;
     vertical-align: middle;
     width: 100%;
     transition: all 0.35s;
   }

   .slidebox .slideitem label {
     position: absolute;
     z-index: 1;
     top: 50%;
     transform: translateY(-50%);
     padding: 20px;
     border-radius: 50%;
     cursor: pointer;
   }

   label.left {
     left: 20px;
     background-color: #5F5F5F;
     background-image: url(./img/left.png);
     background-position: center center;
     background-size: cover;
     background-repeat: no-repeat;
   }

   label.right {
     right: 20px;
     background-color: #5F5F5F;
     background-image: url(../img/right.png);
     background-position: center center;
     background-size: cover;
     background-repeat: no-repeat;
   }

   [id="slide01"]:checked ~ .slidelist .slideitem {
     transform: translateX(0);
   }
   [id="slide02"]:checked ~ .slidelist .slideitem {
     transform: translateX(-100%);
   }
   [id="slide03"]:checked ~ .slidelist .slideitem {
     transform: translateX(-200%);
   }
   [id="slide04"]:checked ~ .slidelist .slideitem {
     transform: translateX(-300%);
    }
    
    .selectMenu {
      width: 80vw;
      background: #FEFBF6;
      color: gray;
      /* font-weight: bold; */
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      padding-top: 50px;
      justify-content: space-around;
    }

    .selectMenu span {
      border: 2px solid lightgray;
      border-radius: 20px;
      padding: 5px 15px;
      cursor: pointer;
    }

    .selectMenu span:hover {
      background: #F6F6F6;
      color: #29D493;
    }

  }
  `;



//이미지 슬라이드 크기 1100px X 480px

const Main = () => {
  
  const [change, setChange] = useState(1);

  const handleButtonClick = () => {
    setChange(1)
  }

  const handleButtonClick2= () => {
    setChange(2)
  }

  // const handleButtonClick3= () => {
  //   setChange(3)
  // }
  
  return (
    <>
    
    <Section>

          <nav>
              <div className="minisection">
                <span className="flight">초특가 항공권</span>
                <span className="flight2">대한민국 최저가</span>
              </div>
              <div className="minisection2">
                <span className="star">별보러 몽골</span>
                <span className="star2">최대 10만원 즉시할인</span>
              </div>
          </nav>


          <div className="slide">
              <div className="slidebox">
                <input type="radio" name="slide" id="slide01" />
                <input type="radio" name="slide" id="slide02" />
                <input type="radio" name="slide" id="slide03" />
                <input type="radio" name="slide" id="slide04" />
                <ul className="slidelist">
                  <li className="slideitem">
                      <div>
                        <label htmlFor="slide04" className="left"></label>
                        <label htmlFor="slide02" className="right"></label>
                        <a><img src={Korea} /></a>
                      </div>
                  </li>
                  <li className="slideitem">
                      <div>
                        <label htmlFor="slide01" className="left"></label>
                        <label htmlFor="slide03" className="right"></label>
                        <a><img src={Vegas} /></a>
                      </div>
                  </li>
                  <li className="slideitem">
                      <div>
                        <label htmlFor="slide02" className="left"></label>
                        <label htmlFor="slide04" className="right"></label>
                        <a><img src={Greece} /></a>
                      </div>
                  </li>
                  <li className="slideitem">
                      <div>
                        <label htmlFor="slide03" className="left"></label>
                        <label htmlFor="slide01" className="right"></label>
                        <a><img src={Borakay} /></a>
                      </div>
                  </li>
                </ul>
              </div>

              <div className="selectMenu">
              <span onClick={handleButtonClick}>오늘의 BEST 여행지</span>
              <span onClick={handleButtonClick2}>항공사가 추천하는 여행지</span>
              <span>얼리버드 할인 특가</span>
              </div>
              {change === 1 ? <TabFirst /> : undefined}
              {change === 2 ? <TabTwo /> : undefined}
              {/* {change === 3 ? <TabThird /> : undefined} */}

              {/* <TabTwo /> */}
          </div>

              
    </Section>
    
    {/* <Footer /> */}
    </>
  )
}

export default Main;

const Wrapper = styled.div`


  .tabs {
    width: 80vw;
    height: 60%;
    display: flex;
    align-items: center;
    position: absolute;
    left: 3%;
  }
  

  img {
    width: 80%;
    height: 80%;
  }


  .word {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    left: 20%;
  }

  .word:hover {
    cursor: pointer;
    color: green;
  }
`;


const TabFirst = () => {
  return (
    <>
    <Wrapper>

      <div className="tabs">

      <div className="tabchildren">
      <img className="one" src="https://img.modetour.com/eagle/photoimg/11093/bfile/636977501233548972.JPG" />
      <span className="word">세부 2박 3일</span>
      </div>

      <div className="tabchildren">
      <img className="two" src="https://img.modetour.com/eagle/photoimg/46312/Bfile/636529164558136991.png" />
      <span className="word">라오스 4박 5일</span>
      </div>

      <div className="tabchildren">
      <img className="three" src="https://img.modetour.com/eagle/photoimg/45599/bfile/637176301868413310.png" />
      <span className="word">싱가포르 3박 4일</span>
      </div>

      </div>

    </Wrapper>

    </>
  )
}


const TabTwo = () => {
  return (
    <>
    <Wrapper>

      <div className="tabs">
      <div className="tabchildren">
      <img className="one" src="https://img.modetour.com/eagle/photoimg/11093/bfile/636977501233548972.JPG" />
      <span className="word">이탈리아 9박 10일</span>
      </div>

      <div className="tabchildren">
      <img className="two" src="https://img.modetour.com/eagle/photoimg/46312/Bfile/636529164558136991.png" />
      <span className="word">몽골 5박 6일</span>
      </div>

      <div className="tabchildren">
      <img className="three" src="https://img.modetour.com/eagle/photoimg/45599/bfile/637176301868413310.png" />
      <span className="word">호주 4박 5일</span>
      </div>
      </div>


    </Wrapper>

    </>
  )
}