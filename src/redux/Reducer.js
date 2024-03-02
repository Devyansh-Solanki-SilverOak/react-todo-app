function Reducer(state = [], action){

    if(action.type === "fetch_todo"){
        const jsonData = action.payload.jsonData;
        return [...jsonData];
    }
    else if(action.type === "add_todo"){
        const todoId = action.payload.todoId;
        const todoText = action.payload.todoText;
        return [...state, {id:todoId, title:todoText, body:todoText}];
    }
    else if(action.type === "delete_todo"){
        const todoId = action.payload.id;
        state.splice(todoId-1, 1);
        state.forEach((listObj, index)=>{
            listObj.id = index + 1;
        })
        return [...state];
    }
    else if(action.type === "submit_todo"){
        const todoId = action.payload.id;
        const todoText = action.payload.updateTerm;
        state[todoId-1].title = todoText;
        state[todoId-1].body = todoText;
        return [...state];
    }
    else{
        return [...state];
    }
}

export default Reducer;