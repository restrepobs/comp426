import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';
import EditDetails from './EditDetails'
import { logoutUser } from '../redux/actions/userActions';

//MUI stuff
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import {PuffLoader} from 'react-spinners';
import MyButton from '../util/MyButton';



const styles = {
    paper: {
        padding: 20
      },
      profile: {
        '& .image-wrapper': {
          textAlign: 'center',
          position: 'relative',
          '& button': {
            position: 'absolute',
            top: '80%',
            left: '70%'
          }
        },
        '& .profile-image': {
          width: 200,
          height: 200,
          objectFit: 'cover',
          maxWidth: '100%',
          borderRadius: '50%'
        },
        '& .profile-details': {
          textAlign: 'center',
          '& span, svg': {
            verticalAlign: 'middle'
          },
          '& a': {
            color: '#00bcd4'
          }
        },
        '& hr': {
          border: 'none',
          margin: '0 0 10px 0'
        },
        '& svg.button': {
          '&:hover': {
            cursor: 'pointer'
          }
        }
      },
      buttons: {
        textAlign: 'center',
        '& a': {
          margin: '20px 10px'
        }
      }
};

export class Profile extends Component {
    handleLogout = () => {
        this.props.logoutUser();
    }
    render() {
        const {classes, user: {credentials: {handle, createdAt, bio, website, location}, loading, authenticated}} = this.props;
        let profileMarkup = !loading ? (authenticated ? (
            <Paper className={classes.paper}>
                <div className={classes.profile}>
                <div className='profile-details'>
                    <Typography color="primary" variant='h5'>
                      @{handle}
                    </Typography>
                    <hr/>
                    {bio && <Typography variant="body2">{bio}</Typography>}
                    <hr/>
                    {location && (
                        <Fragment>
                            <LocationOn color="primary"/> <span>{location}</span>
                            <hr/>
                        </Fragment>
                    )}
                    {website && (
                        <Fragment>
                            <LinkIcon color="primary"/>
                            <a href={website} target="_blank" rel="noopener noreferrer">
                                {' '}{website}
                            </a>
                            <hr/>
                        </Fragment>
                    )}
                    <CalendarToday color="primary"/>{' '}
                    <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
    
                    </div>
                    <MyButton tip="Logout" onClick={this.handleLogout} >
                      <KeyboardReturn color="primary"/>
                    </MyButton>
                    <EditDetails/>
                </div>
            </Paper>
        ) : (
            <Paper className={classes.paper}>
                <Typography variant="body2" align="center">
                    No profile found, please login again
                </Typography>
                <div className={classes.buttons}>
                    <Button variant="contained" color="primary" component={Link} to="/login">
                        Login
                    </Button>
                    <Button variant="contained" color="secondary" component={Link} to="/signup">
                        Signup
                    </Button>
                </div>
            </Paper>
        )) : (
        <div>
            <h1>Loading</h1>
            <PuffLoader>Loading</PuffLoader>
            </div>)
        return profileMarkup;
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapActionsToProps = { logoutUser};

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}


export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Profile));
