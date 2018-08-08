import React from 'react';
import { Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { history } from '../../../redux/store';

import Home from '../Home';
import Navbar from '../../components/Navbar';
import SignUp from '../Signup';
import SignIn from '../SignIn';
import Profile from '../Profile';
import ChangePassword from '../ChangePassword';
import ForgotPassword from '../ForgotPassword';
import ForgotPasswordForm from '../ForgotPasswordForm';
import Footer from '../../components/Footer'
import './styles.css';
import 'react-toastify/dist/ReactToastify.min.css';

const App = ({

}) => (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <ToastContainer />
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/change-password" component={ChangePassword} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/forgot-password-form" component={ForgotPasswordForm} />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
)

export default App;
