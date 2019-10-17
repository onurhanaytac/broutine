import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as workoutAction from '../actions/workouts.actions';
import * as fromServices from '../../services';

@Injectable()
export class WorkoutsEffects {
  constructor(private actions$: Actions, private workoutService: fromServices.WorkoutService) {}

  @Effect()
  loadWorkouts$ = this.actions$.pipe(
    ofType(workoutAction.LOAD_WORKOUTS),
    switchMap(() => {
      return this.workoutService.getWorkouts().pipe(
        map(workouts => new workoutAction.LoadWorkoutsSuccess(workouts)),
        catchError(error => of(new workoutAction.LoadWorkoutsFail(error)))
      );
    })
  );
}
