import React from 'react';
import { Navbar } from 'react-bootstrap';
import './EditProduct.css';

const EditProduct = () => {
    return (
        <div className='manageContainer'>
            <Navbar bg="light" variant="light">
                <Navbar.Brand className='manageTitle'>Edit Product</Navbar.Brand>
            </Navbar>
            <div className='editContainer'>
                <h4>Edit Feature is Coming Soon...</h4>
            </div>
        </div>
    );
};

export default EditProduct;