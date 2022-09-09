import "./App.css";
import React from "react";
import Counter from "./featurs/counter/Counter";
import { Provider } from "react-redux";
import { store } from "./featurs/store";
import AddTodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import TotalCompleteItems from "./component/TodoComplited";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Provider store={store}>
      {/* <div className="App">
        <Counter />
      </div> */}
      <div className="App container">
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </Provider>
  );
}

export default App;
