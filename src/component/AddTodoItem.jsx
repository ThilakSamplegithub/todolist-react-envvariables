import { useState } from "react"
export default function AddTodoitem({handleAdd}){
    //here input and buttons are present as 1 component
    const[text,setText]=useState("")
    function handleChange(e){
        console.log(e.target.value)
        setText(e.target.value)
    }
    function handleClick(){
        handleAdd(text)
        setText("")
    }
    return (
        <div>
            <input value={text} placeholder="new todo-list" onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
        </div>
    )
}