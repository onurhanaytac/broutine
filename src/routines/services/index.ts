import { WorkoutService } from './workout.service';
import { ExerciseService } from './exercise.service';

export const services: any[] = [ WorkoutService, ExerciseService ];

export * from './workout.service';
export * from './exercise.service';
