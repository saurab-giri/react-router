import React from 'react'

const TodoList = (props) => {

   
return (
    <>
    <li>{props.text}</li>
    <button className="btn btn-danger" onClick={() => {props.onSelect(props.id)}}>Delete</button>
    </>
)
}
export default TodoList;