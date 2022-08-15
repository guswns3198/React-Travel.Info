import styled from "styled-components";
import { useState } from 'react';
import Footer from "../components/Footer";
import dummy_data from "../dummy/dummy_data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
    height: 75vh;

    .num_list{
        margin: 0px 10px;
        font-size: 25px;
        cursor: pointer;
    }

    .pageNation{
        display: flex;
        justify-content: center;
    }

    .username{
        text-align: cmenter;
    }

    .uptitle{
        width: 100%;
        margin-left: 0px;
    }

    .upcontent{
        margin-left: 0px;
        width: 100%;
    }

    .answer{
        margin: 10px 0px;
    }

    .title{
        cursor: pointer;
        flex-grow: 9;
        font-weight: bold;
        font-size: 24px;
    }
    
    .title:hover{
        color: blue;
    }

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

    .q{
        display: flex;
        justify-content: center;
    }
    .container{
        display: flex;
        justify-content: center;
        height: 120vh;
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
        height: 130px;
        align-items: center;
        justify-content: center;
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
        height:100%;
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
        width: 150px;
    }
    
    .check{
        color: green;
        height: 40px;
        width: 40px;
        padding-left: 10px;
        }

    .unCheck{
        color: lightgray;
    }

    .answer_container{
        border: 9px solid coral;
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
    justify-content: start;
    align-items: center;
    background-color: white;
    width: 800px;
    height: 300px;
    border-radius: 1rem;
    font-size: 21px;
    white-space: pre;
    text-align: left;
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
        background-color: lightskyblue;
        color: black;
        cursor: pointer;
    }

`


const FAQ = () => {

    const [isOpen, setIsOpen] = useState(false); // 모달창이 열렸나 닫혔나
    const [select, setSelect] = useState(null); // 몇번째 모달창이 열렸는지
    const [click, setClick] = useState(false); // 질문창이 열렸나 닫혔나
    const [qopen, setQopen] = useState(''); // 몇번째 질문창이 열렸는지
    const [title, setTitle] = useState(''); // 새로작성하는 질문의 제목을 저장해주기 위한 스테이트
    const [content, setContent] = useState(''); // 새로작성하는 질문의 내용을 저장해주기 위한 스테이트
    const [tweets, setTweets] = useState(dummy_data); // 더미에 계속 새로운 질문들을 추가해주기위한 스테이트
    const [answer, setAnswer] = useState(''); // 새로작성된 질문의 답변의 내용을 저장해주기 위한 스테이트
    const [update, setUpdats] = useState(false); // 수정버튼을 눌렀나 안눌렀나
    const [upOpen, setUpOpen] = useState(null); // 어떤 컨테이너의 수정버튼을 눌렀는지 아이디 비교를 위해
    const [upTitle, setUpTitle] = useState(''); // 수정하는 제목을 저장해주는애
    const [upContent, setUpContent] = useState(''); // 수정하는 내용을 저장해주는애
    const [page, setPage] = useState(1);


    const openModalHandler = () => { // 모달버튼을 누르면 실행될 함수 (열렸니 닫혔니)
      setIsOpen(!isOpen)
    };

    const choice = (el) => { // 특정 모달 버튼을 눌렀을때 그에 해당하는 컨텐트만 보여주기 위한 함수
        setSelect(list[el].content)
    };

    const openQuestions = (e) => { // 특정 질문을 눌렀을때 해당된 창만 열리게 해주는 함수
        setQopen(e);
        
    }

    const handleChangeTitle = (e) => { // 인풋창에 입력한값을 그대로 저장해주는 함수
        setTitle(e.target.value)
      }
    
    const handleChangeContent = (e) => { // 위와 동일
        setContent(e.target.value)
      }

    const handleChangeAnswer = (e) => { // 위와 동일
        setAnswer(e.target.value)
    }

    const handleUpdateTitle = (e) => { // 수정할때 제목
        setUpTitle(e.target.value)
      }
    
    const handleUpdateContent = (e) => { // 수정할때 내용
        setUpContent(e.target.value)
      }

    const handleButtonClick = () => { // 질문을 등록했을때 기존 더미 배열에 추가시켜주는 함수
        
        if(title !== '' && content !== ''){
            const tweet = {
                id: tweets.length ,
                username: 'sehyeon',
                password: '123',
                main_content: title,
                sub_content: content,
                updatedAt: new Date().toLocaleDateString('ko-KR'),
                page: Math.ceil((tweets.length + 1) /5)
        };

        const newTweets = [tweet, ...tweets]
        setTweets(newTweets)
        }
        else{
            if(title === ''){
                alert('제목을 입력해주세요!!')
            }
            if(content === '' && title !== ''){
                alert('내용을 입력해주세요!!')
            }
        }
    }

    const handleButtonClick2 = (e) => { // 답변을 등록했을때 기존 더미 배열의 답변부분만 재할당해주는 함수
        if(answer === ''){
            alert('답변을 등록해주세요!!')
        }
        else{
            tweets.map(el => {
                if(el.id === e){
                    el.answer = answer
                }
            })
            setTweets([...tweets])
        }
    }

    const handleDeleteButton = (e) => { // 삭제버튼 , 아이디를 인자로 받아와서 해당아이디를 가진 컨테이너만 빼고 나머지를 리턴해주는 필터 함수
        const deletetweet = tweets.filter( el =>
            el.id !== e
        )
        setTweets(deletetweet)
    }

    const handleUpdateButton = (e) => { // 수정버튼을 누르면 실행되는 함수
        setUpdats(!update)
        tweets.map(el => {
            if(el.id === e){
                el.main_content = undefined
                el.sub_content = undefined
            }
            setTweets([...tweets])
        })
        setUpOpen(e)
    }

    const handleUpdateButton2 = (e) => { // 완료버튼을 누르면 실행되는 함수
        if(upTitle !== '' && upContent !== ''){
            setUpdats(!update)
            tweets.map(el => {
            if(el.id === e){
                el.main_content = upTitle
                el.sub_content = upContent
                el.answer = undefined
            }
            setTweets([...tweets])
        })
        setUpOpen(null)
        clear()
        }
        else{
         if(upTitle === '' && upContent === ''){
            alert('제목을 입력해주세요!!')
         }
         if(upContent === '' && upTitle !== ''){
            alert('내용을 입력해주세요!!')
         }
        }
    }

    const clear = () => { //질문 등록 버튼 || 수정 완료 버튼을 눌렀을때 인풋창을 초기화 해주기 위한 함수
        setTitle('')
        setContent('')
        setUpContent('')
        setUpTitle('')
        setAnswer('')
    }

    const handleColor = (e) =>{ // 모달창이 눌렸을때 하늘색으로 바꿔주기 위한 함수

        document.getElementById(e).style.background = "lightSkyBlue";
        
    }

    const gray = () => {    // 모달창이 다시 닫혔을때 원래 색으로 돌아오려는 함수
        let a = document.querySelectorAll('.btn');
        for(let i = 0 ; i < a.length; i++){
            a[i].style.background = 'gray';
        }
    }   // 하지만 모달창이 닫히고나면 그이후에 이 함수때문에 hover가 먹통이 되서 얘는 다시 손봐야됨

    let arr = []

    const pageNation = (count) => {
        for(let i = 1 ; i <= count ; i++){
            arr.push(i)
        }
        return arr
    }
    
    pageNation(Math.ceil(tweets.length / 5))

    const list = [ // 모달들의 더미데이터
        { id:0, name: '여행상품 예약은 어떻게 하나요 ?',
            content: `            여행상품의 예약은 온라인상에서, 전화, 또는 e-mail을 통해 문의 및 예약하실수 있으며, 
            365일 24시간 언제든지 예약하실 수 있습니다.
    
            (단, 전화상담 가능시간 평일 09:00~18:00 / 토,일요일 및 공휴일 휴무)
    
            예약후 영업일기준 24시간내에 고객께 전화나 메일로 
            여행 출발일로부터 종료일까지 예약의 전반적인 사항을 체크하여 처리해 드립니다.`},
        { id:1, name: '예약을 취소하고 싶습니다.',
            content: `            인터넷상에서 예약취소나 수정은 불가능합니다.
            예약취소나 여행자정보 변경을 원하시면 반드시 담당자에게 연락을 주셔야 합니다.
    
            모든 취소는 근무일(공휴일 및 토, 일요일 제외) 및
            근무시간(18시 30분까지) 내에 취소요청을 해주시기 바랍니다.
    
            또한 여행자의 여행계약 해제 요청이 있는 경우
            여행약관에 의거 소정의 최소료비용이 발생할 수 있습니다.`},
        { id:2, name: '해외 패키지 예약이 가능한가요?',
            content: `  현재 코로나로 인하여 각 국가별 입국 가능 조건이 상이하며, 사전고지 없이 변경될 수 있습니다.`}
    ]

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
                            <button onClick={() => {
                                handleButtonClick();
                                clear()
                            }}>등록</button>
                        </div>
                    </div>
                        {tweets.map((el) => {
                            return (
                                <div key={el.id}>
                                    {el.page === page ?
                                    <div className="list_container">
                                        <div>
                                            <div className="list_head">
                                                {el.main_content !== undefined ?
                                                <>
                                                <div onClick={() => {
                                                    openQuestions(el.id);
                                                    qopen === el.id ? setClick(!click) : setClick(click)
                                                }} className='title'
                                                > {el.main_content}</div>
                                                <div>
                                                    <div className="username">{el.username}</div>
                                                    <div className="end">{el.updatedAt}</div>
                                                </div>
                                                </>:
                                                <div>
                                                <input className="uptitle" placeholder=" 제목을 입력하세요" type='text' onChange={handleUpdateTitle} value={upTitle}></input>
                                                <textarea className="upcontent" placeholder="내용을 입력하세요." onChange={handleUpdateContent} value={upContent}></textarea>
                                                </div>
                                                }
                                            </div>
                                        </div>
                                        <div className="button">
                                            {click && qopen === el.id && !update ? 
                                            <>
                                            <button onClick={() => {
                                                handleUpdateButton(el.id)
                                            }}>수정</button> 
                                            <button onClick={() => {
                                                handleDeleteButton(el.id)
                                            }}>삭제</button>
                                            </> :
                                            undefined
                                        }
                                        {update && qopen === el.id ?
                                        <button onClick={() => {
                                            handleUpdateButton2(el.id);
                                        }}>완료</button> :
                                        undefined}
                                        </div>
                                        {el.answer !== undefined ?
                                        <FontAwesomeIcon icon={faCheck} className='check' /> :
                                        <FontAwesomeIcon icon={faCheck} className='check unCheck' />}
                                        
                                    </div>
                                    : undefined}
                                    {qopen === el.id && click ?
                                        <div className="answer_container">
                                        {el.sub_content !== undefined ?
                                        <div className="answer_head line">
                                            Q. {el.sub_content}
                                        </div>:
                                        undefined
                                        }
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
                                            <textarea className="answer" placeholder="답변을 입력하세요." onChange={handleChangeAnswer}></textarea>
                                            <button onClick={() =>{
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
                <div className="pageNation">{arr.map((el, key) => {
                    return (
                        <div key={key}>
                            <span className="num_list" onClick={() => {
                                setPage(el);
                            }}>{el}</span>
                        </div>
                    )
                })}</div>
            <Footer /> 
        </Wrapper>
        </>
    )
}

export default FAQ;
