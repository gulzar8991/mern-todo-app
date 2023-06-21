import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 className="title">Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
