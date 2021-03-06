import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromWorkouts from '../reducers/workouts.reducer';
export const getWorkoutState = createSelector(fromFeature.getRoutinesState, (state) => state.workouts);
export const getWorkoutsEntities = createSelector(getWorkoutState, fromWorkouts.getWorkoutsEntities);
export const getSelectedWorkout = createSelector(getWorkoutsEntities, fromRoot.getRouterState, (entities, router) => {
    return router.state && entities[router.state.params.workoutId];
});
export const getWorkouts = createSelector(getWorkoutsEntities, (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
export const getWorkoutsLoaded = createSelector(getWorkoutState, fromWorkouts.getWorkoutsLoaded);
export const getWorkoutsLoading = createSelector(getWorkoutState, fromWorkouts.getWorkoutsLoading);
//# sourceMappingURL=workouts.selectors.js.map