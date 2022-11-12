import React, {ChangeEvent,MouseEvent, useState} from 'react';

type FullInput2PropsType ={
    addMessage: (title:string)=> void
}

const FullInput2 = (props:FullInput2PropsType) => {
    let [title,setTitle]=useState('')
    

    const OnChangeInputHandler =(event: ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value) // ==setTitle(title)
    }
    const onClickHandler =() =>{
            props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input  value={title}   onChange={OnChangeInputHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export default FullInput2;