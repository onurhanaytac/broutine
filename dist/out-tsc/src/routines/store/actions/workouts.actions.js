// load workouts
export const LOAD_WORKOUTS = '[Workouts] Load Workouts';
export const LOAD_WORKOUTS_FAIL = '[Workouts] Load Workouts Fail';
export const LOAD_WORKOUTS_SUCCESS = '[Workouts] Load Workouts Success';
export class LoadWorkouts {
    constructor() {
        this.type = LOAD_WORKOUTS;
    }
}
export class LoadWorkoutsFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_WORKOUTS_FAIL;
    }
}
export class LoadWorkoutsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_WORKOUTS_SUCCESS;
    }
}
//# sourceMappingURL=workouts.actions.js.map