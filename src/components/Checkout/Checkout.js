import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Checkout.css';

const Checkout = () => {
    const {id}=useParams();
    const history=useHistory();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const {email}=loggedInUser
    const [product,setProduct]=useState({});
    const {name,price,imgURL}=product;
    useEffect(()=>{
        fetch(`https://egadgets.herokuapp.com/product/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    
    const handleCheckOut=()=>{
        const date=new Date().toLocaleString();
        const orderData={userEmail:email,productName:name,price,imgURL,orderTime:date};
        
        fetch('https://egadgets.herokuapp.com/orderproduct',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(orderData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                history.replace('/')
            }
        })
    }

    
    return (
        <>
            <Header />
            <div className="container mt-5 mb-4">
                <h3 className="mb-3">Checkout</h3>
                <div className='checkoutBox'>
                    <Row className='itemDesign bottomBorder'>
                        <Col xs={5} md={5} lg={7}>Description</Col>
                        <Col xs={4} md={4} lg={3}>Quantity</Col>
                        <Col xs={3} md={3} lg={2}>Price</Col>
                    </Row>
                    <Row className='itemDesign'>
                        <Col xs={5} md={5} lg={7}>{name}</Col>
                        <Col xs={4} md={4} lg={3}>1</Col>
                        <Col xs={3} md={3} lg={2}>{price}</Col>
                    </Row>
                    <Row className='itemDesign topBorder'>
                        <Col xs={9} lg={10}>total</Col>
                        <Col xs={3} lg={2}>{price}</Col>
                    </Row>
                </div>
                <div className='d-flex justify-content-end'>
                    <Button onClick={handleCheckOut} className='mt-3 ml-auto' variant='success'>CheckOut</Button>
                </div>
            </div>
        </>
    );
};

export default Checkout;