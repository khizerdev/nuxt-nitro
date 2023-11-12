export default defineEventHandler(async (event) => {
  const { todo } = event.context.params;
  const response = await $fetch(`https://dummyjson.com/todos/${todo}`);

  console.log(event.context);

  const idealResponse = {
    id: response.id,
    todo: response.todo,
    completed: response.completed,
  };

  return idealResponse;
});
