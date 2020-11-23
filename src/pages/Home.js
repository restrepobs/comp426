import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import IngredientHeader from "../components/IngredientHeader";
import {recipes} from "../tempList";
import RecipeList from "../components/RecipeList";
import RecipeDetails from "../components/RecipeDetails";
import {PuffLoader,BarLoader,BeatLoader} from 'react-spinners';
import Autocomplete from '../components/Autocomplete';



const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
}));
export class Home extends Component {
  state={
    recipes: recipes,
    url: "https://api.spoonacular.com/recipes/findByIngredients?apiKey=35d14b0f986b4ce68a582bf645a7825eingredients=chocolate",
    base_url: "https://api.spoonacular.com/recipes/findByIngredients?apiKey=35d14b0f986b4ce68a582bf645a7825e",
    details_id: 47950,
    pageIndex: 1,
    search: '',
    query:'&ingredients=',
    error: '',
    image: '',
    title:'',
    done: false
  };

  async getRecipes(){
    try{
      let search = localStorage.getItem("search");
      let url = this.state.url;
      console.log(search);
      if (search && JSON.parse(search) !== ""){
        search = JSON.parse(search);
        url=`${this.state.base_url}${this.state.query}${search.replaceAll(",",",+")}`
      }
      console.log(url);
      const data = await fetch(url);
      const jsonData = await data.json();
      this.setState({
        error: ''
      })
      if(jsonData.length === 0){
        this.setState(() => {
          return {error:"sorry but your search did not return any results"}
        })
      }
      else{
        this.setState(() => {
          return{recipes:jsonData}
        })
      }
      this.setState({
        recipes:jsonData,
        done: true
      })
    }catch(error){
 
    }
  }

  componentDidMount(){
    const search = localStorage.getItem("search");
    const{base_url,query} = this.state;
    if (search) {
      this.setState({
        url:`${base_url}${query}${search.replaceAll(",",",+")}`
      })
    }
    else{
      this.setState({
        search: "chocolate"
      })
    }
    this.getRecipes()
  }

displayPage=(index) => {
  switch(index){
    default: 
    case 1:
      return(<RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} value={this.state.search}
      handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error}/>)
    case 0:
      return(<RecipeDetails id={this.state.details_id} title={this.state.title} image={this.state.image} handleIndex={this.handleIndex}></RecipeDetails>)
  }
};

handleIndex = index => {
  localStorage.setItem("index", JSON.stringify(index))
  this.setState({
    pageIndex: index
  })
}

handleDetails = (index,id,image,title) => {
  this.setState({
    pageIndex: index,
    details_id: id,
    image: image,
    title: title
  })
}
handleSubmit = (e) => {
  e.preventDefault();
  const{base_url,query,search} = this.state;
  let result = localStorage.getItem('searchResult');
  if(JSON.parse(result) !== ""){
    localStorage.setItem("search", result);

  }
  this.setState(() => {
    return {url: `${base_url}${query}${search.replaceAll(",",",+")}`, }
  }, () => {
    this.getRecipes();
  })
}


handleChange = (e) => {
  this.setState({
    search:e.target.value
  },()=>{
    return
  })
}
  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
        {!this.state.done ? (
          <div>
            <h1 style={{textAlign:"center"}}>Loading</h1>
                        <div style={{display:"flex",justifyContent: "center", alignItems:'center'}}>
                            <PuffLoader loading/>
                        </div>
          </div>
        ): 
  this.displayPage(this.state.pageIndex)}

      </React.Fragment>
    )
  }
}

export default Home;
