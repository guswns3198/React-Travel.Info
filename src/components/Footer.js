import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

const Footer = () => {
  return (
    <>
    <Wrapper>
    <div>@Copyright HJ,SH. All right reserved.</div>
    </Wrapper>
    </>
  )
}

export default Footer;