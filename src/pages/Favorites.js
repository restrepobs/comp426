import React, { Component } from "react";

export class Favorites extends Component {
    constructor(props) {
      super(props);

      this.state={
        newItem: '',
        list:[]
      }
    }

    updateInput(key, value) {
      this.setState({
        [key]:value
      })
    }

    addItem() {
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };

      const list = [...this.state.list];
      list.push(newItem);
      this.setState({list,newItem:''})
    }

    deleteItem(id) {
      const list = [...this.state.list];
      const updatedList = list.filter(item => item.id !== id);
      this.setState({list: updatedList});
    }
    render() {
      return (
        <div className='Favorites'>
          <br></br>
          <br></br>
          <br></br>
          <h1 style = {{fontSize: '46px', fontFamily: 'ariel', color: 'red', borderStyle: 'outset', 
            borderColor: 'orange'}}>My Favorite Recipes</h1>
          <div>
            <p style = {{fontSize: '15px'}}>
              Add Recipes You Enjoyed Or Want To Enjoy Later</p>
            <input 
              type='text'
              placeholder='type a recipe'
              value={this.state.newItem}
              onChange={e => this.updateInput('newItem', e.target.value)}
              />
            <button onClick={() => this.addItem()}>
              Add
            </button>
            <br/>
            <ul style = {{listStyleType: 'disk'}}>
              {this.state.list.map(item =>{
                return(
                  <li key={item.id}>
                    {item.value}
                    <button onClick={() => this.deleteItem(item.id)} 
                    style = {{fontSize: '10px', backgroundColor: '', padding: ''}}>
                     Delete
                    </button>
                  </li>
                )
              })}
            </ul>
            </div>
          </div>
      )
    }
  }
export default Favorites;