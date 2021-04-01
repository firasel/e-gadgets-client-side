import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';

const ManageProductItem = (props) => {
    const {name,price,weight,_id}=props.product
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteBtn=(event)=>{
        fetch(`https://egadgets.herokuapp.com/deleteproduct/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                handleShow()
            }
        })
    }

    return (
       <>
            <Row className='productItemStyle d-flex align-items-center'>
                <Col xs={12} md={5} lg={5}>{name}</Col>
                <Col xs={4} md={3} lg={3}>{weight}gm</Col>
                <Col xs={4} md={2} lg={2}>${price}</Col>
                <Col xs={4} md={2} lg={2} className='d-flex justify-content-around'>
                    <Button className='mr-2' variant='success'>
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button onClick={handleDeleteBtn} variant='danger'>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>SuccessFully Deleted</Modal.Title>
                </Modal.Header>
            </Modal>
       </>
    );
};

export default ManageProductItem;