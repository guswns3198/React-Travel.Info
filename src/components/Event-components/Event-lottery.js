// import react from 'react'
import styled from 'styled-components'
import {useState} from 'react';
import { useEffect } from 'react';
import { lottery_result } from '../../dummy/event_dummy_data';

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

.moveToFirst{
    width: 30px;
}
.moveToLast{
    width: 30px;
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
    height: 50px;
}

.pageBtn{

    width: 25px;
}


`


const EventLottery = () => {
    const [inputValue, setInputValue] = useState("");
    const [dummy, setDummy] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [lastPageCount, setLastPageCount] = useState(0);
    const [isFound , setIsFound] = useState(true)

    useEffect(()=>{
        setDummy(lottery_result);
    },[])
 

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSearch = (e) => {
        setIsFound(true)
        setPageCount(1);
        setDummy(lottery_result);
           let filteredDummies =  lottery_result.filter((el) => {
            return el.question.includes(inputValue)
        })
        setDummy(filteredDummies);
        if(filteredDummies.length !== 0){
            setIsFound(true)
        } else {
            setIsFound(false)
        }

    }
    const handleReset = () => {
        setIsFound(true)
        setDummy(lottery_result);
        setPageCount(1);
    }

    const Pagenation = (dummies) => {
        let arr = [];
        let last = 0;
        for(let i = 1 ; i < Math.ceil(dummies.length / 10 + 1) ; i++){
             arr.push(i);
            last = i
        };
        useEffect(()=>{
            setLastPageCount(Number(last));
        },[dummy])
      
        return arr;
    }

    const handlePagenation = (e) => {
        setPageCount(Number(e.target.textContent));
    }

    const handlePrevious = () => {
        if(pageCount > 1){
            setPageCount(pageCount - 1);
        }
    }

    const handleNext = () => {
        if(pageCount < lastPageCount){
            setPageCount(pageCount + 1);
        }
    }

    const handleLast = () => {
        setPageCount(lastPageCount);
    }

    const handleFirst = () => {
        setPageCount(1);
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
                        {isFound ? dummy.map((el, idx) => {
                            if(Math.ceil((idx + 1) / 10 ) === pageCount){
                                return (
                                    <tr key={idx}>
                                        <td>{idx}</td>
                                        <td>{el.question}</td>
                                        <td>{el.createdAt}</td>
                                        <td>{el.see}</td>
                                    </tr> 
                                )                         
                            }
                        }) : <div className='failSearch'>검색 결과가 없습니다</div>} 
                    </tbody>
                </table>
            </div> 

                <div className='pagenation-box'>
                    <button className='moveToFirst'onClick={() => handleFirst()}><span className='shape'></span>{`<<`}</button>
                    <button className='pageMove' onClick={() => handlePrevious()}><span className='shape'></span>{`<`}</button>
                    <div className='pageBtns'>
                        {Pagenation(dummy).map((el, idx)=> {
                            return(
                                <button key={idx} className='pageBtn' onClick = {(e) => handlePagenation(e)}>
                                    <span className='shape'></span>
                                    {el}
                                </button>
                            
                            )
                        })}
                        
                    </div>
                    <button className='pageMove' onClick={() => handleNext()}><span className='shape'></span>{`>`}</button>
                    <button className='moveToLast' onClick={() => handleLast()}><span className='shape'></span>{`>>`}</button>
                </div>

            <div className='searchBox'>
                <select>
                    <option value="제목">제목</option>
                </select>
                <textarea
                    onChange={e => handleChange(e)}
                    value = {inputValue}  ></textarea>
                <button className = "searchBtn" onClick={e => handleSearch(e)}>
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