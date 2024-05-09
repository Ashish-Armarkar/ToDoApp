import { useContext } from "react";
import style from "./EmptyTodo.module.css";
import { TodoContext } from "../Store/TodoItemContext";

function EmptyTodo() {
  const ToDoItemContext = useContext(TodoContext);

  return (
    <>{ToDoItemContext.items.length === 0 && <p className={style.para}>Enjoy your time.</p>}</>
  );
}

export default EmptyTodo;
