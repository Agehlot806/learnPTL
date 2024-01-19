import React, { useState } from 'react'
import '../Login/login.css'
import { Col, Container, Row, Form } from 'react-bootstrap'
import Logo from '../../assets/images/logo.png';
import LoginImg from '../../assets/images/img/home.png';
import strings from "../../localzation";
import { Link } from 'react-router-dom';
import Button from '../../components/Button';


function Forgotpassword() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className='login-area'>
                <Container fluid className='p-0'>
                    <Row>
                        <Col lg={6}>
                            <div className='full-screen'>
                                <div className='all-overlay-bg'>
                                    <div className='logo-left'>
                                        <img src={Logo} />
                                        <p>Discover world best online courses here. 24k online course is waiting for you</p>
                                    </div>
                                    <div className='loginImg'><img src={LoginImg} /></div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className='align-self-center'>
                            <div className='section-padding'>
                                <div className="sign-content">
                                    <h5 className='mb-5'>Forgot your password?</h5>
                                    <Form>
                                        <Form.Group className="mb-4">
                                            <Form.Label>{strings.Emailaddress}</Form.Label>
                                            <Form.Control type="email" placeholder="Enter Your Mail" />
                                        </Form.Group>
                                        <Button className="theme-button1 w-100 mt-4" hoverColor="theme-button1" label={strings.submitbtn} />
                                    </Form>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Forgotpassword
