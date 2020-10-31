import React, { Component } from 'react'
import {recipe} from "../tempDetails"; 
export default class RecipeDetails extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             recipe:recipe,
//             url: `https://api.spoonacular.com/recipes/${this.props.id}/ingredientWidget.json?apiKey=82fc3eb435d84878928dc33d21b4ded3`
//         }
//     }

 

//   async componentDidMount(){
//    try{
//       const data = await fetch(this.state.url);
//       const jsonData = await data.json();
  
//       this.setState({
//         recipe:jsonData
//       })
//     }catch(error){
//       console.log(error);
//     }
//   }
state={
    recipe: recipe
}
async componentDidMount(){
    const id = this.props.id;
    const url = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=82fc3eb435d84878928dc33d21b4ded3`;
    try{
      const data = await fetch(url);
      const jsonData = await data.json();
  
      this.setState((state,props)=>{
          return {recipe: jsonData}
      },()=>{})
    }catch(error){
      console.log(error);
    }
};

    render() {
        const {ingredients} = this.state.recipe;
        const{handleIndex} = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" className="btn btn-warning mb-5 text-capitalize" style={{marginTop: "17vh"}} onClick={() => handleIndex(1)}>back to recipe list</button>
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">title</h6>
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4">ingredients</h2>
                                {
                                    ingredients.map((item,index)=> {
                                        return (
                                        <li key={index} className="list-group-item">
                                            {item.amount.us.value} {item.amount.us.unit} of {item.name}
                                        </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
