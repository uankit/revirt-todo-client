import React from "react";
import ITodo from "../../models/Todo";
import "./Todo.css";

type Props = {
  todo: ITodo;
  handleCompleted: (id: number) => any;
  handleDelete: (id: number) => any;
};

const Todo: React.FC<Props> = ({
  todo: { title, id, isCompleted },
  handleCompleted,
  handleDelete,
}: Props) => {
  return (
    <div className="container">
      <span className="container__left">{id}.</span>
      <div className={!isCompleted?"container__right":"container__right-completed"}>
    {!isCompleted ? (
          <h4 className="container__title">{title}</h4>
        ) : (
          <h4 className="container__title">
            <s>{title}</s>
          </h4>
        )}
        <hr style={{ backgroundColor: "grey" }} />
        <div className="container__buttons">
          <button
            className={!isCompleted ? "container__buttons-completed" : "container__buttons-delete"}
            onClick={() => handleCompleted(id)}
          >
            {!isCompleted ? "Mark as completed" : "Mark as incomplete"}
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="container__buttons-delete"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
