const ToDo = (props) => {
  const newTasks = [...props.task];
  const onChange = (event, target) => {
    if (target === "newTask") {
      props.setNewTask(event.target.value);
    }
  };
  const submitTask = (event) => {
    event.preventDefault();
    newTasks.push([props.newTask, 0]);
    props.setTask(newTasks);
    props.setNewTask("");
  };
  return (
    <form>
      <input
        name="newTask"
        type="text"
        placeholder="New task"
        value={props.newTask}
        onChange={(event) => {
          onChange(event, "newTask");
        }}
      />
      <button
        onClick={(event) => {
          submitTask(event);
        }}
      >
        Add Task
      </button>
    </form>
  );
};
export default ToDo;
