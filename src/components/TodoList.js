import React, { useContext } from 'react';
import TodosContext from '../context';

export default function TodoList() {
    const { state, dispatch } = useContext(TodosContext);
    const title =
        state.todos.length > 0
            ? `${state.todos.length} Todos`
            : 'Nothing To Do';
    return (
        <div className="container mx-auto max-w-md text-center font-mono">
            <h1 className="text-5xl text-bold">{title}</h1>
            <ul className="text-white p-0">
                {state.todos.map(todo => (
                    <li
                        className="flex items-center bg-orange-500 border-2 border-black border-dashed my-2 py-4"
                        key={todo.id}
                    >
                        <span
                            onDoubleClick={() =>
                                dispatch({ type: 'TOGGLE_TODO', payload: todo })
                            }
                            className={`flex-1 ml-12 cursor-pointer ${todo.complete &&
                                'line-through text-gray-900'}`}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: 'SET_CURRENT_TODO',
                                    payload: todo
                                })
                            }
                            type="button"
                        >
                            <img
                                src="https://icon.now.sh/edit/0050c5"
                                alt="Edit-Icon"
                                className="h-6"
                            />
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                dispatch({ type: 'DELETE', payload: todo })
                            }
                        >
                            <img
                                src="https://icon.now.sh/delete/8b0000"
                                alt="Delete-Icon"
                                className="h-6"
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
