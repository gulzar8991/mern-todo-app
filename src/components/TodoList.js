import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { fetchTodos } from "../api/todoApi";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTodos = async () => {
      try {
        const todosData = await fetchTodos();
        dispatch({ type: "SET_TODOS", payload: todosData });
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    getTodos();
  }, [dispatch]);

  return (
    <div className="todo-list-container">
      <h2 className="todo-list-title">Todo List</h2>
      {todos.length === 0 ? (
        <p className="no-todos">No todos found.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
