/*  =============== Before ========================
import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";


import { tasksReducer, filtersReducer } from "./reducer";

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
*/

//=============== After ========================
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

// Функція для зчитування стану з LocalStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

// Функція для збереження стану в LocalStorage
const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    console.log("🚀 ~ saveState ~ serializedState:", serializedState);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Зчитуємо початковий стан з LocalStorage
const persistedState = loadState();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
    // preloadedState: persistedState,
  },
});

// Підписуємось на зміни в store та зберігаємо новий стан в LocalStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
