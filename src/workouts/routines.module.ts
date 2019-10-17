import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

// import * as fromComponents from './components';
import * as fromContainers from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.WorkoutsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('routines', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [ ],
  declarations: [ ...fromContainers.containers ],
  exports: [ ...fromContainers.containers ]
})
export class RoutinesModule {}