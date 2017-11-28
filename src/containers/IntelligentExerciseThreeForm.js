import { connect } from 'react-redux';
import ExerciseThreeForm from '../components/ExerciseThreeForm';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

const formName = 'exercise3';

const validate = (values) => {
    const errors = {};

    if (values.name === '') { errors.name = 'Required'; }
    if (values.textarea === '') { errors.textarea = 'Required'; }

    return errors;
};

const warn = (values) => {
    const warnings = {};

    const regex = new RegExp(/^[A-z]+$/);
    if (values.name && regex.test(values.name) === false) { warnings.name = 'Name should be only alphabetical'; }

    return warnings;
};

const mapStateToProps = (state) => {
    return {
        name: state.exercise3.name,
        textarea: state.exercise3.textarea,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (submit) => {
            dispatch(actions.exerciseThreeFormSubmit(submit));
        },
    };
};

const IntelligentExerciseThreeForm = reduxForm({
    form: formName,
    validate,
    warn,
})(ExerciseThreeForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IntelligentExerciseThreeForm);