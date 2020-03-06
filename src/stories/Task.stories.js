import React from "react";
import { action } from "@storybook/addon-actions";

import Task from "../components/Task";

export default {
  component: Task,
  title: "Task",
  // taskData 不會變成 story
  excludeStories: /.*Data$/
};

export const taskData = {
  id: "1",
  title: "my Task",
  state: "TASK_INBOX",
};

export const actionsData = {
  handlePinTask: action("handlePinTask"),
  handleArchiveTask: action("handleArchiveTask")
};

export const Default = () => {
  return <Task task={{ ...taskData }} {...actionsData} />;
};

export const Pinned = () => (
  <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />
);

export const Archived = () => (
  <Task task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />
);
