import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import Authenticated from '../../components/Authenticated';
import UploadProgramForm from '../../components/UploadProgramForm';

import { submitForm, moreQuestions } from '../../../redux/actions/uploadProgramActions';

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
    errorMessage,
    showFormCustomizationSection,
    customQuestionsCounter,
    onMoreQuestions
}) => {
    return (
        <Authenticated test={user && user.type === ORGANISATION}>
            <Container className='rootContainer'>
                <h1>Upload Program</h1>
                <UploadProgramForm
                    onSubmit={onSubmit(formData)}
                    isProcessing={isProcessing}
                    errorMessage={errorMessage}
                    showFormCustomizationSection={showFormCustomizationSection}
                    customQuestionsCounter={customQuestionsCounter}
                    onMoreQuestions={onMoreQuestions}
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
        errorMessage,
        customQuestionsCounter
    } = {}
}) => ({
    user,
    formData: values,
    isProcessing,
    errorMessage,
    showFormCustomizationSection: !!(values && values.requiresApplication),
    customQuestionsCounter
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (formData) => () => dispatch(submitForm(formData)),
    onMoreQuestions: () => dispatch(moreQuestions())
});


export default connect(mapStateToProps, mapDispatchToProps)(UploadProgram);