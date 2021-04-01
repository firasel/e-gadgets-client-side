import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const {name,imgURL,price,weight,_id}=props.product

    return (
        <Col xs={11} sm={6} lg={4} className='cardMargin mt-4'>
            <Card className='cardDesign' >
                <Card.Img className='cardImg' variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title style={{margin:'0'}}>{name}</Card.Title>
                </Card.Body>
                <Card.Footer style={{background:'none',border:'0'}}>
                    <div className='d-flex justify-content-between'>
                        <h4>${price}</h4>
                        <Button style={{fontWeight:'500'}} as={Link} to={`/checkout/${_id}`} variant="success">Buy Now</Button>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Product;