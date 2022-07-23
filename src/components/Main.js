import styled from "styled-components";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  background-color: gray;
  width: 100%;
  height: 75vh;
  text-decoration: none;

  .jeju {
    /* display: flex; */
    display: inline-block;
    background-color: red;
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
`;


const Main = () => {
  return (
    <>
    <Wrapper>
    <div>Main</div>
    <Link to="/Jeju" className="jeju">제주 여행</Link>
    
    </Wrapper>

    
    </>
  )
}

export default Main;