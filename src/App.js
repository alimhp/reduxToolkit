import "./App.css";
import React from "react";
import Counter from "./featurs/counter/Counter";
import { Provider } from "react-redux";
import { store } from "./featurs/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
