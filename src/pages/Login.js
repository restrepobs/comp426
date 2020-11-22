import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {PuffLoader} from 'react-spinners';
//MUI stuff
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//Redux
import {connect, connent} from 'react-redux';
import {loginUser} from '../redux/actions/userActions';


const styles={
    form:{
        textAlign: 'center'
    },
    pageTitle:{
        margin: '10px auto 10px auto'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20,
        position: 'relative'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10,
        marginBottom: 10
    },
    progress : {
        position: 'absolute'
    }
};



export class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',

            errors: {}
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({errors: nextProps.UI.errors});
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData, this.props.history);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const {classes, UI: {loading}} = this.props;
        const {errors} = this.state;
        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <Typography variant="h2" className={classes.pageTitle}> Login</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id="email" name="email" type="email" label="Email" className={classes.textField}
                            helperText={errors.email} error={errors.email ? true : false} value={this.state.email} onChange={this.handleChange} fullWidth></TextField>
                        <TextField id="password" name="password" type="password" label="Password" className={classes.textField}
                             helperText={errors.password} error={errors.password ? true : false}value={this.state.password} onChange={this.handleChange} fullWidth></TextField>
                             {errors.general && (
                                 <Typography variant="body2" className={classes.customError}>
                                     {errors.general}
                                 </Typography>
                             )}
                        <Button type="submit" variant="contained" color="primary" className={classes.Button} disabled={loading}>
                            Login
                            {loading && (
                                <PuffLoader size={30} className={classes.progress}/>
                            )}
                            </Button>
                        <br/>
                        <small>don't have an account? signup <Link to="/signup">here</Link></small> 
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
})

const mapActionsToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Login))