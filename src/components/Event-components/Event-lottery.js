// import react from 'react'
import styled from 'styled-components'

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
    background-color: gray;
    align-items: center;
    justify-content: center;

}

.pagenation-box > .pageBtns{
    display: flex;
    flex-direction: row;   
    margin: 10px;
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
`

const EventLottery = () => {
    return( 
        <Styles>
        <header>{`>이벤트 당첨자 발표`}</header>
        <div className='main'>

            <div className='table-container'>
                <table className = "table1" border="black">
                    <tbody>
                        <tr>
                            <th>번호</th>
                            <th>질문</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                        <tr>
                            <td>784</td>
                            <td>하와이 하얏트리젠시 2박 숙박권 당첨자 발표</td>
                            <td>2022.08.02</td>
                            <td>76</td>
                        </tr>
                        <tr>
                            <td>784</td>
                            <td>닫힌 브랜치 테스트</td>
                            <td>2022.08.02</td>
                            <td>76</td>
                        </tr>
                    </tbody>
                </table>
            </div> 

                <div className='pagenation-box'>
                    <button className='moveToFirst'></button>
                    <button className='pageMove'>앞</button>
                    <div className='pageBtns'>
                        <button className='pageBtn'>1</button>
                        <button className='pageBtn'>2</button>
                        <button className='pageBtn'>3</button>
                        <button className='pageBtn'>4</button>
                    </div>
                    <button className='pageMove'>뒤</button>
                    <button className='moveToLast'></button>
                </div>

            <div className='searchBox'>
                <select>
                    <option value="제목">제목</option>
                    <option value="내용">내용</option>
                </select>
                <input></input>
                <div>검색</div>
            </div>
            
        </div>
        </Styles>
    )
 
}

export default EventLottery;