import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import MyButton from '../util/MyButton';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PostScream from './PostScream';
import {NavLink} from 'react-router-dom';
//MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import HomeIcon from '@material-ui/icons/Home';


export class FirebaseNav extends Component {
    render() {
        const {authenticated} = this.props;
        return (
            <AppBar>
                <Toolbar className = "nav-container">
                   {authenticated ? (
                       <Fragment>
                          <PostScream/>
                          {/* <Button color="inherit" component={Link} to="/">Home</Button>
                          <Button color="inherit" component={Link} to="/explore">Explore</Button>
                           <Button color="inherit" component={Link} to="/browse">Browse</Button> */}
                         <ul>
                             <li style={{display: 'inline-block', padding: '15px'}}>
                           <NavLink exact activeStyle={{color: 'yellow'}} to="/">Home</NavLink>

                             </li>
                             <li style={{display: 'inline-block', padding: '15px'}}>
                           <NavLink exact activeStyle={{color: 'yellow'}} to="/explore">Explore</NavLink>

                             </li>
                             <li style={{display: 'inline-block', padding: '15px'}}>

                           <NavLink exact activeStyle={{color: 'yellow'}} to="/browse">Browse</NavLink>
                             </li>

                         </ul>

                       </Fragment>
                   ) : (
                    <Fragment>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/browse">Browse</Button>
                        <Button color="inherit" component={Link} to="/explore">Explore</Button>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/signup">Signup</Button>
                    </Fragment>
                   )}
                </Toolbar>
            </AppBar>
        )
    }
}

FirebaseNav.propTypes = {
    authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(FirebaseNav)
