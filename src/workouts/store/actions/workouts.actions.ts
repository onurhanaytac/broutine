import { Action } from '@ngrx/store';
import { Workout } from '../../models/workout.model';

// load workouts
export const LOAD_WORKOUTS = '[Workouts] Load Workouts';
export const LOAD_WORKOUTS_FAIL = '[Workouts] Load Workouts Fail';
export const LOAD_WORKOUTS_SUCCESS = '[Workouts] Load Workouts Success';

export class LoadWorkouts implements Action {
  readonly type = LOAD_WORKOUTS;
}

export class LoadWorkoutsFail implements Action {
  readonly type = LOAD_WORKOUTS_FAIL;

  constructor(public payload: any) {}
}

export class LoadWorkoutsSuccess implements Action {
  readonly type = LOAD_WORKOUTS_SUCCESS;

  constructor(public payload: Workout[]) {}
}

// action types
export type WorkoutsAction = LoadWorkouts | LoadWorkoutsFail | LoadWorkoutsSuccess;
