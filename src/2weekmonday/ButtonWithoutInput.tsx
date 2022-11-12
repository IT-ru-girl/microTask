import React from 'react';

type ButtonWithoutPropsType={
    name: string
    callback: ()=> void
}

const ButtonWithoutInput = (props:ButtonWithoutPropsType) => {
    const onClickHandler=()=>{
        props.callback()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default ButtonWithoutInput;