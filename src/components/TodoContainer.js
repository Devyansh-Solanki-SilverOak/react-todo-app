import React from "react";
import TodoList from "./TodoList";
import Context from "../context/Context";
import { useContext } from "react";

function TodoContainer(){

    const {list, searchTerm} = useContext(Context);
    

    const searchedList = list.filter((listObj)=>{
        let listTitle = listObj.title;
        return listTitle.includes(searchTerm)
    })

    return (
        <div className="border m-3">
            {
                searchedList.map((listObj)=>{
                    return <TodoList key={listObj.id} id={listObj.id} title={listObj.title} text={listObj.body}></TodoList>
                })
            }
        </div>
    )
}

export default TodoContainer;