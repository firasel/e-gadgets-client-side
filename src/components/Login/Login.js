import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";
import { UserContext } from '../../App';
import Header from "../Header/Header";
import firebaseConfig from "./firebase.config";
import './Login.css';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();
}

const Login = () => {
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleSignIn=()=>{
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            const {displayName,email} = result.user;
            const userData={name:displayName,email}
            setLoggedInUser(userData)
            history.replace(from);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Error: ',errorCode,errorMessage)
        });
    }

    return (
        <>
            <Header />
            <div className='loginForm'>
                <Form className='mt-4'>
                    <Form.Group className='inputDesign'>
                        <Form.Control type="email" placeholder="Enter Your Email" />
                    </Form.Group>
    
                    <Form.Group className='inputDesign'>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control onClick={()=>alert('Login feature is not available ,please log in with google Sign In method')} className='loginBtn' type="submit" value='Login' />
                    </Form.Group>
                </Form>
                <div className="orStyle" >
                    <span>Or</span>
                </div>
                <div className='otherSignInBtn'>
                    <Button onClick={handleGoogleSignIn} variant="primary">
                        <Row style={{width:'100%'}}>
                            <Col sm={12} md={2} lg={2}>
                                <FontAwesomeIcon className='iconStyle' style={{color:"rgb(216 159 0)",fontSize:'22px'}} icon={faGoogle} />
                            </Col>
                            <Col className="text-center iconDesign" style={{overFlow:'hidden'}} sm={0} md={10} lg={10}>
                                Continue With Google
                            </Col>
                        </Row>  
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Login;