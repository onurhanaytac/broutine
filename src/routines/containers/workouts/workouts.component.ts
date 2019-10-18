import { Component, OnInit } from '@angular/core';
import { Workout } from '../../models/workout.model';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-workouts',
  templateUrl: 'workouts.component.html',
  styleUrls: ['workouts.component.less']
})
export class WorkoutsComponent implements OnInit {
  workouts$: Observable<Workout[]>;

  constructor(private store: Store<fromStore.RoutinesState>) {}

  ngOnInit() {
    this.workouts$ = this.store.select(fromStore.getWorkouts);
    this.store.dispatch(new fromStore.LoadWorkouts());
  }
}
