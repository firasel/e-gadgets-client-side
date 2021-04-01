import React, { useContext, useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import OrderProduct from '../OrderProduct/OrderProduct';

const Orders = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const {email}=loggedInUser;
    const [orders,setOrders]=useState([]);
    const [loadProduct,setLoadProduct]=useState(false)

    useEffect(()=>{
        setLoadProduct(true)
        fetch(`https://egadgets.herokuapp.com/orders/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setOrders(data.reverse())
            setLoadProduct(false)
        })
    },[])

    return (
        <>
            <Header />
            <div className='container mt-3 pb-4'>
                <h3>My Orders</h3>
                {
                    loadProduct && 
                    <div className='text-center mt-5'>
                        <Spinner animation="border" variant="primary" />
                    </div>
                }
                <Row>
                    {
                        orders.map(order=><OrderProduct key={order._id} orderDetails={order}/>)
                    }
                </Row>
            </div>
        </>
    );
};

export default Orders;