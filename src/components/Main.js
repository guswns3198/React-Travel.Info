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

const Div = styled.div`
  width: 100%;
  height: 75vh;

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



//이미지 슬라이드 크기 1100px X 480px

const Main = () => {
  return (
    <>
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
    </>
  )
}

export default Main;