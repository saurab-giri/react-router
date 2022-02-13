import React, { useState } from 'react'
import TodoList from './todoList';


const Todo = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);


    const itemAdd = (event) =>{
        setInputList(event.target.value);
    }
    const listOfItems = () =>{
    setItems((oldItems) => {
    return [...Items, inputList];
        });
        setInputList("");
    }

    const DeleteItem = (id) =>{
        console.log("Deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
        <div>
            <h1>Todo List</h1>
         <input type="text" placeholder='add item' value={inputList} onChange={itemAdd}/>
         <button className="btn btn-success" onClick={listOfItems}>add</button>
         <ul>
             {Items.map((itemValue, index) => {
                 return  <>
                 <TodoList 
                 text={itemValue}
                 key={index}
                 id={index}
                 onSelect={DeleteItem}/>
               </>
             })}
         </ul>
        </div>
        </>
    )
}
export default Todo