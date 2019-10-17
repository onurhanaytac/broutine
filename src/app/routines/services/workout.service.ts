import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workout } from '../models/workout.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>('http://127.0.0.1:8000/api/v1/workouts')
  }
}
