import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';
import Nav_item from "./Nav_item";
import "../App.css";

const Wrapper = styled.div`
  width: 100%;
  height: 15vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #263343;
  padding: 8px 30px;
  background-size: cover;
  user-select:none;

  a{
    text-decoration: none;
    color:black;
  }

  .navbar_logo{
    font-size: 48px;
    color: #d49466;
  }
  
  .navbar_menu{
    display: flex;
    list-style: none;
    padding-left: 0;
    color:black;
  }

  .navbar_menu li{
    font-size: 25px;
    padding: 8px 24px;
  }

  .navbar_menu li:hover{
    background-color: #d49466;
    border-radius:15px;
  }

  .navbar_links{
    color: black;
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 8px 24px;

  }

  .menubar{
    color: black;
    font-size: 200%;
    position: absolute;
    right: 32px;
    display: none;
  }

  .event{
    color: Indigo;
    position: relative;
    animation: bounce 1s infinite linear;
  }

  @keyframes bounce {
    0% {
      top: 0;
    }

    50% {
      top: -1px;
    }

    70% {
      top: -20px;
    }

    100% {
      top: 0;
    }
  }


  @media screen and (max-width: 882px){

    align-items: center;

    .navbar_menu{
      flex-direction: column;
      align-items: center;
      width:100%;
      display:none;
    }

    .navbar_menu li{
      text-align: center;
      width:100%;
    }

    .navbar_links{
      width:100%;
      display:none;
    }

    .menubar{
      display: block;
      cursor: pointer;
    }
  }
`;



const Nav = () => {

  const [open, setopen] = useState(false);


  const handleClick = () =>{
    return setopen(!open)
  }

  // useEffect(() =>{
  //   console.log(open)
  // },[open])

  return (
    <>
    <Wrapper className="hi">
      <div className="navbar_logo">
      <FontAwesomeIcon icon={faPlaneDeparture}/>
        <Link to='/'>오늘떠나</Link>
      </div>

      <ul className="navbar_menu">
            <li>국내여행</li>
            <li>해외여행</li>
            <li className="event">이벤트</li>
            <li><Link to='/FAQ'>FAQ</Link></li>
        </ul>

        <div className="navbar_links">
            <a href="https://github.com/guswns3198/React-Travel.Info" target='_blank'>
              깃
            </a>
        </div>

      <div className='menubar'>
      <FontAwesomeIcon icon={faBars} onClick={handleClick}/>
      </div>
    </Wrapper>
    {open ? <Nav_item /> : undefined}
    </>
  )
}

export default Nav;