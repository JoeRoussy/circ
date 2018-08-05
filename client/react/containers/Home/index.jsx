import React, { Component } from 'react';
import { Button, Container, Dimmer, Loader, Card, Label, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import moment from 'moment';
import queryString from 'query-string';
import { Redirect } from 'react-router';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

import { navigateTo } from '../../../components';

import { setPasswordResetToken } from '../../../redux/actions/forgotPasswordFormActions';
import { setCurrentUser} from '../../../redux/actions/userActions';

import { setJwt } from '../../../components';

import './styles.css';

@connect((store)=>({
    user: store.userReducer.user,
}))

class Home extends Component {
    constructor(props){
        super(props)

        this.onPasswordResetToken = this.onPasswordResetToken.bind(this);
    }

    componentWillMount() {
        const {
            user
        } = this.props;

        const queryParams = queryString.parse(this.props.location.search);

        if (queryParams.newToken) {
            const currentUser = jwtDecode(queryParams.newToken);

            setJwt(queryParams.newToken);
            this.props.dispatch(setCurrentUser(currentUser));
            toast.success('Your email has been confirmed!');
        }

        if (user) {
            this.props.dispatch(getRoommateSuggestionsForUser(user));
        }
    }

    onPasswordResetToken(token) {
        this.props.dispatch(setPasswordResetToken(token));
    }

    render(){
        // TODO: There has to be a better way with server side rendering
        const queryParams = queryString.parse(this.props.location.search);
        let passwordResetRedirect = '';

        if (queryParams.passwordResetToken) {
            passwordResetRedirect = (<Redirect to='/forgot-password-form'/>);
            this.onPasswordResetToken(queryParams.passwordResetToken);
        }

        return (
            <div>
                {passwordResetRedirect}
                <div id='homeWrapper' className='section'>
                    <div id='heroOverlay'>
                    </div>
                    <Container id='homeSearchWrapper'>
                        <h1 id='homeHeading'>Circ</h1>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home;
