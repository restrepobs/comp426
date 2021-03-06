import React, { Component } from 'react';
import "./Recipe.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class Recipe extends Component {
    render() {
        const {
            image,
            title,
        } = this.props.recipe;
const{handleDetails} = this.props;
        return (
            <React.Fragment>
               <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                   <div className="card">

                       <img src={image}
                        className="img-card-top"
                        style={{height:"14rem"}}
                        alt="recipe"
                        onClick={handleDetails}
                      />


                      <div className="card-body text-capitalize">
                          
                          <Typography variant="h5">{title}</Typography>
                      </div>
                      <div className="card-footer">
                          {/* <button type="button"
                          className="btn btn-primary text-capitalize" onClick={handleDetails}
                          >details</button> */}
                          <Button type="button" onClick={handleDetails} variant="contained" color="primary">
                              Details
                          </Button>
                          
                      </div>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}
