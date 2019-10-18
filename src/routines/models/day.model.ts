import { ExerciseItems } from './exercise-items.model';

export interface Day {
  id: number;
  name: string;
  exerciseItems: ExerciseItems[];
}