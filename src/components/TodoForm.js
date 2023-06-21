import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../api/todoApi";
import "./TodoForm.css";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newTodo = {
        title,
        description,
      };

      const createdTodo = await createTodo(newTodo);
      dispatch({ type: "ADD_TODO", payload: createdTodo });
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div className="todo-form-container">
      <h2 className="todo-form-title">Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <label className="todo-form-label" htmlFor="title">
          Title:
        </label>
        <input
          className="todo-form-input"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="todo-form-label" htmlFor="description">
          Description:
        </label>
        <textarea
          className="todo-form-textarea"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button className="todo-form-submit" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
