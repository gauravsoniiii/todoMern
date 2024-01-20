import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/todos";
// components
import Header from "./components/header";
import TodoForm from "./components/todoform";

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
