import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      if (action.payload === 'under construction') {
        state.categories = action.payload;
      }
    },
  },
});
export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
