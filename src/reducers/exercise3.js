import actionTypes from '../actions/constants';

const initialState = {
    initialFormValues: {
        name: '',
        textarea: '',
    },
};

const exerciseThreeFormSubmit = (state, payload) => {
    return Object.assign({}, state, {
        name: payload.name,
        textarea: payload.textarea,
    });
};

const exercise3 = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.EXERCISE_THREE_FORM_SUBMIT:
        return exerciseThreeFormSubmit(state, action.payload);
    default:
        return state;
    }
};

export default exercise3;
