export const removeTodo = (todoId) => {
  return {
    type: "REMOVE_TODO",
    payload: todoId,
  };
};
