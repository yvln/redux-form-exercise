import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ExerciseOneForm from '../components/ExerciseOneForm';
import * as actions from '../actions';

const formName = 'numberToFrench';

// Exercise 1 TODO: Implement validate method and use it.
// Make sure the number is not empty and between 1 and 3 (included).
const validate = (values) => {
    const errors = {};

    // Feel free to externalise your validation methods if they are used on different forms.
    if (values.number === '') {
        errors.number = 'Required';
    } else if (values.number !== '1' && values.number !== '2' && values.number !== '3') {
        errors.number = 'Sorry I can only translate 1, 2 or 3!';
    }
    // You just need to return an object with the field name and the error message you want.
    return errors;
};

const mapStateToProps = (state) => {
    return {
        initialValues: state.exercise1.initialFormValues,
        frenchNumber: state.exercise1.frenchNumber,
        numberSubmitted: state.exercise1.numberSubmitted,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (submit) => { // Has to be named onSubmit here and will be given to Form as handleSubmit property
            dispatch(actions.exerciseOneFormSubmit(submit));
        },
    };
};

const IntelligentExerciseOneForm = reduxForm({
    form: formName,
    validate,
})(ExerciseOneForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IntelligentExerciseOneForm);
