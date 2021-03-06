import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import InputField from './Form/InputField';
import TextareaField from './Form/TextareaField';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
  name: PropTypes.string,
  textarea: PropTypes.string,
};

const ExerciseThreeForm = ({ handleSubmit, submitSucceeded, name, textarea }) => (
    <div>
        <div>
            <h3>Exercise 3</h3>
            <p>Create a form that takes an input (using InputField component) with name="name", and a textarea (create your own TextareaField component) with name="text". </p>
            <p>Label your input as "Your name:" and your textarea as "Your text:"</p>
            <p>Add some validation:</p>
            <ul>
                <li>Both the input and text area are required</li>
                <li>Raise a warning if the input isn't only an alphabetic string.</li>
                <li>The textarea <i>must</i> be alphanumeric and only allow spaces, fullstops and quotation marks. Raise an error if these conditions are not meet.</li>
                <li>Raise a warning in the textarea if the text does not contain the sentence 'This is super cool.'</li>
            </ul>
            <p>A successful form submission should show something like this:</p>
            <div style={{ border: '1px solid black', paddingLeft: '10px' }}>
                <p>TheGuyWhoMadeThisExercise has written this:</p>
                <p>Probably the best example I've ever seen on the internet. This is super cool. 34 is a number.</p>
            </div>
            <p>
                TODO: Implement me in actions, reducers, containers, /components/Form/TextareaField.js &amp; modify /components/ExerciseThreeForm.js
            </p>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Exercise 3</legend>
                    <div>
                        <div style={{ marginBottom: '10px' }}>
                            <Field
                                name="name"
                                type="text"
                                component={InputField}
                                label="Your name:"
                            />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <Field
                                name="textarea"
                                type="textarea"
                                component={TextareaField}
                                label="Your text:"
                            />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
            {submitSucceeded && (
                <div style={{ marginLeft: '10px', marginTop: '10px', color: 'green' }}>
                  {name} has written this: {textarea}.
                </div>
            )}
        </div>
    </div>
);

export default ExerciseThreeForm;
