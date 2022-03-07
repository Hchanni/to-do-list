import React from 'react';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import { isDefaultClause } from 'typescript';

// Functional Component (FC)
const App:React.FC = () =>{
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("");
    }

  };

  console.log(todo)
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      
    <InputField todo= {todo} settodo={setTodo} handleadd = {handleAdd}/>


    </div>
  );
}

export default App;
