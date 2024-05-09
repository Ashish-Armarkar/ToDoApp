import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {TodoContext} from "../Store/TodoItemContext";
function Todo1() {
  
  const ToDoItemContext = useContext(TodoContext);
  return (
    <div className="container text-center">
      {ToDoItemContext.items.map((item) => (
        <div className="row" key={Math.random(Math.floor)}>
          <div className="col-4 item-name">{item.name}</div>
          <div className="col-4 date">{item.Dates}</div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => ToDoItemContext.handleDelete(item)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Todo1;
