import React, { useEffect, useState } from 'react'
import '../Login/login.css'
import { Col, Container, Row, Form } from 'react-bootstrap'
import Logo from '../../assets/images/logo.png';
import LoginImg from '../../assets/images/img/home.png';
import strings from "../../localzation";
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/action/actionCreators';
import { toast } from 'react-toastify';


function Login() {
    const auth = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    console.log("user", user)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [userLoginData, setuserLoginData] = useState({
        email: '',
        password: ''
    })
    const handleLogin = () => {
        if (userLoginData.email === '') {
            toast.error(user.message)
        } else {
            console.log('hh')
            const user = {
                email: userLoginData.email,
                password: userLoginData.password,
            };

            dispatch(userLogin(user));
        }
    };

    useEffect(() => {
        if (user?.success) {
          toast.success(user.message); 
        } else if (user?.success === false) {
          toast.error(user.message); 
        }
      }, [user]);

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
                                    <h5>{strings.signinbtn}</h5>
                                    <p>New User ? <Link to='/sign-up'>Create an Account</Link></p>

                                    <Form>
                                        <Form.Group className="mb-4">
                                            <Form.Label>{strings.Emailaddress}</Form.Label>
                                            <Form.Control type="email" placeholder="Enter Your Mail" onChange={(e) => {
                                                setuserLoginData({
                                                    ...userLoginData,
                                                    email: e.target.value
                                                })
                                            }} />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <Form.Label>{strings.Password}</Form.Label>
                                            <div className="password-input">
                                                <Form.Control
                                                    type={showPassword ? 'text' : 'password'}
                                                    placeholder="Enter Your Password"
                                                    onChange={(e) => {
                                                        setuserLoginData({
                                                            ...userLoginData,
                                                            password: e.target.value
                                                        })
                                                    }}
                                                />
                                                <i
                                                    className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                                                    onClick={togglePasswordVisibility}
                                                />
                                            </div>
                                        </Form.Group>
                                        <div><Link to='/forgot-password'>Forgot Password</Link></div>
                                        <Button className="theme-button1 w-100 mt-4" hoverColor="theme-button1" label={strings.signinbtn} onClick={() => handleLogin()} />
                                        <Button className="red-button w-100 mt-4" hoverColor="red-button" label={strings.SigninwithGooglebtn} />
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

export default Login
