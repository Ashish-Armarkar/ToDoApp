import { createContext, useReducer } from "react";

export const TodoContext = createContext({});
const reducerItem = (item, action) => {
  let newItems = item;
  if (action.type === "Add_Item") {
    newItems = [
      ...item,
      {
        name: `${action.payload.taskName}`,
        Dates: `${action.payload.taskDate}`,
      },
    ];
  } else if (action.type === "Delete_Item") {
    newItems = item.filter((it) => {
      return it !== action.payload.taskName;
    });
  }
  return newItems;
};

const TodoContextProvider = ({ children }) => {
  const [item, dispatchItem] = useReducer(reducerItem, []);
  const onAddTask = (taskName, taskDate) => {
    const newItem = {
      type: "Add_Item",
      payload: {
        taskName: taskName,
        taskDate: taskDate,
      },
    };
    dispatchItem(newItem);
  };

  const onDelete = (delItem) => {
    const deleteItem = {
      type: "Delete_Item",
      payload: {
        taskName: delItem,
      },
    };
    dispatchItem(deleteItem);
  };
  return (
    <TodoContext.Provider
      value={{ items: item, handleAddTask: onAddTask, handleDelete: onDelete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
