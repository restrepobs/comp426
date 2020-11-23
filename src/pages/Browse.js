import React, { Component } from "react";
import {food} from "../components/Suggestions"

export class Browse extends Component {
    state = {
        loading: true,
        title: null, image: null, website: null,
        title1: null, image1: null, website1: null,
        title2: null, image2: null, website2: null,
        title3: null, image3: null, website3: null,
        title4: null, image4: null, website4: null,
        title5: null, image5: null, website5: null,
    }
 
    async componentDidMount() {
        for (let i = 0; i < 6; i++) {

        const randomNumber = Math.floor(Math.random() * 100000);
        const url = 'https://api.spoonacular.com/recipes/' + randomNumber + '/information?includeNutrition=false&apiKey=35d14b0f986b4ce68a582bf645a7825e'
        const response = await fetch(url);
        const data = await response.json();
        console.log(i + data.id)
        if (i === 0) {
            this.setState({loading: false,
                title: data.title,
                image: data.image,
                website: data.sourceUrl,
            })
        } else if (i === 1) {
            this.setState({loading: false,
                title1: data.title,
                image1: data.image,
                website1: data.sourceUrl,
            })
        } else if (i === 2){
            this.setState({loading: false,
                title2: data.title,
                image2: data.image,
                website2: data.sourceUrl,
            })
        } else if (i === 3) {
            this.setState({loading: false,
                title3: data.title,
                image3: data.image,
                website3: data.sourceUrl,
            })
        } else if (i === 4) {
            this.setState({loading: false,
                title4: data.title,
                image4: data.image,
                website4: data.sourceUrl,
            })
        } else {
            this.setState({loading: false,
                title5: data.title,
                image5: data.image,
                website5: data.sourceUrl,
            })
        }
       

        }
    }

    refreshPage = () => {
        this.componentDidMount();
    };
    
  
    render() {
        return ( 
            <div>
            <br></br>
            <div>
            <h2>Can't think of any recipes? That's okay! Browse through these recipes and see which ones you like.</h2>
            
            <br></br>

            <div style={{fontSize:'20px'}}>{this.state.title}</div>  
            <img src={this.state.image}/>   
            <br></br>
            <a href={this.state.website} target="_blank" rel="noopener noreferrer" >recipe link</a>

            <br></br>
            <br></br>

            <div style={{fontSize:'20px'}}>{this.state.title1}</div>  
            <img src={this.state.image1}/>   
            <br></br>
            <a href={this.state.website1} target="_blank" rel="noopener noreferrer" >recipe link</a>
            
            <br></br>
            <br></br>

            <div style={{fontSize:'20px'}}>{this.state.title2}</div>  
            <img src={this.state.image2}/>   
            <br></br>
            <a href={this.state.website2} target="_blank" rel="noopener noreferrer" >recipe link</a>
            
            <br></br>
            <br></br>

            <div style={{fontSize:'20px'}}>{this.state.title3}</div>  
            <img src={this.state.image3}/>   
            <br></br>
            <a href={this.state.website3} target="_blank" rel="noopener noreferrer" >recipe link</a>

            <br></br>
            <br></br>

            <div style={{fontSize:'20px'}}>{this.state.title4}</div>  
            <img src={this.state.image4}/>   
            <br></br>
            <a href={this.state.website4} target="_blank" rel="noopener noreferrer" >recipe link</a>

            <br></br>
            <br></br>

            <div style={{fontSize:'20px'}}>{this.state.title5}</div>  
            <img src={this.state.image5}/>   
            <br></br>
            <a href={this.state.website5} target="_blank" rel="noopener noreferrer" >recipe link</a>

            <br></br>
            <br></br>

            <button className='btn btn-info my-3' onClick={this.refreshPage}>Generate More Recipes</button>
            </div>
        </div>
        );
    }
}

export default Browse;

