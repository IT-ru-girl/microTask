import React, {useState} from 'react';
import FullInput2 from './FullInput2';

const Input2 = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
const addMessage =(title:string)=> {
        let newMessage = {message:title};
    setMessage([ newMessage, ...message,])
}
    return (
        <div className={'Input2'}>
            <FullInput2 addMessage={addMessage}/>
            {message.map((el, index) => {
                return <div key={index}>{el.message}</div>
            })}

        </div>

    )
};

export default Input2;