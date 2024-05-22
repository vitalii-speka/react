import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;

const persistConfig = {
  key: "filters",
  storage,
};

export const filtersReducer = persistReducer(
  persistConfig,
  filtersSlice.reducer
);

//selecrtors
export const getStatusFilter = state => state.filters.status;