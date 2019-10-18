import { createFeatureSelector } from '@ngrx/store';
import * as fromWorkouts from './workouts.reducer';
export const reducers = {
    workouts: fromWorkouts.reducer
};
export const getRoutinesState = createFeatureSelector('routines');
//# sourceMappingURL=index.js.map