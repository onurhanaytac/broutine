import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as fromStore from '../../store';
let WorkoutComponent = class WorkoutComponent {
    constructor(store) {
        this.store = store;
    }
    onSelect(event) { }
    onCreate(event) { }
    onUpdate(event) { }
    onRemove(event) { }
    ngOnInit() {
        this.workout$ = this.store.select(fromStore.getSelectedWorkout);
        this.workout$.subscribe(workout => {
            if (!workout) {
                this.store.select(fromStore.getWorkoutsEntities).subscribe(() => {
                    this.workout$ = this.store.select(fromStore.getSelectedWorkout);
                });
            }
        });
    }
};
WorkoutComponent = tslib_1.__decorate([
    Component({
        selector: 'app-workout',
        templateUrl: 'workout.component.html',
        styleUrls: ['workout.component.less']
    })
], WorkoutComponent);
export { WorkoutComponent };
//# sourceMappingURL=workout.component.js.map