import React from "react";
import { Link } from "react-router-dom"
import {Container, Row, Col, Card, CardColumns, CardGroup} from 'react-bootstrap'

const Brand = (props) => {
  // console.log(props.brands)

  if (props.brands && props.brands.length >= 1) {
    const brand = props.brands.find(
      (brand) => brand.id === parseInt(props.match.params.id, 10)
    );

    const shoes = props.shoes.filter(shoe => shoe.brand_id === brand.id)
    // console.log(shoes)
    // console.log(brand)
    return (
      <div container id={brand.id} display="flex" justify-content="center">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto"><h3 text-align="center">{brand.name}</h3></Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto"><img src={brand.picture} alt={brand.name} height="200" width="300"/></Col>
            </Row>
        </Container>

        <div style={{margin: 40, fontWeight: 'bold', fontSize: 19}}>Results <span style={{color: '#606060'}}>{shoes.length}</span></div>

        <React.Fragment>
          <Container>
            <Row >
              {shoes.map(shoe => {
                return (
                  <div key={shoe.id} className="col-md-4">

                    <CardGroup >
                      <Card style={{display: 'flex', }}>
                        <Link to={"/shoes/" + shoe.id} >
                          <Card.Img src={shoe.picture} alt={shoe.name} width="100" height="150"/>
                        </Link>
                        <Card.Body>
                          <Card.Title><Link to={"/shoes/" + shoe.id} style={{textDecoration: 'none', color: 'black', textAlign:'center'}}><h4>{shoe.name}</h4></Link><br/></Card.Title>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                    
                  </div>
                )
              })}
            </Row>
          </Container>
        </React.Fragment>
        
      </div>
    );
  }

  return <div>Brand</div>;
};

export default Brand;
