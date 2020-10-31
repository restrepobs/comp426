import React, { Component } from 'react'

export default class RecipeSearch extends Component {
    render() {
        const {value, handleSubmit, handleChange} = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto md-8 mt-5 text-center">
                            <h1 className="text-capitalize">search for recipe with ingredients</h1>
                            <form classname="mt-4" onSubmit={handleSubmit}>
                                <label htmlFor="search" className="text-capitalize">
                                    type ingredients separated by comma
                                </label>
                                <div className="input-group">
                                    <input type="text" name="serch" placeholder="chicken,onions,carrots" 
                                    className="form-control"
                                    value={value}
                                    onChange={handleChange}
                                    ></input>
                                    <div className="input-group-append">
                                        <button type="submit" className="input-group bg-primary text-white">
                                            <i className="fas fa-search"/>
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