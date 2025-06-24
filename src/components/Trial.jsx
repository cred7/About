import { useEffect, useState } from "react";
import { Button } from "./Buttons";

export const Trial = (props) => {
  const [task, setTask] = useState([]);
  const [todo, settodo] = useState("");
  const [cat, setcat] = useState({
    fact: "Loading...",
    length: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        setcat(data);
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handlechange = (e) => {
    settodo(e.target.value);
  };
  const submit = () => {
    setTask([
      ...task,
      {
        id: task.length === 0 ? 1 : task[task.length - 1].id + 1,
        name: todo,
        completed: false,
      },
    ]);
    settodo("");
  };
  const complete = (e) => {
    setTask(
      task.map((r) => (r.id === e ? { ...r, completed: !r.completed } : r))
    );
  };
  const del = (e) => {
    setTask(task.filter((t) => (t.id === e ? false : true)));
  };
  const [l, setl] = useState(2);
  return (
    <div className="py-24 px-6 relative ">
      <div className="max-w-6xl max-auto container bg-card m-4 py-6 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          {cat?.fact} ({cat?.length})<h1>{props}</h1>
        </h1>
        <input
          className="bg-background w-full outline-none rounded-full m-3"
          type="text"
          onChange={handlechange}
        />
        <button onClick={submit} className="cosmic-button py-3 px-4">
          Submit Changes
        </button>
        <ol>
          {task.map((e, key) => {
            return (
              <Button
                e={e}
                keys={key}
                del={del}
                p={e.index}
                complete={complete}
                name={props}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};
