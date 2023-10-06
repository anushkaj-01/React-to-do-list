import {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Create from "@mui/icons-material/Create";
export default function Todoform({addTodo}){
    const[text,setText]= useState("");
    const handleChange = (evt)=>{
        setText(document.getElementById("standard-basic").value);
        console.log(document.getElementById("standard-basic").value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return(
    <ListItem>
    <form onSubmit={handleSubmit}>
     <TextField id="standard-basic" label="Standard" variant="standard" onChange={handleChange} value={text} InputProps={{endAdornment:(
              <InputAdornment position="end">
                <IconButton aria-label="createTodo" edge="end" type="submit">
                  <Create/>
                </IconButton>
              </InputAdornment>
     )
     }}
     />
     </form>
    </ListItem>
    );
}
