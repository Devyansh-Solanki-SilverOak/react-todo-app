import { bindActionCreators } from "redux";
import store from "./store";


const fetchTodo = (jsonData) => {return {type:"fetch_todo", payload:{jsonData:jsonData}} }
const addTodo = (todoId, todoText) => {return {type:"add_todo", payload:{todoId:todoId, todoText:todoText}} }
const deleteTodo = (id) => {return {type:"delete_todo", payload:{id:id}} }
const submitTodo = (id, updateTerm) => {return {type:"submit_todo", payload:{id:id, updateTerm:updateTerm}} }


const {dispatch} = store;
const actions = bindActionCreators({fetchTodo, addTodo, deleteTodo, submitTodo}, dispatch);

export default actions;