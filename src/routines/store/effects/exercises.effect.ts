import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as exerciseAction from '../actions/exercises.actions';
import * as fromServices from '../../services';

@Injectable()
export class ExercisesEffects {
  constructor(private actions$: Actions, private exerciseService: fromServices.ExerciseService) {}

  @Effect()
  loadExercises$ = this.actions$.pipe(
    ofType(exerciseAction.LOAD_EXERCISES),
    switchMap(() => {
      return this.exerciseService.getExercises().pipe(
        map(exercises => new exerciseAction.LoadExercisesSuccess(exercises)),
        catchError(error => of(new exerciseAction.LoadExercisesFail(error)))
      );
    })
  );
}
