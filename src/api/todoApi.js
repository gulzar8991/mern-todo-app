import axios from "axios";

const API_BASE_URL = "/todos";

// Fetch all todos
export const fetchTodos = async () => {
  try {
    // console.log("Fetching todos...");
    const response = await axios.get(API_BASE_URL);
    // console.log("Todos fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    // console.error("Error fetching todos:", error);
    throw error;
  }
};

// Add a new todo
export const createTodo = async (newTodo) => {
  try {
    const response = await axios.post(API_BASE_URL, newTodo);
    return response.data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};

// Update a todo
export const updateTodo = async (todoId, updatedTodo) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${todoId}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

// Delete a todo
export const deleteTodo = async (todoId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${todoId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
