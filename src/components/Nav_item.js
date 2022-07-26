import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`

    user-select:none;
    background-color: #263343;
    color: white;
    display: flex;
    justify-content: center;

    a{
        text-decoration: none;
        color:white;
      }

    .navbar_links{
        display:flex;
        justify-content: center;
        margin: 10px
    }

    .navbar_menu li{
        font-size: 25px;
        padding: 8px 24px;
        list-style: none;
      }
    
      .navbar_menu li:hover{
        background-color: #d49466;
        border-radius:15px;
      }

        .navbar_menu{
            flex-direction: column;
            align-items: center;
            width:100%;
          }
      
          .navbar_menu li{
            text-align: center;
            width:100%;
          }
    @media screen and (min-width: 882px){
        display: none;
    }
    
`

const Nav_item = () =>{
    return(
        <>
        <Item>
        <ul className="navbar_menu">
            <li>국내여행</li>
            <li>해외여행</li>
            <li className="event">이벤트</li>
            <li><Link to='/FAQ'>FAQ</Link></li>
            <div className="navbar_links">
            <a href="https://github.com/guswns3198/React-Travel.Info" target='_blank'>깃</a>
        </div>
        </ul>


        </Item>
        </>
    )
}

export default Nav_item;