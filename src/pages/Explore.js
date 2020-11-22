import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import Scream from "../components/Scream";
import {PuffLoader} from 'react-spinners';
import Profile from "../components/Profile";
import {connect } from 'react-redux';
import {getScreams} from '../redux/actions/dataActions';
import PropTypes from 'prop-types';


export class Explore extends Component {
     componentDidMount() {
                this.props.getScreams();
              }
            render() {
                const { screams, loading } = this.props.data;
                let recentScreamsMarkup = !loading ? (
                    screams.map((scream) => 
                        <Scream key ={scream.screamId} body={scream.body} handle={scream.userHandle} 
                        likeCount={scream.likeCount} commentCount={scream.commentCount}
                        screamId={scream.screamId}
                        />)
                ) : (<div>
                    <h1>Loading</h1>
                    <PuffLoader/>
                </div>
                );
        return (
            <Grid container spacing={10}>
                <Grid item sm={8} xs={12}>
                    {recentScreamsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Profile/>
                </Grid>
            </Grid>
        )
    }
}

Explore.propTypes = {
    getScreams: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    data: state.data
  });
  
  export default connect(
    mapStateToProps,
    { getScreams }
  )(Explore);
