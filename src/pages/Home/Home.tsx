import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Todo from "../../components/Todo/Todo";
import "./Home.css";
import { useHome } from "./useHome";

const Home: React.FC = () => {
  const { todos, handleCompleted, handleDelete, handleInput, handleAdd } = useHome();
  return (
    <>
      <h3 style={{marginTop:"2rem"}}>To-Do List</h3>
      <h4 className="parent">Add a new task in the list</h4>
      <div className="parent">
        <SearchBar handleInput={handleInput} handleAdd={handleAdd}/>
      </div>
      <h4 className="parent">Added task in to-do list</h4>
      <div className="home">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
