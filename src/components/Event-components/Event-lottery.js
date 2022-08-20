// import react from 'react'
import styled from 'styled-components'
import {useState} from 'react';
import { useEffect } from 'react';
// import Button from '@mui/material/Button';

const lottery_result = [
    {
        question: "하와이 카할라 리조트 1박 숙박권 당첨자 발표",
        createdAt: "2022.08.21",
        see: 87,
    },
    {
        question: "괌 PIC 슈페리어플러스 3박 숙박권 당첨자 발표",
        createdAt: "2022.08.21",
        see: 87,
    },    {
        question: "리모와 오리지날 캐빈 S 캐리어 당첨자 발표",
        createdAt: "2022.08.21",
        see: 87,
    },
    {
        question: "코타키나발루 수트라하버 마젤란 디럭스씨뷰 3박 숙박권 당첨자",
        createdAt: "2022.08.21",
        see: 87,
    },    {
        question: "르메르 브라운 스몰 크로와상백 당첨자 발표",
        createdAt: "2022.08.21",
        see: 87,
    },
    {
        question: "사이판 코랄오션 디럭스오션 3박 숙박권 당첨자 발표",
        createdAt: "2022.08.21",
        see: 87,
    },    {
        question: "세부 제이파크 디럭스 3박 숙박권 당첨자 발표",
        createdAt: "2022.08.21",
        see: 87,
    },
    {
        question: "구찌 1955 홀스빗 미니 GG 슈프림 숄더백 당첨자 발표",
        createdAt: "2022.08.21",
        see: 87,
    },

]


const Styles = styled.div`
header{
    border-bottom: solid green;
}

.main{
    margin-left: 30px ;
}

.pagenation-box{
    display: flex;
    flex-direction: row;
    /* background-color: gray; */
    align-items: center;
    justify-content: center;
    
}

.pagenation-box > .pageBtns{
    display: flex;
    flex-direction: row;   
    margin: 10px;
}
table{
    
    
     height : '50px'
}
button{
    width: 20px;
    height: 20px;
}

.searchBox{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.searchBtn{
    height: 50px;
    width: 50px;
    flex-grow: 0.2;

}
.resetBtn{
    flex-grow: 0.2;
    margin-left: 10px;
}
`


const EventLottery = () => {
    const [inputValue, setInputValue] = useState("")
    const [dummy, setDummy] = useState([])

    useEffect(()=>{
        setDummy(lottery_result)
    },[])
 

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = (e) => {
        
           const filteredDummies =  lottery_result.filter((el) => {
            return el.question.includes(inputValue)
        })

        setDummy(filteredDummies)
    }
    const handleReset = () => {
        setDummy(lottery_result)
    }

    return( 
        <Styles>
        <header>{`>이벤트 당첨자 발표`}</header>
        <div className='main'>
            <div className='table-container'>
                <table className = "table1" border = "black" width = "100%">
                    <tbody>
                        <tr>
                            <th>번호</th>
                            <th>질문</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                        {dummy.map((el, idx) => {
                            return (
                            <tr key={idx}>
                                <td>{idx}</td>
                                <td>{el.question}</td>
                                <td>{el.createdAt}</td>
                                <td>{el.see}</td>
                            </tr> 
                            )                         
                        })}
                    </tbody>
                </table>
            </div> 

                <div className='pagenation-box'>
                    <button className='moveToFirst'><span className='shape'></span></button>
                    <button className='pageMove'><span className='shape'></span>앞</button>
                    <div className='pageBtns'>
                        <button className='pageBtn'><span className='shape'></span>1</button>
                        <button className='pageBtn'><span className='shape'></span>2</button>
                        <button className='pageBtn'><span className='shape'></span>3</button>
                        <button className='pageBtn'><span className='shape'></span>4</button>
                    </div>
                    <button className='pageMove'><span className='shape'></span>뒤</button>
                    <button className='moveToLast'><span className='shape'></span></button>
                </div>

            <div className='searchBox'>
                <select>
                    <option value="제목">제목</option>
                </select>
                <textarea
                    onChange={e => handleChange(e)}
                    value = {inputValue}  ></textarea>
                <button className = "searchBtn" onClick={e => handleClick(e)}>
                    <span className='shape'></span>
                    검색</button>
                <button className = "resetBtn" onClick={() => handleReset()}>
                    <span className='shape'></span>
                     reset </button>
            </div>
            
        </div>
        </Styles>
    )
 
}

export default EventLottery;