import React, { useState } from 'react';
import { Button, Col, Form, Navbar, Row, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL,setImageURL]=useState(null);
    const [uploadSuccess,setUploadSuccess]=useState(false);

    const onSubmit = data => {
        const {name,weight,price}=data
        const productData={name,weight,price,imgURL:imageURL};

        fetch('https://egadgets.herokuapp.com/addproduct',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(productData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data)
                alert('Product Saved in Database')
        })
    };

    const handleImageUpload=(event)=>{
        setUploadSuccess(true)
        const imageData=new FormData();
        imageData.set('key','a52d1dcbb5d9055fd1a000e42d4f0578');
        imageData.append('image',event.target.files[0]);
        
        fetch('https://api.imgbb.com/1/upload',{
            method:'POST',
            body:imageData
        })
        .then((res) =>res.json())
        .then(data=>{
            setImageURL(data.data.display_url)
            setUploadSuccess(false);
        })
        .catch(error=>console.log('error: ',error));
    }

    return (
        <div className='manageContainer'>
            <Navbar bg="light" variant="light">
                <Navbar.Brand className='manageTitle'>Add Product</Navbar.Brand>
            </Navbar>
            <div className='container formDesign'>
                <Form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
                <Row className='g-1'>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter Product Name" ref={register({required: true})} />
                            {errors.name && <span className='text-danger'>Product name is required</span>}
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Weight</Form.Label>
                            <Form.Control name='weight' type="number" placeholder="Enter Product Weight"  ref={register({required: true})}/>
                            {errors.weight && <span className='text-danger'>Product Weight is required</span>}
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Add Price</Form.Label>
                            <Form.Control name='price' type="number" placeholder="Enter Product Price"  ref={register({required: true})}/>
                            {errors.price && <span className='text-danger'>Product Price is required</span>}
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Add Photo</Form.Label>
                            <div className='d-flex justify-content-between '>
                                <input onChange={handleImageUpload} type="file" />
                                {
                                    uploadSuccess && <Spinner animation="border" variant="primary" />
                                }
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <div className='d-flex justify-content-end'>
                    <Button type='submit' className='mt-3 ml-auto' variant='success'>Save</Button>
                </div>
                </Form>
            </div>
        </div>
    );
};

export default AddProduct;