import styled from "styled-components";
import { useState } from 'react';
import Footer from "../components/Footer";

const Wrapper = styled.div`
    height: 75vh;
    .q{
        display: flex;
        justify-content: center;
    }
`
const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 500px;
    height: 300px;
    border-radius: 1rem;
    position: relative;
    >.close-btn{
    position: absolute;
    top:2px;
    right:7px;
    cursor: pointer;
}
`

const ModalBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .modal_item{
        list-style: none;
        display:flex;
    }

    .btn{
        border: 5px solid black;
        border-radius: 20px;
        height: 150px;
        width: 260px;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`


const FAQ = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState(null);

    const openModalHandler = (e) => {
      setIsOpen(!isOpen)
    };



    const list = [
        { id:0, name: '여행상품 예약은 어떻게 하나요 ?',
            content: '여행상품의 예약은 온라인상에서, 전화, 또는 e-mail을 통해 문의 및 예약하실수 있으며, 365일 24시간 언제든지 예약하실 수 있습니다. (단, 전화상담 가능시간 평일 09:00~18:00 / 토,일요일 및 공휴일 휴무) 예약후 영업일기준 24시간내에 고객께 전화나 메일로 여행 출발일로부터 종료일까지 예약의 전반적인 사항을 체크하여 처리해 드립니다.'},
        { id:1, name: '예약을 취소하고 싶습니다.',
            content: '인터넷상에서 예약취소나 수정은 불가능합니다. 예약취소나 여행자정보 변경을 원하시면 반드시 담당자에게 연락을 주셔야 합니다. 모든 취소는 근무일(공휴일 및 토, 일요일 제외) 및 근무시간(18시 30분까지) 내에 취소요청을 해주시기 바랍니다. 또한 여행자의 여행계약 해제 요청이 있는 경우 여행약관에 의거 소정의 최소료비용이 발생할 수 있습니다.'},
        { id:2, name: '해외 패키지 상품 예약이 가능한가요?',
            content: '현재 코로나로 인하여 각 국가별 입국 가능 조건이 상이하며, 사전고지 없이 변경될 수 있습니다.'}
    ]



    const choice = (el) => {
        setSelect(list[el].content)
    }

    return(
        <>
        <Wrapper>
                <div className="q">자주 묻는 질문</div>
            <ModalBtn>
                <div className="modal_container">
                    <ul className="modal_item">
                    {list.map((el,index) =>{
                        return <li className="btn"
                                key={index}
                                onClick={() =>{
                                    openModalHandler();
                                    choice(el.id)
                                    }}>
                                    {el.name}</li>
                    })}
                    </ul>
                </div>
            </ModalBtn>
            {isOpen ? <ModalBackdrop onClick={openModalHandler}>
                    <ModalView onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div>{select}</div>
                    </ModalView>
            </ModalBackdrop>
            : undefined}
        <Footer />
        </Wrapper>
        </>
    )
}

export default FAQ;