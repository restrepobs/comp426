import React, { Component } from 'react'

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
                      />
                      <div className="card-body text-capitalize">
                          <h6>{title}</h6>
                      </div>
                      <div className="card-footer">
                          <button type="button"
                          className="btn btn-primary text-capitalize" onClick={handleDetails}
                          >details</button>
                          
                      </div>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}
