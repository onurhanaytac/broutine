import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
export const reducers = {
    routerReducer: fromRouter.routerReducer
};
export const getRouterState = createFeatureSelector('routerReducer');
export class CustomSerializer {
    serialize(routerState) {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        let state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;
        return { url, queryParams, params };
    }
}
//# sourceMappingURL=index.js.map