export interface Exercise {
  id: number;
  name: string;
  targetMuscles: [{
    name: string;
    group: string;
  }];
}
