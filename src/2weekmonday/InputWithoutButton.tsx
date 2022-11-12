import React, {ChangeEvent} from 'react';

type InputWithoutPropsType={
    title: string
    setTitle:(title:string)=> void
}

const InputWithoutButton = (props: InputWithoutPropsType) => {
    const OnChangeInputHandler =(event: ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(event.currentTarget.value) // ==setTitle(title)
    }
    return (
        <div>
            <input  value={props.title}   onChange={OnChangeInputHandler}/>
        </div>
    );
};

export default InputWithoutButton;