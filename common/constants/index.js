const constants = {
    USER_TYPES: {
        CLIENT: 'user_type_client',
        ORGANISATION: 'user_type_organisation'
    },
    ERRORS: {
        SIGN_UP: {
            EXISTING_EMAIL: 'errors_sign_up_existing_email',
            GENERIC: 'errors_sign_up_generic',
            MISSING_VALUES: 'errors_sign_up_missing_values',
            INVALID_VALUES: 'errors_sign_up_invalid_values'
        },
        SIGN_IN: {
            'MISSING_VALUES': 'errors_sign_in_missing_values',
            'GENERIC': 'errors_sign_in_generic',
            'INVALID_CREDENTIALS': 'errors_sign_up_invalid_credentials'
        },
        PROFILE_EDIT: {
            GENERIC: 'profile_edit_errors_generic',
            INCORRECT_PASSWORD: 'profile_edit_errors_incorrect_password'
        },
        PASSWORD_RESET: {
            INVALID_TOKEN: 'password_reset_errors_invalid_token',
            GENERIC: 'password_reset_errors_generic',
            NO_USER_FOR_EMAIL: 'password_reset_errors_no_user_for_email'
        }
    },
    VERIFICATION_TYPES: {
        EMAIL: 'email'
    },
    EMAIL: {
        TEMPLATE_EXTENSION: '.hbs',
        TEMPLATE_PATH: 'app/components/mail-sender/templates',
        TEMPLATE_LAYOUT_PATH: 'app/components/mail-sender/templates/layouts',
        DEFAULT_LAYOUT: 'main',
        TEMPLATE_PARTIALS: 'app/components/mail-sender/templates/partials'
    },
    REDUX_FORM_CHANGE_ACTION_TYPE: '@@redux-form/CHANGE',
    PASSWORD_RESET: {
        MAX_REQUEST_DAYS: 30
    }
};

export default constants;