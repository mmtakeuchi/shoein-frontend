import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Container, Row, Card, CardGroup} from 'react-bootstrap'

class ShoesList extends Component {
  render() {
    console.log(this)
    const { shoes } = this.props;

    const shoelist = () => {
      if (shoes && shoes.length >= 1) {
        return shoes.map((shoe) => {
          return (
            <div key={shoe.id} className={`shoe_${shoe.id} col-md-3`}>
              <CardGroup >
                  <Card>
                    <Link to={"/shoes/" + shoe.id} >
                      <Card.Img src={shoe.picture} alt={shoe.name} width="100" height="150"/>
                    </Link>
                    <Card.Body>
                      <Card.Title><Link to={"/shoes/" + shoe.id} style={{textDecoration: 'none', color: 'black', textAlign:'center'}}><h4>{shoe.name}</h4></Link><br/></Card.Title>
                    </Card.Body>
                  </Card> 
              </CardGroup>
            </div>
          );
        });
      }
    };

    return (
      <div className="shoes" style={{margin:"20px"}}>
          <Container>
            <Row >
            {shoelist()}
            </Row>
          </Container>
      </div>
    );
  }
}

export default ShoesList;
