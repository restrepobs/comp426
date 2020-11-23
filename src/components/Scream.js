import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
import DeleteScream from './DeleteScream';
//MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typorgraphy from "@material-ui/core/Typography";
import { connect } from 'react-redux';
import {likeScream, unlikeScream} from '../redux/actions/dataActions';
import MyButton from '../util/MyButton';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const styles = {
    card: {
        position: 'relative',
        display: "flex",
        marginBottom: 20,
    }
}
export class Scream extends Component {
    likedScream = () => {
        if(this.props.user.likes && this.props.user.likes.find(like => like.screamId === this.props.screamId)){
            return true
        }
        else{
            return false;
        }
    }
    likeScream = () => {
        this.props.likeScream(this.props.screamId);
        console.log(`likes = ${this.props.likeCount}`);
    }
    unlikeScream = () => {
        this.props.unlikeScream(this.props.screamId)
    }
    render() {
        const {classes,user:{authenticated, credentials: {handle}}} = this.props;
        const likeButton = !authenticated ? (
            <MyButton tip="Like">
                <Link to="/login">
                    <FavoriteBorder color="primary"/>
                </Link>
            </MyButton>
        ) : (
            this.likedScream() ? (
                <MyButton tip="Undo Like" onClick={this.unlikeScream}>
                    <FavoriteIcon color="primary"/>
                </MyButton>
            ) : (
                <MyButton tip="Like" onClick={this.likeScream}>
                    <FavoriteBorder color="primary"/>
                </MyButton>
            )
        )
        const deleteButton = authenticated && this.props.handle === handle ? (
            <DeleteScream screamId={this.props.screamId}/>
        ) : null
        return (
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typorgraphy variant="h5" component={Link} to={`/users/${this.props.handle}`} >{this.props.handle}</Typorgraphy>
                    {deleteButton}
                    <Typorgraphy variant="body2" color="textSecondary">{this.props.created}</Typorgraphy>
                    <Typorgraphy variant="body1">{this.props.body}</Typorgraphy>
                    {likeButton}
                    <span>{this.props.likeCount}like</span>
                    <MyButton tip="comments">
                        <ChatIcon color="primary"/>
                    </MyButton>
                    <span>{this.props.commentCount}comment</span>
                </CardContent>
            </Card>
        )
    }
}

Scream.propTypes = {
    likeScream: PropTypes.func.isRequired,
    unlikeScream: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    scream: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    user: state.user
  });

  const mapActionsToProps = {
      likeScream,
      unlikeScream
  }
  
  export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Scream));
