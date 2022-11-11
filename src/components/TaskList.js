import Task from "./Task";

function TaskList(props) {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <ul className="task-list task-list-active">
        <h2 className="task-heading">Task to be done:</h2>
        {activeTasks.length > 0 ? (
          activeTasks.reverse()
        ) : (
          <p class="task-alert">There are no tasks to be done</p>
        )}
      </ul>
      <ul className="task-list task-list-done">
        <h2 className="task-heading">Done tasks ({doneTasks.length}) :</h2>
        {doneTasks}
      </ul>
    </>
  );
}

export default TaskList;
