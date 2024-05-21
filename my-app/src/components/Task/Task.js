import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
// Імпортуємо хук
import { useDispatch } from "react-redux";
// Імпортуємо генератор екшену
// import { deleteTask, toggleCompleted } from "../../redux/actions";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
