import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Workout } from '../../models/workout.model';
import * as fromStore from '../../store';

@Component({
  selector: 'app-workout',
  templateUrl: 'workout.component.html',
  styleUrls: ['workout.component.less']
})
export class WorkoutComponent implements OnInit {
  workout$: Observable<Workout>;

  constructor(private store: Store<fromStore.RoutinesState>) {}

  onSelect(event: number[]) {}

  onCreate(event: Workout) {}

  onUpdate(event: Workout) {}

  onRemove(event: Workout) {}

  ngOnInit() {
    this.workout$ = this.store.select(fromStore.getSelectedWorkout);
    this.workout$.subscribe(wo => {
      if (!wo) {
        this.store.dispatch(new fromStore.LoadWorkouts());
      }
    });
  }
}
