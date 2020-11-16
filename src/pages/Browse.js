import React, { Component } from "react";
import {food} from "../components/Suggestions"

export class Browse extends Component {
    state = {
        loading: true,
        title1: null,image1: null,likes1: null,
        title2: null,image2: null,likes2: null,
        title3: null,image3: null,likes3: null,
        title4: null,image4: null,likes4: null,
        title5: null,image5: null,likes5: null,
        title6: null,image6: null,likes6: null,
        title7: null,image7: null,likes7: null,
    }
 
    async componentDidMount() {
        const randomIndex = Math.floor(Math.random() * food.length);
        const recipe = food[randomIndex];
        const url = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=82fc3eb435d84878928dc33d21b4ded3&ingredients=' + recipe;
        const response = await fetch(url);
        const data = await response.json();

        this.setState({loading: false,
        title1: data[0].title, image1: data[0].image, likes1: data[0].likes,
        title2: data[1].title, image2: data[1].image, likes2: data[1].likes,
        title3: data[2].title, image3: data[2].image, likes3: data[2].likes,
        title4: data[3].title, image4: data[3].image, likes4: data[3].likes,
        title5: data[4].title, image5: data[4].image, likes5: data[4].likes,
        title6: data[5].title, image6: data[5].image, likes6: data[5].likes,
        title7: data[6].title, image7: data[6].image, likes7: data[6].likes,
        })
    }

    refreshPage = () => {
        this.componentDidMount();
    };
  
    render() {
        return ( 
            <div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <p>Don't have any recipes in mind? Browse through these recipes and see which ones you like best!</p>
                <button class="btn btn-primary my-3" onClick={this.refreshPage}>Generate New Foods To Look At</button>
                <div>{this.state.title1}</div>
                <div>Likes: {this.state.likes1}</div>
                <img src={this.state.image1}/>
                <div>{this.state.title2}</div>
                <div>Likes: {this.state.likes2}</div>
                <img src={this.state.image2}/>
                <div>{this.state.title3}</div>
                <div>Likes: {this.state.likes3}</div>
                <img src={this.state.image3}/>
                <div>{this.state.title4}</div>
                <div>Likes: {this.state.likes4}</div>
                <img src={this.state.image4}/>
                <div>{this.state.title5}</div>
                <div>Likes: {this.state.likes5}</div>
                <img src={this.state.image5}/>
                <div>{this.state.title6}</div>
                <div>Likes: {this.state.likes6}</div>
                <img src={this.state.image6}/>
                <div>{this.state.title7}</div>
                <div>Likes: {this.state.likes7}</div>
                <img src={this.state.image7}/>
            </div>
        </div>
        );
    }
}

export default Browse;
