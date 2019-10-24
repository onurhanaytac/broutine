import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromWorkouts from './workouts.reducer';
import * as fromExercises from './exercises.reducer';

export interface RoutinesState {
  workouts: fromWorkouts.WorkoutState;
  exercises: fromExercises.ExerciseState;
}

export const reducers: ActionReducerMap<RoutinesState> = {
  workouts: fromWorkouts.reducer,
  exercises: fromExercises.reducer
};

export const getRoutinesState = createFeatureSelector<RoutinesState>('routines');
