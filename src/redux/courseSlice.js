// courseSlice.js
import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    enrolledCourses: []
  },
  reducers: {
    enrollInCourse: (state, action) => {
      state.enrolledCourses.push(action.payload);
    },
    // Other reducers if needed
  }
});

export const { enrollInCourse } = courseSlice.actions;
export default courseSlice.reducer;
