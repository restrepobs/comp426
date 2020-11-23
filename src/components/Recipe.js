import React, { Component } from 'react';
import "./Recipe.css";
import Button from "@material-ui/core/Button";

export default class Recipe extends Component {
    render() {
        const {
            image,
            id,
            title,
            href,
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
                          <h6>{title}</h6>
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
