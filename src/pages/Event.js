import styled from "styled-components";
import Footer from '../components/Footer'
import {useEffect, useState} from 'react'
import EventLottery from "../components/Event-components/Event-lottery";
// import {EndEvent_dummy_data} from "../dummy/event_dummy_data";

const Styles = styled.div`
 border: solid 3px black;

 .e-mainArea{
    display : flex;
    flex-direction: row;
    justify-content: center;
 }

 .e-sideBar{
    border: solid black 1px;
    width: 15vw;
 }
 .e-intro{
    border: solid black 1px;
    width: 70vw;
    margin-left: 20px;
}
.e-sideBar-click-container > li:hover{
    color:red;
    transition: 0.2s;
 }
header{
    border-bottom: solid green;
}
.tabMenu{
    display: flex;
    flex-direction: row;
    padding-bottom: solid black 2px;
}
.tabMenu > li{
    margin-left: 10px;
}
.tabMenu > li:hover{
    color:red;
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
.greenCircle{
  width : 15px;
  height : 15px;
  border-radius: 50%;
  background-color: lightgreen;
}

.columBox{
    display:flex;
    flex-direction: column;
}
.eventList{
    border: solid black 2px;
}

`



const Event = () => {
        async function Load(e){
            let data = await import("../dummy/event_dummy_data");
            // {IngEvent_dummy_data, EndEvent_dummy_data}
            if(e.target.textContent === "진행중인 이벤트"){
                let Event_dummy_data = data.EndEvent_dummy_data
                return setEventDummies( Event_dummy_data);
            } else {
                let Event_dummy_data = data.IngEvent_dummy_data
                return setEventDummies( Event_dummy_data);
            }
        }
    
    const [eventDummies, setEventDummies] = useState([])
    const [openlottery , setOpenLottery] = useState(true)
    
    const handleToLottery = (e) => {
        if(e.target.textContent === '이벤트 안내'){
            return setOpenLottery(true);
        }
        else {
            return setOpenLottery(false);
        }
    }
    
    return (
        <>
        <Styles>
            <section className="e-mainArea">
                {/*사이드바 영역 */}
                <article className="e-sideBar">
                    <header>이벤트</header>
                    <ul className="e-sideBar-click-container">
                        <li  onClick={e => handleToLottery(e)}>이벤트 안내</li>
                        <li  onClick={e => handleToLottery(e)}>이벤트 당첨자 발표</li>
                    </ul>
                    <button>{`예약확인&결제`}</button>
                </article>

                {/*이벤트 메인 영역 */}
                <article className="e-intro">
                    {openlottery ? 
                        <>
                        <header>{`>이벤트안내`}</header>
                        <ul className="tabMenu">
                            <li className = "subMenu" onClick={e => Load(e)}>진행중인 이벤트</li>
                            <li className = "subMenu" onClick={e => Load(e)}>종료된 이벤트</li>
                        </ul>
                        <ul className="eventContainer">
                        {eventDummies.map((el, idx)=>{
                            return (    
                                <li className = "eventList" key = {idx}>
                                    <span className="columBox">  
                                            <img width = '340vw'src = {el.img}/>
                                            <div>
                                            <div className="greenCircle"></div>
                                                {el.title}
                                            </div>
                                        
                                    </span>
                                    {el.startDate} - 
                                    {el.endDate}
                                </li>
                            )
                        })}
                        </ul>
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