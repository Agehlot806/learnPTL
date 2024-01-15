import React, { useState } from 'react'
import '../Login/login.css'
import {  Col, Container, Row, Form } from 'react-bootstrap'
import Logo from '../../assets/images/logo.png';
import LoginImg from '../../assets/images/img/home.png';
import strings from "../../localzation";
import { Link } from 'react-router-dom';
import Button from '../../components/Button';


function Signup() {

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
                            <div className=''>
                                <div className="sign-content">
                                    <h5>{strings.CreateanAccount}</h5>
                                    <p>{strings.Alreadyhaveanaccount} <Link to="/login">{strings.signinbtn}</Link></p>

                                    <Form>
                                        <Form.Group className="mb-4">
                                            <Form.Label>{strings.Emailaddress}</Form.Label>
                                            <Form.Control type="email" placeholder="Enter Your Mail" />
                                        </Form.Group>
                                        <Row className="mb-4">
                                            <Col>
                                                <Form.Label>{strings.Code}</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option>Select {strings.Code}</option>
                                                    <option value="1">BD(+88)</option>
                                                    <option value="2">USA(+1)</option>
                                                    <option value="3">UK(+44)</option>
                                                </Form.Select>
                                            </Col>
                                            <Col>
                                                <Form.Label>{strings.PhoneNumber}</Form.Label>
                                                <Form.Control type='number' placeholder="Type Your mobile number" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col>
                                                <Form.Label>{strings.FirstName}</Form.Label>
                                                <Form.Control type='text' placeholder={strings.FirstName} />
                                            </Col>
                                            <Col>
                                                <Form.Label>{strings.LastName}</Form.Label>
                                                <Form.Control type='text' placeholder={strings.LastName} />
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-4">
                                            <Form.Label>{strings.Password}</Form.Label>
                                            <div className="password-input">
                                                <Form.Control
                                                    type={showPassword ? 'text' : 'password'}
                                                    placeholder="Enter Your Password"
                                                />
                                                <i
                                                    className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                                                    onClick={togglePasswordVisibility}
                                                />
                                            </div>
                                        </Form.Group>

                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>
                                        <Button className="theme-button1 w-100 mt-4" hoverColor="theme-button1" label={strings.signupbtn} />
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

export default Signup
