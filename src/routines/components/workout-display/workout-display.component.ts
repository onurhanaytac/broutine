import { Component, Input } from '@angular/core';
import { Workout } from '../../models/workout.model';

@Component({
  selector: 'workout-display',
  templateUrl: 'workout-display.component.html',
  styleUrls: ['workout-display.component.less']
})
export class WorkoutDisplayComponent {
  @Input() workout: Workout;
}
