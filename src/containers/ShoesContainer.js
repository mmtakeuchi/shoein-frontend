import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { getShoes, addShoe, deleteShoe } from "../actions/shoeActions";
import ShoesList from "../components/shoes/ShoesList";
import Shoe from "../components/shoes/Shoe";
import ShoeForm from "../components/shoes/ShoeForm";
import Container from '@material-ui/core/Container';

export class ShoesContainer extends Component {
  componentDidMount = () => {
    this.props.getShoes();
  };

  render() {
      
    return (
      <React.Fragment>
          <Container>
        <Switch>
          <Route
            exact
            path="/shoes/new"
            render={(props) => (
              <ShoeForm {...props} addShoe={this.props.addShoe} brands={this.props.brands}/>
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
              <Shoe {...props} shoes={this.props.shoes.shoes} deleteShoe={this.props.deleteShoe} brands={this.props.brands}/>
            )}
          />
        </Switch>
        </Container>
        {/* <button>
          <Link to={"/shoes/new"}>Create Shoe</Link>
        </button> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ shoes: state.shoes });

const mapDispatchToProps = (dispatch) => ({
  getShoes: () => dispatch(getShoes()),
  addShoe: (shoe) => dispatch(addShoe(shoe)),
  deleteShoe: (shoeId) => dispatch(deleteShoe(shoeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoesContainer);
