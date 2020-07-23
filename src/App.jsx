import React from "react";
import TodosApp from "./todos/TodosApp";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./todos/store";
const App = () =>{
    const store = createStore(rootReducer)
    return (
        <Provider store={store}>
            <TodosApp/>
        </Provider>
    )
}
export default App