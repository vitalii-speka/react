import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const tasksInitialState = [];
// const tasksInitialState = {
//   tasks: [],
// };

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

// const persistConfig = {
//   key: "tasks",
//   storage,
// };

// const tasksSliceReducer = tasksSlice.reducer;
// export const tasksReducer = persistReducer(persistConfig, tasksSlice.reducer);

// Експортуємо генератори екшенів та редюсер
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

//selecrtors
export const getTasks = state => {
  return state.tasks;
};
