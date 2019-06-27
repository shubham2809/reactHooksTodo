import React, { useState, useEffect, useContext } from 'react';
import TodosContext from '../context';

export default function TodoForm() {
    const [todo, setTodo] = useState('');
    const {
        state: { currentTodo = {} },
        dispatch
    } = useContext(TodosContext);

    useEffect(() => {
        if (currentTodo.text) {
            setTodo(currentTodo.text);
        } else {
            setTodo('');
        }
    }, [currentTodo.id, currentTodo.text]);

    const handleSubmit = event => {
        event.preventDefault();
        if (currentTodo.text) {
            dispatch({ type: 'UPDATE_TODO', payload: todo });
        } else {
            dispatch({ type: 'ADD_TODO', payload: todo });
        }
        setTodo('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-5">
            <input
                type="text"
                className="border-black border-2 border-solid"
                onChange={event => setTodo(event.target.value)}
                value={todo}
            />
        </form>
    );
}
