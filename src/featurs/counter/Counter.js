import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import ReactDOM from "react-dom";
import { useState } from "react";

const Counter = () => {
  const [inputValue, setInputValue] = useState();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <span>count : {count}</span>
      <div>
        <button onClick={() => dispatch(increment(Number(inputValue))) || 1}>
          +
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement(Number(inputValue)) || 1)}>
          -
        </button>
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Counter;
