import React, { useEffect, useState } from 'react'
import '../Login/login.css'
import { Col, Container, Row, Form } from 'react-bootstrap'
import Logo from '../../assets/images/logo.png';
import LoginImg from '../../assets/images/img/home.png';
import strings from "../../localzation";
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../redux/action/actionCreators';
import { toast } from 'react-toastify';


function Signup() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.auth)
    console.log("users", users)
    const [showPassword, setShowPassword] = useState(false);
    const [userRegisterData, setuserRegisterData] = useState({
        firstname: '',
        lastname: '',
        code: '',
        mobileNumber: '',
        email: '',
        password: '',
        profileImage: '',
        profileImageFile: '',
        role: ''

    })

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleRegister = () => {
        if (userRegisterData.email === '') {
            toast.error(users.message);
        } else {
            const formData = new FormData();
            formData.append('firstname', userRegisterData.firstname);
            formData.append('lastname', userRegisterData.lastname);
            formData.append('code', userRegisterData.code);
            formData.append('mobileNumber', userRegisterData.mobileNumber);
            formData.append('email', userRegisterData.email);
            formData.append('password', userRegisterData.password);
            formData.append('role', userRegisterData.role);
            formData.append('profileImage', userRegisterData.profileImageFile);
            dispatch(userRegister(formData));
        }
  
    };

    useEffect(() => {
        if (users?.success) {
            toast.success(users.message);
        } else if (users?.success === false) {
            toast.error(users.message);
        }
    }, [users]);

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
                                        <Row className="mb-4">
                                            <Col>
                                                <Form.Label>{strings.FirstName}</Form.Label>
                                                <Form.Control type='text' placeholder={strings.FirstName}
                                                    onChange={(e) => {
                                                        setuserRegisterData({
                                                            ...userRegisterData,
                                                            firstname: e.target.value
                                                        })
                                                    }} />
                                            </Col>
                                            <Col>
                                                <Form.Label>{strings.LastName}</Form.Label>
                                                <Form.Control type='text' placeholder={strings.LastName}
                                                    onChange={(e) => {
                                                        setuserRegisterData({
                                                            ...userRegisterData,
                                                            lastname: e.target.value
                                                        })
                                                    }} />
                                            </Col>
                                        </Row>

                                        <Row className="mb-4">
                                            <Col>
                                                <Form.Label>{strings.Code}</Form.Label>
                                                {/* <Form.Select aria-label="Default select example">
                                                    <option>Select {strings.Code}</option>
                                                    <option value="1">BD(+88)</option>
                                                    <option value="2">USA(+1)</option>
                                                    <option value="3">UK(+44)</option>
                                                </Form.Select> */}
                                                <Form.Control type='text' placeholder={strings.FirstName}
                                                    onChange={(e) => {
                                                        setuserRegisterData({
                                                            ...userRegisterData,
                                                            code: e.target.value
                                                        })
                                                    }} />
                                            </Col>
                                            <Col>
                                                <Form.Label>{strings.PhoneNumber}</Form.Label>
                                                <Form.Control type='number' placeholder="Type Your mobile number"
                                                    onChange={(e) => {
                                                        setuserRegisterData({
                                                            ...userRegisterData,
                                                            mobileNumber: e.target.value
                                                        })
                                                    }} />
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col>
                                                <Form.Label>{strings.Emailaddress}</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Your Mail" onChange={(e) => {
                                                    setuserRegisterData({
                                                        ...userRegisterData,
                                                        email: e.target.value
                                                    })
                                                }} />
                                            </Col>
                                            <Col>
                                                <Form.Label>{strings.Password}</Form.Label>
                                                <div className="password-input">
                                                    <Form.Control
                                                        type={showPassword ? 'text' : 'password'}
                                                        placeholder="Enter Your Password"
                                                        onChange={(e) => {
                                                            setuserRegisterData({
                                                                ...userRegisterData,
                                                                password: e.target.value
                                                            })
                                                        }}
                                                    />
                                                    <i
                                                        className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                                                        onClick={togglePasswordVisibility}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Upload Profile</Form.Label>
                                            <Form.Control
                                                type="file"
                                                onChange={(e) => {
                                                    setuserRegisterData({
                                                        ...userRegisterData,
                                                        profileImage: e.target.files[0].name,
                                                        profileImageFile: e.target.files[0]
                                                    });
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Role</Form.Label>
                                            <Form.Control type="text" placeholder='Enter Your Role'
                                                onChange={(e) => {
                                                    setuserRegisterData({
                                                        ...userRegisterData,
                                                        role: e.target.value
                                                    })
                                                }} />
                                        </Form.Group>
                                        <Button className="theme-button1 w-100 mt-4" hoverColor="theme-button1" label={strings.signupbtn} onClick={() => handleRegister()} />
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
