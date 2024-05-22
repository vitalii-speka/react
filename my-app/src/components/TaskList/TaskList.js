import { useSelector } from "react-redux";
// import { Task } from "components/Task/Task";
import { Task } from "../Task/Task";
import { getStatusFilter } from "../../redux/filtersSlice";
import { getTasks } from "../../redux/tasksSlice";
import css from "./TaskList.module.css";
import { statusFilters } from "../../redux/constants";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  console.log("🚀 ~ TaskList ~ visibleTasks:", visibleTasks);

  return (
    <ul className={css.list}>
      <p>Whats wrong???</p>
      {/* {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))} */}
    </ul>
  );
};
