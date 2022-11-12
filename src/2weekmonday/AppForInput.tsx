import React, {useState} from 'react';
import InputWithoutButton from './InputWithoutButton';
import ButtonWithoutInput from './ButtonWithoutInput';

const AppForInput = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [title,setTitle]=useState('')
    console.log(title)

    const addMessage =(title:string)=> {
        let newMessage = {message:title};
        setMessage([ newMessage, ...message,])
    }

    const addMessage2 =()=>{
        addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <InputWithoutButton title={title} setTitle={setTitle}/>
            {/*также как в допе понедельника title таски передается без пропсов*/}
            <ButtonWithoutInput callback={addMessage2} name={'bul'}/>
        </div>
    );
};

export default AppForInput;