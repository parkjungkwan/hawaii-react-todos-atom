import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import ToDOInput from "./schedule/ToDoInput";
import ToDoList from "./schedule/ToDoList";
import store from "./schedule/store"

const App = () => {
  return <>
    <Provider store = {store}>
      <ToDOInput/><br/><ToDoList/>
    </Provider>
  </>
}

export default App;
