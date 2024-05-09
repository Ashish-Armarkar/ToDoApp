import AddToDo from "./components/AddToDo";
import Todo1 from "./components/Todo1";
import TodoHeading from "./components/TodoHeading";
import "./App.css";
import EmptyTodo from "./components/EmptyTodo";
import TodoContextProvider from "./Store/TodoItemContext";


function App() {
  return (
    <TodoContextProvider>
      <center id="main-container">
        <TodoHeading />
        <AddToDo />
        <EmptyTodo  />
        <Todo1  />
      </center>
    </TodoContextProvider>
  );
}

export default App;
