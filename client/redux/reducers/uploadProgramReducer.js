const config = {
    customQuestionsCounter: []
};

const uploadProgramReducer = (state = config, actions) => {
    const {
        type
    } = actions;

    switch (type) {

        case 'UPLOAD_PROGRAM_FORM_SUBMITTED': {
            state = {
                ...state,
                isProcessing: true,
                errorMessage: null
            };

            break;
        }

        case 'UPLOAD_PROGRAM_FORM_SUBMITTED_FULFILLED': {
            state = {
                ...state,
                isProcessing: false
            }

            break;
        }

        case 'UPLOAD_PROGRAM_FORM_SUBMITTED_REJECTED': {
            state = {
                ...state,
                isProcessing: false,
                errorMessage: 'There was an error saving your program'
            };

            break;
        }

        case 'UPLOAD_PROGRAM_MORE_QUESTIONS_CLICKED': {
            state = {
                ...state,
                customQuestionsCounter: [
                    ...state.customQuestionsCounter,
                    {}
                ]
            }
        }
    }

    return state;
}

export default uploadProgramReducer;
