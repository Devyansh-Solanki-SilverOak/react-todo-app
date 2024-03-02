import React from "react";
import Context from "../context/Context";
import { useState } from "react";
import { useContext } from "react";

function SearchBar(){
    const {actions, list, searchTerm, setSearchTerm, addTerm, setAddTerm, deleteId, setDeleteId, updateId, setUpdateId, updateTerm, setUpdateTerm} = useContext(Context);
    const [display, setDisplay] = useState(false);


    const handleAdd = () => {
        let lastId = list[list.length-1].id + 1;
        actions.addTodo(lastId, addTerm); // redux - actionCreator function
        setAddTerm("");
    }

    const handleDelete = () => {
        let id = Number(deleteId); // string to number conversion
        if(!isNaN(id)){
            if(id > 0  &&  id <= list.length){
                actions.deleteTodo(id);
                setDeleteId("");
            }
        }
    }
    
    const handleUpdate = () => {
        let id = Number(updateId);
        if(!isNaN(id)){
            if(id > 0  &&  id <= list.length){ setDisplay(true) }
        }
    }

    const handleSubmit = () => {
        let id = Number(updateId);
        actions.submitTodo(id, updateTerm);
        setDisplay(false);
        setUpdateTerm("");
        setUpdateId("");
    }

    const handleBack = () => {
        setDisplay(false);
        setUpdateTerm("");
        setUpdateId("");
    }

    
    const enterAdd = (e) => { if(e.key==="Enter" && addTerm!==""){handleAdd()} }
    const enterDelete = (e) => { if(e.key==="Enter" && deleteId!==""){handleDelete()} }
    const enterUpdate = (e) => { if(e.key==="Enter" && updateId!==""){handleUpdate()} }
    const enterSubmit = (e) => { if(e.key==="Enter" && updateTerm!==""){handleSubmit()} }

    return (
        <>
            <div className="my-5 mx-4 row">
                <div className="col-4 d-flex align-items-center">
                    <input className="w-75" type="text" value={addTerm} onKeyPress={enterAdd} onChange={(e) => setAddTerm(e.target.value)} placeholder="Add Your Task"/>
                    <button className="btn btn-success ms-3" disabled={(addTerm === "") ? true:false} onClick={handleAdd}>Add</button>
                </div>
                <div className="col-4 d-flex align-items-center">
                    <input className="w-75" type="text" value={deleteId} onKeyPress={enterDelete} onChange={(e) => setDeleteId(e.target.value)} placeholder="Enter the Id of list you want to delete"/>
                    <button className="btn btn-success ms-3" disabled={(deleteId === "") ? true:false} onClick={handleDelete}>Delete</button>
                </div>
                <div className="col-4 d-flex align-items-center">
                    <input className="w-75" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) } placeholder="Search By Title"/>
                </div>
                <div className="col-4 mt-3 d-flex align-items-center">
                    <input className="w-75" type="text" value={updateId} onKeyPress={enterUpdate} onChange={(e) => setUpdateId(e.target.value)} placeholder="Enter the Id of list you want to update" disabled={display ? true:false}/>
                    <button className="btn btn-success ms-3" disabled={(updateId === "") ? true:false} onClick={handleUpdate}>Update</button>
                </div>
                {display && <div className="col-4 mt-3 d-flex align-items-center">
                    <input className="w-75" type="text" value={updateTerm} onKeyPress={enterSubmit} onChange={(e) => setUpdateTerm(e.target.value)} placeholder={`Update the Title for list no.${updateId}`}/>
                    <button className="btn btn-success ms-3" disabled={(updateTerm === "") ? true:false} onClick={handleSubmit}>Submit</button>
                    <button className="btn btn-success ms-3" onClick={handleBack}>Back</button>
                </div>}
            </div>
        </>
    )
}

export default SearchBar;