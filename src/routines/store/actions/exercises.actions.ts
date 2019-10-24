import { Action } from '@ngrx/store';
import { Exercise } from '../../models/exercise.model';

// load exercises
export const LOAD_EXERCISES = '[Exercises] Load Exercises';
export const LOAD_EXERCISES_FAIL = '[Exercises] Load Exercises Fail';
export const LOAD_EXERCISES_SUCCESS = '[Exercises] Load Exercises Success';

export class LoadExercises implements Action {
  readonly type = LOAD_EXERCISES;
}

export class LoadExercisesFail implements Action {
  readonly type = LOAD_EXERCISES_FAIL;

  constructor(public payload: any) {}
}

export class LoadExercisesSuccess implements Action {
  readonly type = LOAD_EXERCISES_SUCCESS;

  constructor(public payload: Exercise[]) {}
}

// action types
export type ExercisesAction = LoadExercises | LoadExercisesFail | LoadExercisesSuccess;
