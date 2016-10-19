import * as types from '../actions/actionTypes';

const initialState = {
    ClassDate: [],
    isLocated: false,
    isLoading: true,
};

let positionReducer = (state = initialState, action) => {
    // console.log(action)

    switch (action.type) {
        case types.FETCH_GEOLOCATION:
            return Object.assign({}, state, {
                isLocated: action.isLocated,
                isLoading: action.isLoading
            })

        //case types.RECEIVE_CLASS_LIST:
        //
        //    // console.log(action);
        //
        //    return Object.assign({}, state, {
        //        ClassDate: action.classList,
        //        isLoading: false,
        //    })
        default:
            return state;
    }
}

export default positionReducer;
