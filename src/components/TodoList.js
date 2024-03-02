import React from "react";

function TodoList({id, title, text}){

    return (
        <>
            <div className="border border-success m-3 p-2">
                <h4>
                    <span>{id}. </span>
                    {title}
                </h4>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TodoList;