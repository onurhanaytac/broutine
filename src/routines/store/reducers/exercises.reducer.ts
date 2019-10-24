import * as fromExercises from '../actions/exercises.actions';
import { Exercise } from '../../models/exercise.model';

export interface ExerciseState {
  entities: { [id: number]: Exercise};
  loaded: boolean;
  loading: boolean;
}

export const initialState: ExerciseState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: fromExercises.ExercisesAction): ExerciseState {
  switch (action.type) {
    case fromExercises.LOAD_EXERCISES: {
      return {
        ...state,
        loading: true
      };
    }
    case fromExercises.LOAD_EXERCISES_SUCCESS: {
      const entities = action.payload.reduce(
        (entities: { [id: number]: Exercise}, exercise: Exercise) => {
          return {
            ...entities,
            [exercise.id]: exercise
          };
        },
        {
          ...state.entities
        }
      ); // action.payload.reduce
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
    case fromExercises.LOAD_EXERCISES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getExercisesEntities = (state: ExerciseState) => state.entities;
export const getExercisesLoading = (state: ExerciseState) => state.loading;
export const getExercisesLoaded = (state: ExerciseState) => state.loaded;
