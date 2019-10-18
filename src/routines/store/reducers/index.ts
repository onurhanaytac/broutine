import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromWorkouts from './workouts.reducer';

export interface RoutinesState {
  workouts: fromWorkouts.WorkoutState;
}

export const reducers: ActionReducerMap<RoutinesState> = {
  workouts: fromWorkouts.reducer
};

export const getRoutinesState = createFeatureSelector<RoutinesState>('routines');
