import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as fromStore from '../../store';
let WorkoutsComponent = class WorkoutsComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.workouts$ = this.store.select(fromStore.getWorkouts);
        this.store.dispatch(new fromStore.LoadWorkouts());
    }
};
WorkoutsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-workouts',
        templateUrl: 'workouts.component.html',
        styleUrls: ['workouts.component.less']
    })
], WorkoutsComponent);
export { WorkoutsComponent };
//# sourceMappingURL=workouts.component.js.map