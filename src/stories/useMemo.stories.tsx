import {memo, useMemo, useState} from "react";


export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=> {
        let tempResultA = 1;//временная переменная
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while(fake<1000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA=tempResultA*i
        }
        return tempResultA
    },[a])


    for(let i=1; i<=b; i++){
        resultB = resultB *i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <h3>
            <div> result a: {resultA}</div>
            <div> result b: {resultB}</div>
        </h3>
    </>
}

const UsersSecret = (props:{users: Array<string>}) => {
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = memo(UsersSecret)


export  const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Инна', 'Валера', 'Игорь'])

    const newArray = useMemo(()=>{
        const newArray = users.filter(u=>u.toLowerCase().indexOf('а')>-1)
        return newArray
    },[users])
    const addUser = () => {
        const newUser= [...users, 'Света' + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <button onClick={()=>addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}