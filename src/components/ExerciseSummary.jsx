import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalDuration, selectTotalCaloriesBurned } from '../features/exerciseSlice';

const ExerciseSummary = () => {
  const totalDuration = useSelector(selectTotalDuration);
  const totalCaloriesBurned = useSelector(selectTotalCaloriesBurned);

  return (
    <div>
      <h2>Exercise Summary</h2>
      <p>Total Duration: {totalDuration} minutes</p>
      <p>Total Calories Burned: {totalCaloriesBurned}</p>
    </div>
  );
};

export default ExerciseSummary;