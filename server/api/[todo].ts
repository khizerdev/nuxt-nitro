export default defineEventHandler(async (event) => {
  try {
    const { todo } = event.context.params;
    const response = await $fetch(`https://dummyjson.com/todos/${todo}`);

    console.log(event.context);

    const idealResponse = {
      id: response.id,
      todo: response.todo,
      completed: response.completed,
    };

    return idealResponse;
  } catch (error) {
    throw createError({
      statusCode: 404,
      message: "Can't find the todo!",
    });
  }
});
