const initialState = {
    currentTemperature: 0,
    minTemp: 0,
    maxTemp: 0,
    icon: '',
    currentCity: '',
    humidity: 0
};


export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SAVE_CURRENT_WEATHER':
            return {
                ...state,
                newValue: action.newValue
            };

        default:
            return state;
    }
};