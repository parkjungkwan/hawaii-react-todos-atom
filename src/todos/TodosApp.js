import {useSelector} from 'react-redux'
import React from "react";
import useActions from './store/user.action'
import {changeInput,insert, toggle, remove} from "./store/todos.reducer";
import Todos from './Todos'
const TodosApp = () => {
    const {input, todos} =
        useSelector(({todosReducer})=>{

            if (typeof(todosReducer.input) == 'undefined') {
                alert(`todos.input 은 undefinded 입니다`)
            }else{
                alert(`todos.input 은 객체 입니다`)
                return {input: todosReducer.input, todos: todosReducer.todos}
            }


        })
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        []
    )
    return (
        <Todos input={input} todos={todos} onChangeInput={onChangeInput}
                onInsert={onInsert} onToggle={onToggle} onRemove={onRemove}/>)
}
export default React.memo(TodosApp)

