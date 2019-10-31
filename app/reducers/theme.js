import { TOGGLED_DARK_THEME } from "../actions/actionTypes";

const initialState = {
    darkTheme: true
};

function theme(state = initialState, action) {
    switch (action.type) {
        case TOGGLED_DARK_THEME:
            return {
                ...state,
                darkTheme: action.payload
            };
        default:
            return state;
    }
}

export default theme;
