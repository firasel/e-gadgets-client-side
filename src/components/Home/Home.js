import React, { useEffect, useState } from 'react';
import { Button, Col, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Home = () => {
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
        <>
            <Header />
            <div style={{background:'#dddddda8'}}>
                <Row className="container m-auto g-2">
                    <Col className="col-12">
                        <Row>
                            <Col xs={10} sm={8} md={6} lg={4} className='m-auto'>
                            <InputGroup className=" mt-5 mb-4">
                                <FormControl placeholder='Search Product'/>
                                <InputGroup.Prepend>
                                <Button variant="success">Search</Button>
                                </InputGroup.Prepend>
                            </InputGroup>
                            </Col>
                            {
                                loadProduct &&
                                <Col className='col-12 text-center mt-2 mb-4'>
                                    <Spinner animation="border" variant="primary" />
                                </Col>
                            }
                        </Row>
                    </Col>
                    {
                        products.map(product => <Product key={product._id} product={product}/>)
                    }
                </Row>
            </div>
        </>
    );
};

export default Home;