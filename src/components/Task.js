const Task = (props) => {
  const style = {
    color: "red",
  };
  const { text, date, id, active, important,finishDate } = props.task;
  if (active) {
    return (
      <div>
        <strong style={important ? style : null}>{text} </strong> - do{" "}
        <span>{date} </span>
        <button onClick={() => props.Change(id)}>zostało zrobione</button>
        <button onClick={() => props.Delete(id)}>X</button>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString()
    return (
      <div>
        <strong >{text} </strong> (zrobić do do {date}) - potwierdzenie wykonania zostało zrobione - {finish}
        <button onClick={() => props.Delete(id)}>X</button>
      </div>
    );
  }
};

export default Task;
