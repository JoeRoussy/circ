import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import Authenticated from '../../components/Authenticated';
import constants from '../../../../common/constants';

const {
    USER_TYPES: {
        ORGANISATION
    } = {}
} = constants;

const UploadProgram = ({
    user
}) => {
    return (
        <Authenticated test={user && user.type === ORGANISATION}>
            <Container className='rootContainer'>
                <h1>This is the Upload Program page</h1>
            </Container>
        </Authenticated>
    );
}

const mapStateToProps = ({
    userReducer: {
        user
    } = {}
}) => ({
    user
});


export default connect(mapStateToProps, null)(UploadProgram);