import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


export class Browse extends Component {
    state = {
        loading: true,
        title: null, image: null, website: null,
        title1: null, image1: null, website1: null,
        title2: null, image2: null, website2: null,
        title3: null, image3: null, website3: null,
        title4: null, image4: null, website4: null,
        title5: null, image5: null, website5: null,
        title6: null, image6: null, website6: null,
        title7: null, image7: null, website7: null,
        title8: null, image8: null, website8: null
    }
 
    async componentDidMount() {
        for (let i = 0; i < 10; i++) {

        let randomNumber = Math.floor(Math.random() * 100000);
        let url = 'https://api.spoonacular.com/recipes/' + randomNumber + '/information?includeNutrition=false&apiKey=82fc3eb435d84878928dc33d21b4ded3'
        let response = await fetch(url);
        while(response.status===404){
            randomNumber = Math.floor(Math.random() * 100000);
            url = 'https://api.spoonacular.com/recipes/' + randomNumber + '/information?includeNutrition=false&apiKey=82fc3eb435d84878928dc33d21b4ded3'
            response = await fetch(url);
        }
        const data = await response.json();
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
        } else if(i===5){
            this.setState({loading: false,
                title5: data.title,
                image5: data.image,
                website5: data.sourceUrl,
            })
        }else if(i===6){
            this.setState({loading: false,
                title6: data.title,
                image6: data.image,
                website6: data.sourceUrl,
            })
        }else if(i===7){
            this.setState({loading: false,
                title7: data.title,
                image7: data.image,
                website7: data.sourceUrl,
            })
        }else if(i===8){
            this.setState({loading: false,
                title8: data.title,
                image8: data.image,
                website8: data.sourceUrl,
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
            <Typography variant="h3" style={{textAlign: 'center'}}>Recipeezy's Trending Recipes! </Typography>
            <br></br>

            <div className="row">
             <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                 <div className="card">
                    <img alt="recipe" src={this.state.image} style={{height:"14rem"}}/>   
                    <div className="card-body text-capitalize">
                          <Typography variant="h5">{this.state.title}</Typography>
                      </div>

                      <div className="card-footer">
                         <Button type="button" target="_blank" variant="contained" href={this.state.website} color="primary">
                              Recipe
                          </Button>

                      </div>
                 </div>


             </div>
             <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                 <div className="card">
                    <img alt="recipe" src={this.state.image6} style={{height:"14rem"}}/>   
                    <div className="card-body text-capitalize">
                          <Typography variant="h5">{this.state.title6}</Typography>
                      </div>

                      <div className="card-footer">
                         <Button type="button" target="_blank" variant="contained" href={this.state.website6} color="primary">
                              Recipe
                          </Button>

                      </div>
                 </div>


             </div>
             <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                 <div className="card">
                    <img alt="recipe" src={this.state.image1} style={{height:"14rem"}}/>   
                    <div className="card-body text-capitalize">
                          <Typography variant="h5">{this.state.title1}</Typography>
                      </div>

                      <div className="card-footer">
                         <Button type="button" target="_blank" variant="contained" href={this.state.website1} color="primary">
                              Recipe
                          </Button>

                      </div>
                 </div>


             </div>

            </div>
            <div className="row">
             <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                 <div className="card">
                    <img alt="recipe" src={this.state.image2} style={{height:"14rem"}}/>   
                    <div className="card-body text-capitalize">
                          <Typography variant="h5">{this.state.title2}</Typography>
                      </div>

                      <div className="card-footer">
                         <Button type="button" target="_blank" variant="contained" href={this.state.website2} color="primary">
                              Recipe
                          </Button>

                      </div>
                 </div>
 
             </div>
             <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                 <div className="card">
                    <img alt="recipe" src={this.state.image7} style={{height:"14rem"}}/>   
                    <div className="card-body text-capitalize">
                          <Typography variant="h5">{this.state.title7}</Typography>
                      </div>

                      <div className="card-footer">
                         <Button type="button" target="_blank" variant="contained" href={this.state.website7} color="primary">
                              Recipe
                          </Button>

                      </div>
                 </div>


             </div>
             <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                 <div className="card">
                    <img alt="recipe" src={this.state.image3} style={{height:"14rem"}}/>   
                    <div className="card-body text-capitalize">
                          <Typography variant="h5">{this.state.title3}</Typography>
                      </div>

                      <div className="card-footer">
                         <Button type="button" target="_blank" variant="contained" href={this.state.website3} color="primary">
                              Recipe
                          </Button>

                      </div>
                 </div>

             </div>

            </div>



            <div className="row">
             <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                 <div className="card">
                    <img alt="recipe" src={this.state.image4} style={{height:"14rem"}}/>   
                    <div className="card-body text-capitalize">
                          <Typography variant="h5">{this.state.title4}</Typography>
                      </div>

                      <div className="card-footer">
                         <Button type="button" target="_blank" variant="contained" href={this.state.website4} color="primary">
                              Recipe
                          </Button>

                      </div>
                 </div>
    

             </div>
             <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                 <div className="card">
                    <img alt="recipe" src={this.state.image8} style={{height:"14rem"}}/>   
                    <div className="card-body text-capitalize">
                          <Typography variant="h5">{this.state.title8}</Typography>
                      </div>

                      <div className="card-footer">
                         <Button type="button" target="_blank" variant="contained" href={this.state.website8} color="primary">
                              Recipe
                          </Button>

                      </div>
                 </div>


             </div>
             <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                 <div className="card">
                    <img alt="recipe" src={this.state.image5} style={{height:"14rem"}}/>   
                    <div className="card-body text-capitalize">
                          <Typography variant="h5">{this.state.title5}</Typography>
                      </div>

                      <div className="card-footer">
                         <Button type="button" target="_blank" variant="contained" href={this.state.website5} color="primary">
                              Recipe
                          </Button>

                      </div>
                 </div>
          

             </div>

            </div>

            

            <br></br>
            <br></br>

            {/* <button className='btn btn-info my-3' onClick={this.refreshPage}>Generate More Recipes</button> */}
            <Button onClick={this.refreshPage} style={{margin: '0 auto', display:'block', marginBottom: '10px'}}variant="contained" color="primary">Generate More Recipes</Button>
            </div>
        </div>
        );
    }
}

export default Browse;

