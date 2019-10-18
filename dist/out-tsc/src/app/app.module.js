import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutinesModule } from '../routines/routines.module';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, CustomSerializer } from './store';
// routes
export const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'workouts'
    }
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        imports: [
            BrowserModule,
            HttpClientModule,
            BrowserAnimationsModule,
            RoutinesModule,
            RouterModule.forRoot(ROUTES),
            StoreModule.forRoot(reducers, {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
            EffectsModule.forRoot([]),
            StoreRouterConnectingModule.forRoot()
        ],
        providers: [
            { provide: RouterStateSerializer, useClass: CustomSerializer }
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map