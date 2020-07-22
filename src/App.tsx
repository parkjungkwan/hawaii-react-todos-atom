import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDOInput from "./schedule/ToDoInput";
import ToDoList from "./schedule/ToDoList";

const App = () => {
  return <>
  <ToDOInput/><br/><ToDoList/>
  </>
}

export default App;
