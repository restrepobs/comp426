import React, { Component } from 'react'
import "./RecipeSearch.css";
import Autocomplete from './Autocomplete'
import {food} from './Suggestions'
import './Autocomplete.css'
import Typography from "@material-ui/core/Typography";

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
        const {handleSubmit, handleChange} = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto md-8 mt-5 text-center">
                            <br></br>
                            <Typography variant="h2"> Recipeezy</Typography>
                            
                            <form className="mt-4" onSubmit={handleSubmit}>
                                <label htmlFor="search" className="text-capitalize">
                                    type ingredients separated by comma
                                </label>
                                    <div className="input-group">
                                    <Autocomplete 
                                    suggestions={food}
                                    //value= {value}
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                    ></Autocomplete>
                                    <div className="input-group-append">
                                        <button type="submit" className="btn input-group text-white" style={{zIndex:0, backgroundColor: '#3F51B0', position: 'absolute', width: '40px', height: '37px', top: '0px'}} onSubmit={handleSubmit}>
                                        <i className="fas fa-search"></i>

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

