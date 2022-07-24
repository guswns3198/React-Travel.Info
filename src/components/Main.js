import styled from "styled-components";
// import { Link } from "react-router-dom";
import React from "react";
import Korea from "../img/korea.jpeg";
import Vegas from "../img/vegas.jpeg";
import Greece from "../img/greece.jpeg";
import Borakay from "../img/borakay.jpeg";
import Left from "../img/left.jpg";
import Right from "../img/right.jpg";

const Div = styled.div`
  width: 100%;
  height: 75vh;
  /* width: 100%;
  height: 75vh;
  border: 3px solid red; */

  /* .image {
    width: 100%;
    height: 80%;
    margin: 0 auto;
    display: flex;
    position: relative;
    top: 5;
    left: 300px;
    display: block;
    text-align: center;
  }

  img {
    display: inline;
  }

  img::before {

  }

  span {
    position: relative;
    display: flex;
    flex-direction: column;
    
  } */

  /* .switch {
    width: 100%;
    display: flex;
    color: black;
    justify-content: center;
    font-weight: bold;

  }

  span {
    /* width: 20%; */
    /* height: 3%;
    justify-content: space-between;
    padding: 15px 50px 0px 50px;
    cursor: pointer;
    transition: .3s;
   }

   span:hover {
     color: #EB4747;
     font-size: 20px;
   } */

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
     background-image: url(./img/left.jpg);
     background-position: center center;
     background-size: 50%;
     background-repeat: no-repeat;
   }

   label.right {
     right: 20px;
     background-color: #5F5F5F;
     background-image: url(./img/right.jpg);
     background-position: center center;
     background-size: 50%;
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
    {/* <Wrapper> */}
{/* 
    <div className="image">
    <img src={Korea} />
    </div> */}
    
    {/* <div className="switch">
    <span className="previous">Prev</span>
    <span className="next">Next</span>
    </div> */}
    
    <div className="slidebox">
      <input type="radio" name="slide" id="slide01" checked />
      <input type="radio" name="slide" id="slide02" />
      <input type="radio" name="slide" id="slide03" />
      <input type="radio" name="slide" id="slide04" />
      <ul class="slidelist">
        <li class="slideitem">
            <div>
              <label for="slide04" class="left"></label>
              <label for="slide02" class="right"></label>
              <a><img src={Korea} /></a>
            </div>
        </li>
        <li class="slideitem">
            <div>
              <label for="slide01" class="left"></label>
              <label for="slide03" class="right"></label>
              <a><img src={Vegas} /></a>
            </div>
        </li>
        <li class="slideitem">
            <div>
              <label for="slide02" class="left"></label>
              <label for="slide04" class="right"></label>
              <a><img src={Greece} /></a>
            </div>
        </li>
        <li class="slideitem">
            <div>
              <label for="slide03" class="left"></label>
              <label for="slide01" class="right"></label>
              <a><img src={Borakay} /></a>
            </div>
        </li>
      </ul>
    </div>

    {/* </Wrapper> */}
    </Div>
    </>
  )
}

export default Main;