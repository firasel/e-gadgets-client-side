import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './OrderProduct.css';

const OrderProduct = (props) => {
    const {productName,price,imgURL,orderTime,_id}=props.orderDetails
    return (
        <Col className='orderCard col-11'>
            <Row className='align-items-center'>
                <Col style={{textAlign:'start',padding:'0 .5rem',margin:'0'}} className='col-12 d-block d-md-flex d-lg-flex justify-content-between pt-2'>
                    <p>Order <span style={{color:'blue',cursor:'pointer'}}>#{_id}</span></p>
                    <p>Placed on {orderTime}</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={7} className='orderCardTitle'>
                    <img src={imgURL} alt="product Image" />
                    <h5>{productName}</h5>
                </Col>
                <Col className='orderStatus' xs={6} sm={3} md={3} lg={3}>
                    <Button disabled variant='secondary' >Processing</Button>
                </Col>
                <Col xs={6} sm={3} md={3} lg={2}>
                    <h4>${price}</h4>
                </Col>
            </Row>
        </Col>
    );
};

export default OrderProduct;