import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import Authenticated from '../../components/Authenticated';
import UploadProgramForm from '../../components/UploadProgramForm';

import { submitForm } from '../../../redux/actions/uploadProgramActions';

import constants from '../../../../common/constants';

const {
    USER_TYPES: {
        ORGANISATION
    } = {}
} = constants;

const UploadProgram = ({
    user,
    formData,
    onSubmit,
    isProcessing,
    errorMessage
}) => {
    return (
        <Authenticated test={user && user.type === ORGANISATION}>
            <Container className='rootContainer'>
                <h1>Upload Program</h1>
                <UploadProgramForm
                    onSubmit={onSubmit(formData)}
                    isProcessing={isProcessing}
                    errorMessage={errorMessage}
                />
            </Container>
        </Authenticated>
    );
}

const mapStateToProps = ({
    userReducer: {
        user
    } = {},
    form: {
        uploadProgram: {
            values
        } = {}
    } = {},
    uploadProgramReducer: {
        isProcessing,
        errorMessage
    } = {}
}) => ({
    user,
    formData: values,
    isProcessing,
    errorMessage
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (formData) => () => dispatch(submitForm(formData)),
});


export default connect(mapStateToProps, mapDispatchToProps)(UploadProgram);