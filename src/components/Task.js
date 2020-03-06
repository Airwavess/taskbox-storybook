import React from "react";
import { MdStar, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

function Task({
  task: { id, title, state },
  handleArchiveTask,
  handlePinTask
}) {
  return (
    <div className={`list-item ${state}`}>
      <button className="checkbox" onClick={() => handleArchiveTask(id)}>
        {state === "TASK_ARCHIVED" ? (
          <MdCheckBox />
        ) : (
          <MdCheckBoxOutlineBlank />
        )}
      </button>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions">
        {state !== "TASK_ARCHIVED" && (
          <button
            className={state === "TASK_PINNED" ? "active" : ""}
            onClick={() => handlePinTask(id)}
          >
            <MdStar />
          </button>
        )}
      </div>
    </div>
  );
}

export default Task;
