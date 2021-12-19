const initialState = { darkMode: false };


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode }
        default:
            return state;
    }
}