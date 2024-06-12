

import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';


const init = () => {
  return JSON.parse(localStorage.getItem("ArrayTodos")) || [];
};


export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("ArrayTodos", JSON.stringify(todos));
      }, [todos]);
    
      const handleSubmit = (todo) => {
        const action = {
          type: "[TODO] Add Todo",
          payload: todo,
        };
    
        dispatch(action);
      };
    
      const handleDeleteTodo = (id) => {
        const action = {
          type: "[TODO] Remove Todo",
          payload: id,
        };
    
        dispatch(action);
      };
    
      const handleToggleTodo = (id) => {
        //console.log(id);
        const action = {
            type: "[TODO] Toggle Todo",
            payload: id,
          };
        dispatch(action);
      };     

      

  return {
    todos,
    todosCount : todos.length,
    pendingTodosCount : todos.filter((todo) => !todo.done).length,
    handleSubmit,
    handleDeleteTodo,
    handleToggleTodo

  }
}
