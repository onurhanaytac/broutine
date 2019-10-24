import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromExercises from '../reducers/exercises.reducer';
import { Exercise } from '../../models/exercise.model';

export const getExerciseState = createSelector(
  fromFeature.getRoutinesState,
  (state: fromFeature.RoutinesState) => state.exercises
);

export const getExercisesEntities = createSelector(
  getExerciseState,
  fromExercises.getExercisesEntities
);

export const getSelectedExercise = createSelector(
  getExercisesEntities,
  fromRoot.getRouterState,
  (entities, router): Exercise => {
    return router.state && entities[router.state.params.exerciseId];
  }
);

export const getExercises = createSelector(
  getExercisesEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)] );
  }
);

export const getExercisesLoaded = createSelector(
  getExerciseState,
  fromExercises.getExercisesLoaded
);

export const getExercisesLoading = createSelector(
  getExerciseState,
  fromExercises.getExercisesLoading
);