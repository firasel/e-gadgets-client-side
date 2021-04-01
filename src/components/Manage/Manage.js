import { faHome, faPencilAlt, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link, Route, Switch, useHistory
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Manage.css';

const Manage = () => {
    const history=useHistory();

    return (
        <Router>
        <Row className='mr-0'>
            <Col xs={12} sm={4} md={3} lg={2}  className='sideBar'>
                <div className='sideBarContent'>
                   <div className='mt-4'>
                       <h4 style={{cursor:'pointer'}} className='sidebarTitle' onClick={()=>history.push('/')}>E Gadgets</h4>
                   </div>
                   <div className='mt-4 mb-3 menuItem'>
                        <Button className='sidebarBtn' variant='none' onClick={()=>history.push('/')}> <FontAwesomeIcon icon={faHome}/> Home</Button>
                        <Button className='sidebarBtn' variant='none' as={Link} to='/manage/manageProduct'> <FontAwesomeIcon icon={faThLarge}/> Manage Product</Button>
                        <Button className='sidebarBtn' variant='none' as={Link} to='/manage/addProduct'> <FontAwesomeIcon icon={faPlus}/> Add Product</Button>
                        <Button className='sidebarBtn' variant='none' as={Link} to='/manage/editProduct'> <FontAwesomeIcon icon={faPencilAlt}/> Edit Product</Button>
                   </div>
                </div>
            </Col>
            
            <Col xs={12} sm={8} md={9} lg={10} className='m-0 p-0'>
                <Switch>
                    <Route path='/manage/addProduct'>
                        <AddProduct />
                    </Route>
                    <Route path='/manage/manageProduct'>
                        <ManageProduct />
                    </Route>
                    <Route path='/manage/editProduct'>
                        <EditProduct />
                    </Route>
                    <Route path='/manage'>
                        <ManageProduct />
                    </Route>
                </Switch>
            </Col>
        </Row>
        </Router>
    );
};

export default Manage;