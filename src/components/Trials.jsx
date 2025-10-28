import { useContext, useEffect, useState } from "react";
import { AppContext } from "../pages/Home";
import { useToggle } from "./useToggle";

export const Trials = () => {
  const { name, setname } = useContext(AppContext);
  const [task, setTask] = useState([]);
  const [todo, settodo] = useState("");
  const [update, setupdate] = useState("");
  const [loading, setLoading] = useState(true);
  const [visible, toggle] = useToggle(true);

  const [cat, setcat] = useState([]);
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
  }, [loading]);

  const change = (e) => setupdate(e.target.value);
  const handlechange = (e) => settodo(e.target.value);

  const submit = () => {
    // useToggle(false);
    setTask([
      ...cat,
      {
        id: cat.length === 0 ? 1 : cat[task.length - 1].id + 1,
        name: todo,
        completed: false,
      },
    ]);

    setname(update);
    settodo("");
  };

  const complete = (e) =>
    setTask(
      task.map((r) => (r.id === e ? { ...r, completed: !r.completed } : r))
    );

  const del = (e) => setTask(task.filter((t) => (t.id === e ? false : true)));

  // const {
  //   data: cat,
  //   isError,
  //   isLoading,
  //   refetch,
  // } = useQuery(["cat"], () => {
  //   return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  // });
  // if (isError) {
  //   return <p>EERrrrorr</p>;
  // }
  // if (isLoading) {
  //   return <p>Loading.......</p>;
  // }

  return (
    <div className="py-24 px-6 relative ">
      <div className="max-w-6xl max-auto comntainer bg-card m-2 py-6 px-7 gap-y-3">
        {/* (isLoading?<h1>Loading.,......</h1>) */}
        <h1 className=" font-bold text-center mb-4 mt-4">
          {cat?.fact}
          {/* {cat?.length} */}
          {/* <p className="bg-background">{name}</p> */}
        </h1>
        {/* <input
          className="bg-background w-full outline-none rounded-full m-3"
          type="text"
          onChange={change}
          placeholder="this is your placeholder"
        /> */}
        {/* <input
          className="bg-background w-full outline-none rounded-full m-3"
          type="text"
          onChange={handlechange}
        /> */}
        <button
          onClick={() => {
            setLoading((prev) => !prev);
          }}
          className="cosmic-button py-3 px-4 m-3"
        >
          Reload facts
        </button>
        {}
        {/* <button className="cosmic-button m-3" onClick={refetch}>
          UPdate
        </button> */}
        {/* {task ? (
          <div className={cn("")}>
            <button className="cosmic-button" onClick={toggle}>
              {visible ? "Hide" : "show-changes"}
            </button>

            {visible && (
              <ol>
                {task.map((e, key) => (
                  <AppContext.Provider value={{ cat }}>
                    <Button
                      e={e}
                      keys={key}
                      del={del}
                      p={e.index}
                      complete={complete}
                    />
                  </AppContext.Provider>
                ))}
              </ol>
            )}
          </div>
        ) : (
          <p></p>
        )} */}
      </div>
    </div>
  );
};
