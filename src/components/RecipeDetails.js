import React, { Component } from 'react'
import {recipe} from "../tempDetails"; 
import {PuffLoader,BarLoader,BeatLoader} from 'react-spinners';
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
    recipe: recipe,
    done: false
}
async componentDidMount(){
    const id = this.props.id;
    // const url = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=82fc3eb435d84878928dc33d21b4ded3`;
    const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=82fc3eb435d84878928dc33d21b4ded3`;

    try{
      const data = await fetch(url);
      const jsonData = await data.json();

  
      this.setState((state,props)=>{
          return {recipe: jsonData,done:true}
      },()=>{})
    }catch(error){
      console.log(error);
    }
};

    render() {
        const {extendedIngredients,title,image,sourceUrl,readyInMinutes,servings} = this.state.recipe;
        const{handleIndex} = this.props;
        console.log(this.state.done);
        return (
            <React.Fragment>
                {!this.state.done ? (
                    <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1 style={{textAlign:"center"}}>Loading</h1>
                        <div style={{display:"flex",justifyContent: "center", alignItems:'center'}}>
                            <PuffLoader loading/>
                        </div>
                    </div>

                ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" className="btn btn-warning mb-5 text-capitalize" style={{marginTop: "17vh"}} onClick={() => handleIndex(1)}>back to recipe list</button>
                            <img src={image}
                            className="d-block w-75"
                            alt="recipe"></img>
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h2 className="text-uppercase" style={{marginTop:"90px"}}>{title}</h2>
                            <span><h6>Total: {readyInMinutes} minutes | Yield: {servings} servings</h6></span>
                            <a href={sourceUrl} target="_blank" rel="noopener noreferrer"
                            className="btn btn-success mt-2 text-capitalize">recipe url</a>
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4">ingredients</h2>
                                {   
                                    extendedIngredients.map((item,index)=> {
                                        return (
                                        <li key={index} className="list-group-item">
                                            {item.measures.us.amount} {item.measures.us.unitShort} of {item.name}
                                        </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                     
                )}
            </React.Fragment>
        )
    }
}
