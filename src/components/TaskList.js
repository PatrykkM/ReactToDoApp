import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);
   if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1
      }
      if (a.finishDate > b.finishDate) {
        return -1
      }
      return 0
    })
  }
  if (active.length >= 2) {
    active.sort((a, b) => {

      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0
    })
  }

  const activetasks = active.map((task) => {
    return (
      <Task
        key={task.id}
        task={task}
        Delete={props.Delete}
        Change={props.Change}
      />
    );
  });
  const donetasks = done.map((task) => {
    return (
      <Task
        key={task.id}
        task={task}
        Delete={props.Delete}
        Change={props.Change}
      />
    );
  });

  return (
    <>
      <div className="active">
        <h1>zadania do zrobieniea</h1>
      </div>
      {activetasks.length > 0 ? (
        activetasks
      ) : (
        <p>zrobiłeś wszsytko dzis już masz wolne</p>
      )}
      <div className="done">
        <h3>Zadania zrobione <em>({done.length})</em></h3>
        {done.length > 5 && <span style={{ fontSize: 10 }}>wyświetlonych jest jedynie 5 ostatnich zadań</span>}
        {donetasks.slice(0, 5)}

      </div>
    </>
  );
};

export default TaskList;
