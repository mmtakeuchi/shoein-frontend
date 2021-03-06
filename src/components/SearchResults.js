// import React from 'react'

// const SearchResults = (props) => {
    
//     console.log(props)
//     return (
//         <div>
//             Hello
//         </div>
//     )
    
// }

// export default SearchResults

import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Container, Row, Card, CardGroup} from 'react-bootstrap'
import { connect } from 'react-redux'
import {findShoe} from '../actions/shoeActions'

class SearchResults extends Component {
    
//   componentDidMount = (query) => {
//     this.props.findShoe(query)
//   }

    state = {
        query: "",
        searchResults: []
    }

    handleSearch = () => {
        let searchText = this.props.location.state.query;
        let results = this.props.shoes.shoes.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))

        this.setState({
          query: searchText,
          searchResults: results
        });
      };

      componentDidMount() {
        this.props.getShoes()
        this.handleSearch();
      }

      componentDidUpdate(prevProps) {
        let prevSearch = prevProps.location.state.query;
        let newSearch = this.props.location.state.query;
        if (prevSearch !== newSearch) {
          this.handleSearch();
        }
      }

  render() {
    console.log(this)
    return (
        <div className="shoes" style={{margin:"20px"}}>
            <Container>
                <Row>

                    <div>Search: "{this.state.query}"</div>
                </Row>
            
              <Row >
              {this.state.searchResults.length > 0 ? (
                  
            <div>
                <div>Results {this.state.searchResults.length}</div>
              {this.state.searchResults.map(shoe => {
                  return (
                      <>
                          <div key={shoe.id} className={`shoe_${shoe.id} col-md-3`}>
                              <CardGroup >
                                  <Card>
                                      <Link to={"/shoes/" + shoe.id} >
                                      <Card.Img src={shoe.picture} alt={shoe.name}/>
                                      </Link>
                                      <Card.Body>
                                      <Card.Title><Link to={"/shoes/" + shoe.id} style={{textDecoration: 'none', color: 'black', textAlign:'center'}}><h4>{shoe.name}</h4></Link><br/></Card.Title>
                                      </Card.Body>
                                  </Card> 
                              </CardGroup>
                          </div>
                      </>
                      
                  )
              })}
            </div>
          ) : (
            <p>NO RESULTS FOUND</p>
          )}
              
              </Row>
            </Container>
        </div>
      );
    };
  }

const mapStateToProps = (state) => ({shoes: state.shoes})

const mapDispatchToProps = (dispatch) => ({
    findShoe: (query) => dispatch(findShoe(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);