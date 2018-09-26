import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Message } from 'semantic-ui-react';
import { InputField } from 'react-semantic-redux-form';

const validate = (values) => {
    let errors = {};

    const {
        name
    } = values;

    if (!name) {
        errors = {
            name: 'Please enter a name for the program',
            ...errors
        };
    }

    return errors;
};

const UploadProgramForm = ({
    onSubmit,
    isProcessing,
    valid,
    errorMessage
}) => {
    return (
        <div id='uploadProgramForm'>
            <Form id='profileEditForm' onSubmit={onSubmit} error={!!errorMessage}>
                <Message
                    error
                    header='Error'
                    content={errorMessage}
                />
                <Field
                    name='name'
                    component={InputField}
                    label='Program Name'
                    labelPosition='left'
                    placeholder='Name'
                />
                <Button type='submit' color='green' loading={isProcessing} disabled={!valid || isProcessing}>Save Program</Button>
            </Form>
        </div>
    );
}

export default reduxForm({
    form: 'uploadProgram',
    validate
})(UploadProgramForm);