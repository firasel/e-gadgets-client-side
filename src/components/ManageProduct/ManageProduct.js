import React, { useEffect, useState } from 'react';
import { Col, Navbar, Row, Spinner } from 'react-bootstrap';
import ManageProductItem from '../ManageProductItem/ManageProductItem';
import './ManageProduct.css';

const ManageProduct = () => {
    const [products,setProducts]=useState([]);
    const [loadProduct,setLoadProduct]=useState(false)
    useEffect(()=>{
        setLoadProduct(true)
        fetch('https://egadgets.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setLoadProduct(false)
        })
    },[])


    return (
        <div className='manageContainer pb-5'>
            <Navbar bg="light" variant="light">
                <Navbar.Brand className='manageTitle'>Manage Product</Navbar.Brand>
            </Navbar>
            <div className='container formDesign'>
                <Row className='productItemStyle itemTitle'>
                    <Col xs={12} md={5} lg={5}>Product Name</Col>
                    <Col xs={4} md={3} lg={3}>Weight</Col>
                    <Col xs={4} md={2} lg={2}>Price</Col>
                    <Col xs={4} md={2} lg={2}>Action</Col>
                </Row>
                {
                    loadProduct && 
                    <div className='text-center mt-1'>
                        <Spinner animation="border" variant="primary" />
                    </div>
                }
                {
                    products.map(product=><ManageProductItem key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;