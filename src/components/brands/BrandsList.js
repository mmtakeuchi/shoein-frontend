import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Container, Row, Col, Card, CardColumns, CardGroup} from 'react-bootstrap'

class BrandsList extends Component {
  render() {
    // console.log(this.props.brands);

    const { brands } = this.props;
    const brandlist = () => {
      if (brands && brands.length >= 1) {
        return brands.map((brand) => {
          return (
            <div key={brand.id} id={`brand_${brand.id}`} className="col-md-4">
              
              <CardGroup >
                  <Card className="flex-fill" style={{height: '350px'}}>
                    <Link to={"/brands/" + brand.id} >
                      <Card.Img src={brand.picture} alt={brand.name} style={{padding:"30px", justifyContent: 'center', alignItems: 'center'}}/>
                    </Link>
                    <Card.Body>
                      <Card.Title><Link to={"/brands/" + brand.id} style={{textDecoration: 'none', color: 'black', textAlign:'center'}}><h4>{brand.name}</h4></Link><br/></Card.Title>
                    </Card.Body>
                  </Card>
              </CardGroup>
              
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


