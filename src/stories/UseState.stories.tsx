import {memo, useState} from "react";

export default {
    title:'UseState Demo'
}
function generateDate(){
    console.log('generateDate')
    return 1
}

export  const Example1 = ()=> {
    const [counter, setCounter] = useState(generateDate);

    return <>
    <button onClick={()=> setCounter(state => {
    return state + 1
    })}>+</button>
        {counter}
</>
}