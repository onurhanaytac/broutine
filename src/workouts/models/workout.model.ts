import { Day } from './day.model';

export interface Workout {
  id: number;
  name: string;
  description: string;
  days: Day[];
}
