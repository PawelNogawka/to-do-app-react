function Task(props) {
  const { text, date, important, id, active } = props.task;

  const finish = new Date(date).toDateString();

  const warning = {
    color:'#C03D29'
  }

  if (active) {
    return (
      <li className="task">
        <p className="task-name" style={important ? warning : null}>- {text} -</p>
        <p className="task-date">( do to {date} )</p>
        <button onClick={() => props.change(id)} className="task-btn done-btn">
          it was done
        </button>
        <button
          onClick={() => props.delete(id)}
          className="task-btn remove-btn"
        >
          remove
        </button>
      </li>
    );
  } else {
    return (
      <li className="task">
        <p className="task-name">- {text} -</p>
        <p className="task-date">( do to {date} )</p>
        <p>
          confirmation of exectution - <span className="task-confirmation">{finish}</span>
        </p>
        <button
          onClick={() => props.delete(id)}
          className="task-btn remove-btn"
        >
          remove
        </button>
      </li>
    );
  }
}

export default Task;
