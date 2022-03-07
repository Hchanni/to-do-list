import React from 'react'
import './styles.css'

interface Props {
    todo:string;
    settodo: React.Dispatch<React.SetStateAction<string>>;
    handleadd: (e: React.FormEvent) => void;
    
}

const InputField: React.FC<Props> = ({ todo, settodo, handleadd}) => {
  return (
    <form className='input' onSubmit={(e) => handleadd(e)}>
        <input type="input"
        value = {todo}
        onChange = {
            (e) =>settodo(e.target.value)
        }
         placeholder = "Enter a task" className= "input_box"/>
        <button className='input_submit' type="submit">Go</button>

    </form>
  )
}

export default InputField