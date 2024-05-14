import { useSelector, useDispatch } from "react-redux";
// Імпортуємо генератор екшену
import { setStatusFilter } from "../../redux/actions";
import { Button } from "../Button/Button";
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from "../../redux/constants";
// import { getStatusFilter } from "../../redux/selectors";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.status);

  // Викликаємо генератор екшену та передаємо значення фільтра
  // Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
