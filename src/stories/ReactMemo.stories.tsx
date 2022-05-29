import {memo, useState} from "react";

export default {
    title:'React.Memo Demo'
}

const NewMessagesCounter = (props:{count:number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props:{users: Array<string>}) => {
    console.log('users')
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
        </div>
}
const Users = memo(UsersSecret)


export  const Example1 = ()=> {
    const [counter, setCounter] = useState(1);
    const [users, setUsers] = useState(['Инна', 'Валера', 'Игорь'])

    const addUser = ()=> {
        const newUser= [...users, 'Света' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
    <button onClick={()=> setCounter(counter+1)}>+</button>
   <button onClick={addUser}>add user</button>
    <NewMessagesCounter count={counter}/>
    <Users users={users}/>
</>
}