import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let WorkoutService = class WorkoutService {
    constructor(http) {
        this.http = http;
    }
    getWorkouts() {
        return this.http.get('http://127.0.0.1:8000/api/v1/workouts');
    }
};
WorkoutService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    })
], WorkoutService);
export { WorkoutService };
//# sourceMappingURL=workout.service.js.map