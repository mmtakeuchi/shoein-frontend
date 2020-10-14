import React, { Component } from "react";

class ShoeForm extends Component {
  state = {
    name: "",
    image: "",
    color: "",
    size: "",
    condition: "",
    brand: "",
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
      event.preventDefault();

      this.setState({
          [event.target.name]: ""
      })
  }

  render() {
    return (
      <div>
          <form>
              <label htmlFor="name">Name:   </label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>

              <label htmlFor="image">Image:</label>
              <input type="text" name="image" value={this.state.image} onChange={this.handleChange} /><br/>

              <label htmlFor="color">Color:</label>
              <input type="text" name="color" value={this.state.color} onChange={this.handleChange} /><br/>

              <label htmlFor="size">Size:</label>
              <input type="text" name="size" value={this.state.size} onChange={this.handleChange} /><br/>

              <label htmlFor="condition">Condition:</label>
              <input type="text" name="condition" value={this.state.condition} onChange={this.handleChange} /><br/>

              <label htmlFor="brand">Brand:</label>
              <input type="text" name="brand" value={this.state.brand} onChange={this.handleChange} /><br/>

              <input type="submit" value="Create Shoe" onSubmit={this.handleSubmit}/>
          </form>
      </div>
    );
  }
}

export default ShoeForm;
