export default function Todoitem({id,title,status,handleToggle,deleteFunctionalitys}){
 function handleT(){
    handleToggle(id)
 }
    return(
     <div>
      <div key={id}>{title}-{status?"completed":"not completed"}
      <button onClick={handleT}>Toggle</button>
      <button onClick={()=>{deleteFunctionalitys(id)}}>Delete</button>
      </div>   
     </div>
    ) 
 }