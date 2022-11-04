import shortId from 'shortid';
import Seoul from '../pages/Seoul';

const dummy_data = [
    {
        id: shortId(),
        username: 'sehyeon',
        password: '123',
        main_content: '결제가 안돼요',
        sub_content: '결제를 하려고 하는데 결제가 안됩니다.',
        updatedAt: '2022-07-27',
        answer: '이용에 불편을 드려 죄송합니다. 신속한 문제 해결을 도와드리기 위해 담당 상담원이 연락드릴 예정입니다.',
        page: 1
    },
    {
        id: shortId(),
        username: 'hyeonJun',
        password: '456',
        main_content: '부분환불을 받고 싶어요',
        sub_content: '네명중 한명이 못가게 되어서 한명값을 환불하고 싶어요',
        updatedAt: '2022-07-26',
        answer: '내부 규정상 특가 상품은 환불을 도와드리기 어렵습니다. 이용에 불편을 드려 죄송합니다.',
        page: 1
    }
]



export default dummy_data;