import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../api/todoApi";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await deleteTodo(todo._id);
      // Refresh the todo list after deleting the todo
      dispatch({ type: "DELETE_TODO", payload: todo._id });
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <li className="todo-item">
      <h3 className="todo-item-title">{todo.title}</h3>
      <p className="todo-item-description">{todo.description}</p>
      <button className="todo-item-delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
