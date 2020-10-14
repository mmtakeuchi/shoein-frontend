import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { getShoes, addShoe } from "../actions/shoeActions";
import ShoesList from "../components/shoes/ShoesList";
import Shoe from "../components/shoes/Shoe";
import ShoeForm from "../components/shoes/ShoeForm";

export class ShoesContainer extends Component {
  componentDidMount = () => {
    this.props.getShoes();
  };

  render() {
      
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/shoes/new"
            render={(props) => (
              <ShoeForm {...props} addShoe={this.props.addShoe} />
            )}
          />
          <Route
            exact
            path="/shoes"
            render={(props) => (
              <ShoesList {...props} shoes={this.props.shoes.shoes} />
            )}
          />
          <Route
            path="/shoes/:id"
            render={(props) => (
              <Shoe {...props} shoes={this.props.shoes.shoes} />
            )}
          />
        </Switch>
        {/* <button>
          <Link to={"/shoes/new"}>Create Shoe</Link>
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ shoes: state.shoes });

const mapDispatchToProps = (dispatch) => ({
  getShoes: () => dispatch(getShoes()),
  addShoe: (shoe) => dispatch(addShoe(shoe))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoesContainer);
