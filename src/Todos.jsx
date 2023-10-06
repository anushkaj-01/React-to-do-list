import {useState,useffect} from "react"
import List from '@mui/material/List';
import Todoitem from "./Todoitem";
import Todoform from "./Todoform";
const initTodo=[
    {id:1, text:"walk the dog", completed: false},
    {id:2, text:"walk the dog", completed: false},
    {id:3, text:"walk the dog", completed: true},
    {id:4, text:"walk the dog", completed: false}
];
export default function Todos() {
    const [todos,setTodos]= useState(initTodo);
    const removeTodo=(id)=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter((t)=>t.id!=id);
      })
    }
    const toggleTodo=(id)=>{
      setTodos((prevTodos)=>
      { return prevTodos.map((todo)=>{
        if(todo.id==id){
          return {...todo,completed: !todo.completed}
        } else{
          return todo;
        }
      })
        
      })

    }

    const addTodo=(text)=>{
      setTodos((prevTodos)=>{
        return [...prevTodos,{text:text,id:8,completed:false}]
      })
    }
    return(
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     {todos.map((todo)=>{
        return <Todoitem todo={todo} key={todo.id} removeTodo={()=>removeTodo(todo.id)} toggleTodo={()=>toggleTodo(todo.id)}/>
        
     })}
     <Todoform addTodo={addTodo}/>
    </List>
    );
}
   

