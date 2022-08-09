import styled from "styled-components";
import { useState } from 'react';
import Footer from "../components/Footer";
import dummy_data from "../dummy/dummy_data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// 주석

const Wrapper = styled.div`
    height: 75vh;

    .q_container{
        border: 3px solid black;
        border-radius: 20px;
        margin: 10px;
        padding: 10px;
    }

    .text{
        display:flex;
        justify-content: space-around;
    }

    textarea{
        width: 80%;
		padding: 10px;
        box-sizing: border-box;
		border: solid 2px #1E90FF;
		border-radius: 5px;
		font-size: 16px;
    }

    input{
        width:79.7%;
        height: 30px;
        margin-left:18px;
        border-radius: 5px;
        margin-bottom: 10px;
        font-size:16px;
    }

    .button2{
    }

    .q{
        display: flex;
        justify-content: center;
    }
    .container{
        display: flex;
        justify-content: center;
        height: 100vh;
    }
    .QNA{
        margin: 30px;
        border: 6px solid black;
        width: 800px;
        border-radius: 20px
    }
    .head{
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }


    .list_container{
        border: 3px solid black;
        border-radius: 20px;
        margin: 10px;
        display: flex;
        height: 100px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    
    .list_head{
        display:flex;
        justify-content: space-between;
        width: 500px;
        margin: 10px;
    }

    .end{
        display:flex;
        justify-content: flex-end;
        align-items: end;
        height:50%;
    }
    
    button{
        width: 50px;
        height: 30px;
        margin: 10px;
    }

    .button{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .check{
        color: green;
        height: 40px;
        width: 40px;
        // display: none;
        padding-left: 10px;
        }

    .unCheck{
        color: lightgray;
    }

    .answer_container{
        border: 9px solid OliveDrab;
        border-radius: 20px;
        margin: 0px 10px;
        animation: fadeIn 0.6s ease-in-out 0s forwards;
    }

    .answer_head{
        margin: 10px;
    }

    .line{
        border-bottom: 0.5px solid black;
        padding-bottom: 9px;
    }

    @keyframes fadeIn {
        from {
          opacity: 0;
        }
      
        to {
          opacity: 1;
        }
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
    font-size: 21px;
    
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
        height: 80px;
        width: 260px;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: gray;
        font-size: 120%;
        font-weight: bold;
    }

    .btn:hover{
        background-color: lightSkyBlue;
        color: black;
        cursor: pointer;
    }

`


const FAQ = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState(null);
    const [click, setClick] = useState(false);
    const [qopen, setQopen] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tweets, setTweets] = useState(dummy_data);
    const [answer, setAnswer] = useState('');


    const openModalHandler = () => {
      setIsOpen(!isOpen)
    };

    const choice = (el) => {
        setSelect(list[el].content)
    };

    const openQuestions = (e) => {
          setQopen(e);
          setClick(!click);
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
      }
    
    const handleChangeContent = (e) => {
        setContent(e.target.value)
      }

    const handleChangeAnswer = (e) => {
        setAnswer(e.target.value)
    }

    const handleButtonClick = () => {

        if(title !== '' && content !== ''){
            const tweet = {
                id: tweets.length ,
                username: 'sehyeon',
                password: '123',
                main_content: title,
                sub_content: content,
                updatedAt: new Date().toLocaleDateString('ko-KR')
        };

        const newTweets = [tweet, ...tweets]
        setTweets(newTweets)
        }
    }

    const handleButtonClick2 = (e) => {
        tweets.map(el => {
            if(el.id === e){
                el.answer = answer
            }
        })
        setTweets([...tweets])

    }

    const handleDeleteButton = (e) => {
        const deletetweet = tweets.filter((el)=>{
           return el.id !== e
        })
        setTweets(deletetweet)
    }

    const clear = () => {
        setTitle('')
        setContent('')
    }

    const list = [
        { id:0, name: '여행상품 예약은 어떻게 하나요 ?',
            content: `여행상품의 예약은 온라인상에서, 전화, 또는 e-mail을 통해 문의 및 예약하실수 있으며, 365일 24시간 언제든지 예약하실 수 있습니다. (단, 전화상담 가능시간 평일 09:00~18:00 / 토,일요일 및 공휴일 휴무) 예약후 영업일기준 24시간내에 고객께 전화나 메일로 여행 출발일로부터 종료일까지 예약의 전반적인 사항을 체크하여 처리해 드립니다.`},
        { id:1, name: '예약을 취소하고 싶습니다.',
            content: `인터넷상에서 예약취소나 수정은 불가능합니다. 예약취소나 여행자정보 변경을 원하시면 반드시 담당자에게 연락을 주셔야 합니다. 모든 취소는 근무일(공휴일 및 토, 일요일 제외) 및 근무시간(18시 30분까지) 내에 취소요청을 해주시기 바랍니다. 또한 여행자의 여행계약 해제 요청이 있는 경우 여행약관에 의거 소정의 최소료비용이 발생할 수 있습니다.`},
        { id:2, name: '해외 패키지 예약이 가능한가요?',
            content: `현재 코로나로 인하여 각 국가별 입국 가능 조건이 상이하며, 사전고지 없이 변경될 수 있습니다.`}
    ]

    const handleColor = (e) =>{

        document.getElementById(e).style.background = "lightSkyBlue";
        
    }

    const gray = () => {
        let a = document.querySelectorAll('.btn');
        for(let i = 0 ; i < a.length; i++){
            a[i].style.background = 'gray';
        }
    }




    return(
        <>
        <Wrapper>
                <h1 className="q">자주 묻는 질문</h1>
            <ModalBtn>
                <div className="modal_container">
                    <ul className="modal_item">
                    {list.map((el,index) =>{
                        return <li className='btn'
                            key={index}
                            id={el.id}
                            onClick={() =>{
                                openModalHandler();
                                choice(el.id);
                                handleColor(el.id);
                                }}>
                                {el.name}</li>
                    })}
                    </ul>
                </div>
            </ModalBtn>
            {isOpen ? <ModalBackdrop onClick={() =>{
                openModalHandler();
                gray();
            }}>
                    <ModalView onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        {select}
                    </ModalView>
            </ModalBackdrop>
            : undefined}
            <div className="container">
                <div className="QNA">
                    <h2 className="head">질문을 등록해 주세요!</h2>
                    <div className="q_container">
                        <div>
                            <input placeholder=" 제목을 입력하세요" type='text' onChange={handleChangeTitle} value={title}></input>
                        </div>
                        <div className="text">
                            <textarea placeholder="내용을 입력하세요." onChange={handleChangeContent} value={content}></textarea>
                            <button className="button2" onClick={() => {
                                handleButtonClick();
                                clear()
                            }}>등록</button>
                        </div>
                    </div>
                    
                        {tweets.map((el) => {
                            return (
                                <div key={el.id}>
                                    <div className="list_container" onClick={() => {
                                        openQuestions(el.id);
                                    }}>
                                        <div className="list">
                                            <div className="list_head">
                                                <div>Q. {el.main_content}</div>
                                                <div>{el.username}</div>
                                            </div>
                                            <div className="end">{el.updatedAt}</div>
                                        </div>
                                        <div className="button">
                                            <button>수정</button>
                                            <button onClick={() => {
                                                handleDeleteButton(el.id)
                                            }}>삭제</button>
                                        </div>
                                        {el.answer !== undefined ?
                                        <FontAwesomeIcon icon={faCheck} className='check' /> :
                                        <FontAwesomeIcon icon={faCheck} className='check unCheck' />}
                                        
                                    </div>
                                    {qopen === el.id && click ?
                                     <div className="answer_container">
                                        <div className="answer_head line">
                                            Q. {el.sub_content}
                                        </div>
                                        <div>
                                            {el.answer !== undefined ?
                                            <div className="answer_head">
                                                A. {el.answer}
                                            </div> :
                                                undefined
                                            }
                                        </div>
                                        {el.answer === undefined ?
                                        <div className="text">
                                            <textarea placeholder="답변을 입력하세요." onChange={handleChangeAnswer}></textarea>
                                            <button className="button2" onClick={() =>{
                                                handleButtonClick2(el.id);
                                            }}>등록</button>
                                        </div>
                                         :
                                        undefined}
                                     </div> :
                                      undefined}
                                </div>
                            )
                        })}
                </div>
            </div>
            <Footer /> 
        </Wrapper>
        </>
    )
}

export default FAQ;