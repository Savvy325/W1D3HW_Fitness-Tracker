import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exercises: [
        { id: 1, exercise: "Cardio", duration: 30, caloriesBurned: 150 },
        { id: 2, exercise: "Squats", duration: 15, caloriesBurned: 75 },
        { id: 3, exercise: "Lunges", duration: 20, caloriesBurned: 100 },
    ],
};

export const exerciseSlice = createSlice({
    name: "exercise",
    initialState,
    reducers: {
        addExercise: (state, action) => {
            const exercise = action.payload;
            state.exercises = [...state.exercises, exercise];
        },
        deleteExercise: (state, action) => {
            const exerciseId = action.payload;
            state.exercises = state.exercises.filter((exercise) => exercise.id !== exerciseId);
        },
        updateExercise: (state, action) => {
            const { id, updatedExercise } = action.payload;
            state.exercises = state.exercises.map((exercise) =>
                exercise.id === id ? { ...exercise, ...updatedExercise } : exercise
            );
        },
    },
});

export const displayExercises = (state) => state.exercises.exercises;

export const selectTotalDuration = (state) =>
    state.exercises.exercises.reduce((total, exercise) => total + exercise.duration, 0);

export const selectTotalCaloriesBurned = (state) =>
    state.exercises.exercises.reduce((total, exercise) => total + exercise.caloriesBurned, 0);

export const { addExercise, deleteExercise, updateExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;