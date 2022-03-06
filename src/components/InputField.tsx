import React from 'react'
import './styles.css'

interface Props {
    todo:string;
    settodo: React.Dispatch<React.SetStateAction<string>>; 
}

const InputField: React.FC<Props> = ({ todo, settodo }) => {
  return (
    <form className='input'>
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