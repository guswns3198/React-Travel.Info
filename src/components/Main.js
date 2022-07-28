import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRight } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import React from "react";
import Korea from "../img/korea.jpeg";
import Vegas from "../img/vegas.jpeg";
import Greece from "../img/greece.jpeg";
import Borakay from "../img/borakay.jpeg";
import Left from "../img/left.png";
import Right from "../img/right.png";
import ImgOne from "../assets/flight.jpeg"
import Footer from "./Footer"

const Section = styled.section`
 width: 100vw;
 height: 100vh;
 display: flex;
 background-color: #FEFBF6;
`;


const Div = styled.div`
  padding-top: 15px;
  width: 100vw;
  height: 100vh;
  user-select: none;
  /* flex-grow: 2; */

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
    
    `;


const Nav = styled.nav`
  width: 15vw;
  height: 100vh;
  /* margin-left: auto; */
  /* border: 3px solid green; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-top: 15px;
  flex-direction: column;
  position: fixed;
  flex-grow: 1;
`;


const Span = styled.span`
  background-color: royalblue;
  width: 90%;
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
`;

const Span2 = styled.span`
  background-color: royalblue;
  width: 90%;
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

  `;

const Flight = styled.div`
    color: #3330E4;
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 10px;
`;

const Flight2 = styled.div`
    color: #513252;
    font-weight: bold;
    font-size: 1.3rem;
`;

const Star = styled.div`
    color: #ffffff;
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 10px;
`;

const Star2 = styled.div`
    color: #ffffff;
    font-weight: bold;
    font-size: 1.3rem;
`;


//이미지 슬라이드 크기 1100px X 480px

const Main = () => {
  return (
    <>
    
    <Section>
      <Nav>
          <Span>
            <Flight>초특가 항공권</Flight>
            <Flight2>대한민국 최저가</Flight2>
          </Span>
          <Span2>
            <Star>별보러 몽골</Star>
            <Star2>최대 10만원 즉시할인</Star2>
          </Span2>
      </Nav>
        <Div>
          
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

          </Div>
        
    </Section>
    {Footer}
    </>
  )
}

export default Main;