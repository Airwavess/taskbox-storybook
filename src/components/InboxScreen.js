import React from "react";
import { useSelector, useDispatch } from "react-redux";

import TaskList from "./TaskList";
import { archiveTask, pinTask } from "../lib/redux";

export function InboxScreen() {
  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);

  const handlePinTask = id => {
    dispatch(pinTask(id));
  };

  const handleArchiveTask = id => {
    dispatch(archiveTask(id));
  };

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList
        tasks={tasks}
        handlePinTask={handlePinTask}
        handleArchiveTask={handleArchiveTask}
      />
    </div>
  );
}

export default InboxScreen;
