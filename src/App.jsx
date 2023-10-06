import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Todos from "./Todos.jsx";
function App() {
  return (
    <>
    <CssBaseline/>
    <h1>Todos</h1>
    <Todos/>
    </> 
    
  );

  
}

export default App
