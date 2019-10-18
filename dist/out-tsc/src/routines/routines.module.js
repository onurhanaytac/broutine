import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import * as fromComponents from './components';
import * as fromContainers from './containers';
export const ROUTES = [
    {
        path: 'workouts',
        component: fromContainers.WorkoutsComponent
    },
    {
        path: 'workouts/:workoutId',
        component: fromContainers.WorkoutComponent
    },
];
let RoutinesModule = class RoutinesModule {
};
RoutinesModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule.forChild(ROUTES),
            StoreModule.forFeature('routines', reducers),
            EffectsModule.forFeature(effects)
        ],
        providers: [],
        declarations: [...fromContainers.containers, ...fromComponents.components],
        exports: [...fromContainers.containers, ...fromComponents.components]
    })
], RoutinesModule);
export { RoutinesModule };
//# sourceMappingURL=routines.module.js.map