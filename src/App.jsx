import AddToDo from "./components/AddToDo";
import Todo1 from "./components/Todo1";
import Todo2 from "./components/Todo2";
import TodoHeading from "./components/TodoHeading";
import './App.css';


function App() {
  return (
    <center id="main-container">
      <TodoHeading />
      <AddToDo/>
      <Todo1/>
      <Todo2/>
    </center>
  );
}

export default App;
