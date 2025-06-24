import { useContext } from "react";
import { cn } from "../lib/utils";
import { AppContext } from "../pages/Home";
export const Button = (props) => {
  const { name, cat } = useContext(AppContext);

  return (
    <>
      <h1> {name}</h1>
      <div
        key={props.keys}
        className={cn(
          "flex justify-around",
          props.e.completed ? "bg-white/20" : ""
        )}
      >
        <p>{cat?.fact}</p>
        <li>
          {props.keys + 1}. {props.name} {props.e.name}
        </li>
        <p>{cat?.fact}</p>
        <button
          className="cosmic-button m-3"
          onClick={() => {
            props.del(props.e.id);
          }}
        >
          Delete
        </button>
        <button
          className="cosmic-button m-3"
          onClick={() => {
            props.complete(props.e.id);
          }}
        >
          Completed
        </button>
      </div>
    </>
  );
};
