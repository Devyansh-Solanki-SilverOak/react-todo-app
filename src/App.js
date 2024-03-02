import './App.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TodoContainer from './components/TodoContainer';
import SearchBar from './components/SearchBar';
import Context from "./context/Context";
import actions from './redux/actionCreators';


function App() {

  const list = useSelector((state) => state.list);

  const [searchTerm, setSearchTerm] = useState("");
  const [addTerm, setAddTerm] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [updateId, setUpdateId] = useState("");
  const [updateTerm, setUpdateTerm] = useState("");

  const getApiData = async () => {
    try{
      let url = "todo_lists.json";
      let data = await fetch(url);
      let jsonData = await data.json();
  
      actions.fetchTodo(jsonData); // redux - actionCreator function
    }
    catch(e){
      console.log("some problem to get data...", e)
    }
  }

  useEffect(() => {
    getApiData();
  }, [])  

  return (
    <>
      <Context.Provider value={{actions, list, searchTerm, setSearchTerm, addTerm, setAddTerm, deleteId, setDeleteId, updateId, setUpdateId, updateTerm, setUpdateTerm}}>
        <SearchBar></SearchBar>
        <TodoContainer></TodoContainer>
      </Context.Provider>
    </>
  );
}

export default App;
