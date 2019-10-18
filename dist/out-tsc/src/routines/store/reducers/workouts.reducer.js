import * as fromWorkouts from '../actions/workouts.actions';
export const initialState = {
    entities: {},
    loaded: false,
    loading: false,
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromWorkouts.LOAD_WORKOUTS: {
            return Object.assign({}, state, { loading: true });
        }
        case fromWorkouts.LOAD_WORKOUTS_SUCCESS: {
            const entities = action.payload.reduce((entities, workout) => {
                return Object.assign({}, entities, { [workout.id]: workout });
            }, Object.assign({}, state.entities)); // action.payload.reduce
            return Object.assign({}, state, { loading: false, loaded: true, entities });
        }
        case fromWorkouts.LOAD_WORKOUTS_FAIL: {
            return Object.assign({}, state, { loading: false, loaded: false });
        }
    }
    return state;
}
export const getWorkoutsEntities = (state) => state.entities;
export const getWorkoutsLoading = (state) => state.loading;
export const getWorkoutsLoaded = (state) => state.loaded;
//# sourceMappingURL=workouts.reducer.js.map