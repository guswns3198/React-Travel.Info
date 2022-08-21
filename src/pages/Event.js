import styled from "styled-components";
import Footer from '../components/Footer'
import {useEffect, useState} from 'react'
import EventLottery from "../components/Event-components/Event-lottery";

const Styles = styled.div`

 .e-mainArea{
    display : flex;
    flex-direction: row;
    justify-content: center;
 }

 .e-sideBar{
    width: 15vw;
 }
 .e-intro{
    width: 70vw;
    margin-left: 20px;
}
.e-sideBar-click-container > li{
    margin-top: 5px;
    padding: 5px;
    border-bottom: 1px solid gray;
}
.e-sideBar-click-container > li:hover{
    color:green;
    transition: 0.2s;
 }
.e-sideBar > button{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 40px;
}
button{
    border: 3px solid black;
    background-color: transparent;
    letter-spacing: 4px;
    position: relative;
    color: white;
    overflow: hidden;
 }
button:focus{
    outline:none;  
}
button::before,
button::after{
    position:absolute;
    content: "";
    width:25%;
    height: 100%;
    transition: transform 0.3s;
    z-index: -1;
}

button::before{
    background-color: red;
    top: 0;
    left: 0; 
    transform: translateY(-100%)
}
button::after{
    background-color: orange;
    top: 0;
    left: 25%; 
    transform: translateY(100%)
}
.shape{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    background-color: black;
    z-index: -2;
}
.shape::before,
.shape::after{
    position: absolute;
    content:"";
    width: 25%;
    height:100%;
    transition: transform 0.3s;
    z-index: -1;

}

.shape::before{
    top: 0;
    left: 50%;
    background-color: green;
    transform: translateY(-100%);
}

.shape::after{
    top:0;
    left: 75%;
    background-color: purple;
    transform: translateY(100%);
}

button:hover::before,
button:hover::after,
button:hover .shape::before,
button:hover .shape::after{
    transform: translateY(0%);
}

.subtitle{
    font-weight: bold;
}

.e-sideBar > img{
    width: 100%; 
}
header{
    margin-top : 20px;
    padding-bottom: 3px;
    font-size: large;
    border-bottom: 3px solid green;
    font-weight: bold;
    
}
.tabMenu{
    display: flex;
    flex-direction: row;
    padding-bottom: 7px;
    margin-bottom: solid black 2px;
}

.tabMenu > li{
    margin-left: 10px;
    margin-top: 20px;
    
}
.tabMenu > li:hover{
    color: green;
    transition: 0.2s;
}


ul{
    list-style: none;
    border-bottom: solid black 1px; 
}
.eventContainer{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.eventList{
    margin: 10px;
}
.greenCircle{
  width : 15px;
  height : 15px;
  border-radius: 50%;
  background-color: lightgreen;
}

.redCircle{
  width : 15px;
  height : 15px;
  border-radius: 50%;
  background-color: red;
}

.columBox{
    display:flex;
    flex-direction: column;
}

.mainImg{
    height: 75%;
    width: 75%;
    border: black solid 1px;
    animation: fadein 1s;

    @keyframes fadein {
        from {
        opacity:0;
    }
    to {
        opacity:1;
    };
    }
}
`

const Modal = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    background-color: #DCFFDC;
    border: black solid 2px;
    height: 100px;
    transition: 2s;
    animation: fadein 2s;
    z-index: auto;
    margin-left: 6%;
    margin-right: 6%;


    @keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    };
}
  img{
    border: solid black 2px;
  }

  .modal-Text{
  }
    
  .Modal-Btn{
    height: 50px;
    width: 50px;
    background-color: black
    }

`



const Event = ({state}) => {
        async function Load(e){
            let data = await import("../dummy/event_dummy_data");
            // {IngEvent_dummy_data, EndEvent_dummy_data}
            if(e.target.textContent === "진행중인 이벤트"){
                let Event_dummy_data = data.IngEvent_dummy_data
                if(isFirstRender === false){
                    setIsFirstRender(true)
                }
                setIsFirstRender(false)
                setPageCount(1)
                setIsEnd(true)
                return setEventDummies( Event_dummy_data);
            } else {
                let Event_dummy_data = data.EndEvent_dummy_data
                if(isFirstRender === false){
                    setIsFirstRender(true)
                }
                setIsFirstRender(false)
                setPageCount(1)
                setIsEnd(false)
                return setEventDummies( Event_dummy_data);
            }
            
        }

    useEffect(()=>{
        setTimeout(()=>{
            return (
                <>
                {setOpenModal(true)}
                </>
            ) 
        }, 2000)
    }, [])

    
    const [eventDummies, setEventDummies] = useState([])
    const [openlottery , setOpenLottery] = useState(true)
    const [isFirstRender, setIsFirstRender] = useState(true)
    const [pageCount , setPageCount] = useState(1)
    const [isEnd, setIsEnd] = useState(true);
    const [openModal,setOpenModal] = useState(false);
    

    const handleModal = () => {
        setOpenModal(!openModal)
    }

    const handleToLottery = (e) => {
        if(e.target.textContent === '이벤트 안내'){
            return setOpenLottery(true);
        }
        else {
            return setOpenLottery(false);
        }
    }

    const HandleFirstRender = () => {
        setEventDummies([])
        setIsFirstRender(true)
    }

    const moveToCount = (e) => {
        setPageCount(Number(e.target.textContent))
    }

    const Pagenation = (dummies) => {
        let arr = [];

        for(let i = 1 ; i < Math.ceil(dummies.length / 8 + 1) ; i++){
            arr.push(i)
        };
       
        return arr;
    }




    return (
        <>
  
        <Styles>
        {openModal 
                ?
                    <Modal>
                        {/* <div>!CLICK!</div> */}
                        <img src={state} width = '25%' height= '100%' ></img>
                        <div className="modal-Text" >
                            오늘 떠나와 함께하는 즐거운 여행~! 각종 이벤트를 통한 할인으로 떠나보세요!
                        </div>
                        <button className="Modal-Btn" onClick={handleModal}>
                            <span className="shape"></span>
                            닫기
                        </button>
                    </Modal>
                : null}
            <section className="e-mainArea">
     
                {/*사이드바 영역 */}
                <article className="e-sideBar">
                    <header>이벤트</header>
                    <ul className="e-sideBar-click-container">
                        <li onClick={e => handleToLottery(e)}>이벤트 안내</li>
                        <li onClick={e => handleToLottery(e)}>이벤트 당첨자 발표</li>
                    </ul>
                    <button>
                       <span className="shape"></span>
                        {`예약확인&결제`}
                    </button>
                    <img src = {`https://img.modetour.com/mode2010/modetour/banner/150/181213_10001.jpg`}></img>
                    <img src = {`https://img.modetour.com/mode2010/modetour/banner/150/210222_db.jpg`}></img>
                    
                </article>

                {/*이벤트 메인 영역 */}
                <article className="e-intro">
                    {openlottery ? 
                        <>
                        <header onClick={() => HandleFirstRender()}>{`>이벤트안내`}</header>
                        <ul className="tabMenu">
                            <li className = "subMenu" onClick={e => Load(e)}>진행중인 이벤트</li>
                            <li className = "subMenu" onClick={e => Load(e)}>종료된 이벤트</li>
                        </ul>
                        <ul className="eventContainer">
                        
                        {isFirstRender 
                        
                        ? 
                        <img className="mainImg" src = {state}/>  
                        :
                        eventDummies.map((el, idx)=>{
                            if(Math.ceil((idx + 1)/8 ) === pageCount){
                                return (    
                                    <li className = "eventList" key = {idx}>
                                        <span className="columBox">  
                                                <img width = '340vw'src = {el.img}/>
                                                <div>
                                                <div className= {isEnd ? `greenCircle` : `redCircle` }></div>
                                                <div className="subtitle">{el.title}</div>
                                                </div>
                                        </span>
                                        {el.startDate} - 
                                        {el.endDate}
                                    </li>
                                    
                                )
                            }
                        })}
                   
                        </ul>

                        {Pagenation(eventDummies).map((el, idx) => {
                            return(
                                <button key = {idx} onClick={e => moveToCount(e)}>
                                     <span className="shape"></span>
                                    {el}
                                </button>
                            )
                        })}
                        </>
                        : <EventLottery />}
                </article>
            </section>
        </Styles>
        <Footer/>
        </>
    )
}

export default Event;