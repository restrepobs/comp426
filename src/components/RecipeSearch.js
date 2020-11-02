import React, { Component } from 'react'

export default class RecipeSearch extends Component {
    render() {
        const {value, handleSubmit, handleChange} = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto md-8 mt-5 text-center">
<<<<<<< HEAD
                            <br></br>
                            <h1 className="text-capitalize">search for recipe with ingredients</h1>
=======
                            <h1 className="text-capitalize" style={{marginTop:"10vh" }}>search for recipes with ingredients!</h1>
>>>>>>> 3c6bcf2b6b65600d1d3ad793c289d879dc097e0d
                            <form classname="mt-4" onSubmit={handleSubmit}>
                                <label htmlFor="search" className="text-capitalize">
                                    type ingredients separated by comma
                                </label>
                                <div className="input-group">
                                    <input type="text" name="serch" placeholder="ex:chicken,onions,carrots" 
                                    className="form-control"
                                    value={value}
                                    onChange={handleChange}
                                    ></input>
                                    <div className="input-group-append">
                                        <button type="submit" className="btn input-group bg-primary text-white" style={{zIndex:0}}>
                                        <i class="fas fa-search"></i>

                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
