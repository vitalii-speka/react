/*   =============== Before ========================
    import { combineReducers } from "redux";
    import { statusFilters } from "./constants";

    const tasksInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
    ];

    const tasksReducer = (state = tasksInitialState, action) => {
    switch (action.type) {
        case "tasks/addTask":
        return [...state, action.payload];
        case "tasks/deleteTask":
        return state.filter(task => {
            return task.id !== action.payload;
        });
        case "tasks/toggleCompleted":
        return state.map(task => {
            if (task.id !== action.payload) {
            return task;
            }
            return { ...task, completed: !task.completed };
        });
        default:
        return state;
    }
    };

    const filtersInitialState = {
    status: statusFilters.all,
    };

    const filtersReducer = (state = filtersInitialState, action) => {
    switch (action.type) {
        case "filters/setStatusFilter":
        return {
            ...state,
            status: action.payload,
        };
        default:
        return state;
    }
    };

    export const rootReducer = combineReducers({
    tasks: tasksReducer,
    filters: filtersReducer,
    });

*/

//=============== After ========================
import { createReducer } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from "./actions";

const tasksInitialState = [];

/* =============== Before ========================
    export const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case addTask.type:
      return [...state, action.payload];

    case deleteTask.type:
      return state.filter(task => {
        return task.id !== action.payload;
      });
    case toggleCompleted.type:
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};
*/

//=============== After ========================
// export const tasksReducer = createReducer(tasksInitialState, builder => {
//   builder
//     .addCase(addTask, (state, action) => {
//       return [...state, action.payload];
//     })
//     .addCase(deleteTask, (state, action) => {
//       return state.filter(task => task.id !== action.payload);
//     })
//     .addCase(toggleCompleted, (state, action) => {
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       });
//     });
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

/* =============== Before ========================
    export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case setStatusFilter.type:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
*/

//=============== After ========================
// export const filtersReducer = createReducer(filtersInitialState, builder => {
//   builder.addCase(setStatusFilter, (state, action) => {
//     return {
//       ...state,
//       status: action.payload,
//     };
//   });
// });
