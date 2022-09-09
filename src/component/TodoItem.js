import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodos, deletedTodos } from "../featurs/Todo/TodoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="flex justify-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={(e) => dispatch(toggleTodos({ id }))}
          ></input>
          {title}
        </span>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deletedTodos({ id }))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
