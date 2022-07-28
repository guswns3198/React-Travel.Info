import shortId from 'shortid';

const dummy_data = [
    {
        id: shortId(),
        username: 'sehyeon',
        password: '123',
        main_content: '결제가 안돼요',
        sub_content: '외않되?',
        updatedAt: '2022-07-27'
    },
    {
        id: shortId(),
        username: 'hyeonJun',
        password: '456',
        main_content: '부분환불을 받고 싶어요',
        sub_content: '네명중 한명이 못가게 되어서 한명값을 환불하고 싶어요',
        updatedAt: '2022-07-26'
    }
]

export default dummy_data;