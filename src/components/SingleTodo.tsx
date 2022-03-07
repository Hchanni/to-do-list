import React from 'react'
import { Todo } from "../model"
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import "./styles.css"
import { TodoList } from './TodoList'
type Props ={
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

export const SingleTodo = ({todo,todos,setTodos,}:Props) => {
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <form className='todos_single'>
      <span className="todos_single_text">
        {todo.todo}
        <div>
          <span className="icon">
            <AiFillEdit />
              </span>
          <span className="icon">
          <AiFillDelete />
            </span>
          <span className="icon" onClick={()=>handleDone(todo.id)>
          <MdDone />
            </span>
        </div>
        </span>
        
    </form>
  )
}
