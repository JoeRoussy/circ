import axios from 'axios';
import { toast } from 'react-toastify';
import { navigateTo as getNavigateTo } from '../../components';

export const submitForm = (formData) => (dispatch) => {
    dispatch({
        type: 'UPLOAD_PROGRAM_FORM_SUBMITTED'
    });

    axios.post(`${process.env.API_ROOT}/api/programs`, formData)
        .then((res) => {
            toast.success('Your program has been created!');

            dispatch({
                type: 'UPLOAD_PROGRAM_FORM_SUBMITTED_FULFILLED',
                payload: res
            });

            // TODO: This should redirect to the program details page
            getNavigateTo(dispatch)('/');
        })
        .catch((e) => {
            dispatch({
                type: 'UPLOAD_PROGRAM_FORM_SUBMITTED_REJECTED',
                payload: e
            });
        })
};