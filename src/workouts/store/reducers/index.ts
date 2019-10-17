import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromWorkouts from './workouts.reducer';

export interface RoutinesState {
  workouts: fromWorkouts.WorkoutState;
}

export const reducers: ActionReducerMap<RoutinesState> = {
  workouts: fromWorkouts.reducer
};

export const getRoutinesState = createFeatureSelector<RoutinesState>('routines');

// workouts state
export const getWorkoutState = createSelector(
  getRoutinesState,
  (state: RoutinesState) => state.workouts
);

export const getWorkoutsEntities = createSelector(
  getWorkoutState,
  fromWorkouts.getWorkoutsEntities
);

export const getWorkouts = createSelector(
  getWorkoutsEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)] );
  }
);

export const getWorkoutsLoaded = createSelector(
  getWorkoutState,
  fromWorkouts.getWorkoutsLoaded
);

export const getWorkoutsLoading = createSelector(
  getWorkoutState,
  fromWorkouts.getWorkoutsLoading
);
