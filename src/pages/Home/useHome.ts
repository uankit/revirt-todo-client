import React, { useEffect, useState } from "react";
import ITodo from "../../models/Todo";
import { Todos } from "../../services/todo";

export const useHome = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    Todos.getAll()
      .then((res) => res.json())
      .then((res) => setTodos(res));
  }, []);

  const handleCompleted = (id: number, e?: React.SyntheticEvent) => {
    e?.preventDefault();
    const todo = todos.find((todo) => todo.id === id);
    Todos.updateTodo({ id: id, isCompleted: !todo?.isCompleted })
      .then((res) => res.json())
      .then(() => alert("Updated Successfully"));
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDelete = (id: number, e?: React.SyntheticEvent) => {
    e?.preventDefault();
    Todos.deleteTodo({ id: id })
      .then((res) => res.json())
      .then((res) => alert(res));
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleInput = (text: string, e?: React.SyntheticEvent) => {
    e?.preventDefault();
    setSearchInput(text);
  };

  const handleAdd = (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    if (searchInput !== "") {
      Todos.addTodo({ id: todos.length + 1, title: searchInput })
        .then((res) => res.json())
        .then((res) => setTodos([...todos, res]));
    }
  };

  return {
    todos,
    handleCompleted,
    handleDelete,
    handleInput,
    handleAdd,
  };
};
