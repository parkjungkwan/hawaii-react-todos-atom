import React, {useState} from "react";
const TodoItem = ({todo, onToggle, onRemove}) =>{
    return <>
        <div>
            <input
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
    {todo.text}
  </span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    </>
}


const Todos= ({input, todos, onChangeInput, onInsert,  onToggle, onRemove}) => {
    const onSubmit = e => {
        e.preventDefault()
        onInsert(input)
        onChangeInput('')
    }
    const onChange = e => {
        e.preventDefault()
        onChangeInput(e.target.value)
    }
   return <>
   <div>
       <form onSubmit={onSubmit} >
           <div>
               <div >
                   <input
                       type="text"
                       placeholder="Add a todo"
                       name="todo"
                       className="form-control"
                       value={input}
                       onChange={onChange}
                   />
               </div>
                   <button type="submit">
                      등록
                   </button>
           </div>
       </form>
       <div>
           {
               todos.map(todo=>(<TodoItem
                   todo={todo}
                   key={todo.id}
                   onToggle={onToggle}
                   onRemove={onRemove}/>))
           }
       </div>
   </div>
   </>
}
export default TodoItem