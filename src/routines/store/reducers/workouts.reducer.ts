import * as fromWorkouts from '../actions/workouts.actions';
import { Workout } from '../../models/workout.model';

export interface WorkoutState {
  entities: { [id: number]: Workout};
  loaded: boolean;
  loading: boolean;
}

export const initialState: WorkoutState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: fromWorkouts.WorkoutsAction): WorkoutState {
  switch (action.type) {
    case fromWorkouts.LOAD_WORKOUTS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromWorkouts.LOAD_WORKOUTS_SUCCESS: {
      const entities = action.payload.reduce(
        (entities: { [id: number]: Workout}, workout: Workout) => {
          return {
            ...entities,
            [workout.id]: workout
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
    case fromWorkouts.LOAD_WORKOUTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getWorkoutsEntities = (state: WorkoutState) => state.entities;
export const getWorkoutsLoading = (state: WorkoutState) => state.loading;
export const getWorkoutsLoaded = (state: WorkoutState) => state.loaded;
