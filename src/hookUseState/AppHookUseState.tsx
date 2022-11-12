import React, {useState} from 'react';


// let arr = [10, ()=>{}]
// let counter = arr[0]
// let setCounter =  arr[1]
// let arr1 =[counter, setCounter]
// let arr2 = [setCounter, ...arr, counter]
// console.log(arr2)
// let [counter, setCounter]= arr
// useState выплевывает нам массив

const AppHookUseState = () => {
    // let counter1 =10
    let [counter1, setCounter1]= useState(1)
    let counter2 =10

    const onClickHandler =()=>{
        setCounter1(counter1+1)
    }

    return (
        <div>
            <div>
                <div>иван</div>
                <div>{counter1}</div>
                <button onClick={onClickHandler}>+</button>
            </div>
            <div>
                <div>петя</div>
                <div>{counter2}</div>
                <button>+</button>
            </div>
        </div>
    );
};

export default AppHookUseState;