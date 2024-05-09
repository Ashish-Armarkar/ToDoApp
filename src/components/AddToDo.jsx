import { useContext, useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import {TodoContext} from "../Store/TodoItemContext";

function AddToDo() {
  const TodoItemsContext = useContext(TodoContext)
  const inputTask = useRef("");
  const inputDate = useRef("");
  const handleOnAdd = (event) => {
    // event.preventDefault();
    TodoItemsContext.handleAddTask(inputTask.current.value, inputDate.current.value);
    inputTask.current.value = "";
    inputDate.current.value = "";
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4 ">
          <input
            type="text"
            placeholder="Enter ToDo"
            ref={inputTask}
            // onChange={(event) => onInputTaskChange(event)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={inputDate}
            // onChange={(event) => onInputDateChange(event)}
          />
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-success "
            onClick={(event) => handleOnAdd(event)}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
