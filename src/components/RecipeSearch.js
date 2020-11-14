import React, { Component } from 'react'
import "./RecipeSearch.css";
import Autocomplete from './Autocomplete'
import {food} from './Suggestions'
import './Autocomplete.css'

export default class RecipeSearch extends Component {
    state={
        value: this.props.value,
      };

      changeValue = () => {
        this.setState({
          value: this.props.value,
        })
      }

    render() {
        console.log(this.state.value);
        const {value, handleSubmit, handleChange} = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto md-8 mt-5 text-center">
                            <br></br>
                            <h1 className="text-capitalize">search for recipe with ingredients</h1>
                            <form classname="mt-4" onSubmit={handleSubmit}>
                                <label htmlFor="search" className="text-capitalize">
                                    type ingredients separated by comma
                                </label>
                                    <div className="input-group">
                                    <Autocomplete 
                                    suggestions={food}
                                    value={value}
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                    ></Autocomplete>
                                    {/*<input type="text" name="serch" placeholder="ex: chicken,onions,carrots" 
                                    className="form-control"
                                    value={value}
                                    onChange={handleChange}
                                    autoFocus=""
                                     ></input>*/}

                                    <div className="input-group-append">
                                        <button type="submit" className="btn input-group bg-primary text-white" style={{zIndex:0}} onSubmit={handleSubmit}>
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

