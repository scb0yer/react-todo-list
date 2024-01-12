import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboardList, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faClipboardList, faTrash);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const deleteTask = (index) => {
    const newTasks = [...task];
    if (task[index][1] === 0) {
      newTasks[index][1] = 1;
      setTask(newTasks);
      console.log(task[index][1]);
    } else if (task[index][1] === 1) {
      newTasks[index] = "A";
      newTasks.sort().shift();
      setTask(newTasks);
    }
  };

  return (
    <>
      <Header />
      <main>
        <ToDo
          task={task}
          setTask={setTask}
          newTask={newTask}
          setNewTask={setNewTask}
        />
        {task.map((task, index) => {
          return (
            task[1] === 0 && (
              <div key={index}>
                <input
                  type="checkbox"
                  name="delete"
                  onClick={() => {
                    deleteTask(index);
                  }}
                />
                {task[0]}
                <FontAwesomeIcon icon="trash" size="sm" color="#751a46" />
              </div>
            )
          );
        })}
        {task.map((task, index) => {
          return (
            task[1] === 1 && (
              <div key={index} style={{ textDecoration: "lineThrough" }}>
                <input
                  type="checkbox"
                  name="delete"
                  onClick={() => {
                    deleteTask(index);
                  }}
                />
                {task[0]}{" "}
                <FontAwesomeIcon icon="trash" size="sm" color="#751a46" />
              </div>
            )
          );
        })}
      </main>
    </>
  );
}

export default App;
