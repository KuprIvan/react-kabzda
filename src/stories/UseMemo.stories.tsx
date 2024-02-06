import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'React.memo demo',
}


const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)
export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Ivan', 'Nastya', 'Ruslan', 'Nikita']);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>AddUser</button>
        <NewMessagesCounter count={counter}/>
        <Users users={newArray}/>
    </>
}
export const LikeUseCallback = () => {
    console.log('LikeUseCallback');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['JS', 'React', 'HTML', 'CSS']);

    const memoizdedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books]);
    const memoizdedAddBook2 = useCallback(() => {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessagesCounter count={counter}/>
        <Book addBook={memoizdedAddBook}/>
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('books secret');
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)

