import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Container, Row, Card, CardGroup} from 'react-bootstrap'

class BrandsList extends Component {
  render() {
    // console.log(this.props.brands);

    const { brands } = this.props;
    const brandlist = () => {
      if (brands && brands.length >= 1) {
        return brands.map((brand) => {
          return (
            <div key={brand.id} id={`brand_${brand.id}`} className="col-md-4">
              
              <Link to={"/brands/" + brand.id} >
              <CardGroup >
                  <Card border="secondary">
                    <Card.Img src={brand.picture} alt={brand.name} style={{alignItems:'center', height: '150px'}}/>
                    <Card.Body>
                      <Card.Title><h4 style={{textDecoration: 'none', color: 'black', textAlign:'center'}}>{brand.name}</h4></Card.Title>
                    </Card.Body>
                  </Card>
                 
              </CardGroup>
              </Link>
            </div>
          );
        });
      }
    };

    return (
      <div className="brands">
        <React.Fragment>
          <Container>
            <Row >
              {brandlist()}
            </Row>
          </Container>
        </React.Fragment>
      </div>
    );
  }
}

export default BrandsList;


