import { useState } from "react"
import Todoitem from "./Todoitem"
import AddTodoitem from "./AddTodoItem"

function Todo(){
    // const[text,setText]=useState("")
    const[todos,setTodos]=useState([])
    function handleAdd(text){
        const newItem={
            id:Math.random()*10000+text,
            title:text,
            status:false
        }
        const itemAfterAddition=[...todos,newItem]
        setTodos(itemAfterAddition)
    }
    console.log(todos)
    function handleToggle(id){
        const changedStatus=todos.map(el=>el.id===id?{...el,status:!el.status}:el)
        setTodos(changedStatus)
    }
    function deleteFunctionality(id){
        const fileteredArr=todos.filter(el=>el.id!==id)
        setTodos(fileteredArr)
    }
    return(
    <div>
        <AddTodoitem handleAdd={handleAdd} />
        <div>
        {todos.map(el=>(<Todoitem key={el.id} id={el.id} title={el.title} status={el.status} handleToggle={handleToggle} deleteFunctionalitys={deleteFunctionality}/>))} 
        </div>
    </div>
    )
}
export default Todo