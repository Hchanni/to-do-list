import React from 'react';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';


// Functional Component (FC)
const App:React.FC = () =>{
  const [todo, setTodo] = useState<string>("")

  console.log(todo)
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      
    <InputField todo= {todo} settodo={setTodo} />


    </div>
  );
}

export default App;
