import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as workoutAction from '../actions/workouts.actions';
let WorkoutsEffects = class WorkoutsEffects {
    constructor(actions$, workoutService) {
        this.actions$ = actions$;
        this.workoutService = workoutService;
        this.loadWorkouts$ = this.actions$.pipe(ofType(workoutAction.LOAD_WORKOUTS), switchMap(() => {
            return this.workoutService.getWorkouts().pipe(map(workouts => new workoutAction.LoadWorkoutsSuccess(workouts)), catchError(error => of(new workoutAction.LoadWorkoutsFail(error))));
        }));
    }
};
tslib_1.__decorate([
    Effect()
], WorkoutsEffects.prototype, "loadWorkouts$", void 0);
WorkoutsEffects = tslib_1.__decorate([
    Injectable()
], WorkoutsEffects);
export { WorkoutsEffects };
//# sourceMappingURL=workouts.effect.js.map