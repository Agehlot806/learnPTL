import React from 'react'
import '../Footer/footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png';


function Footer() {
    return (
        <>
                <div className='footer-area'>
                    <Container>
                        <Row>
                            <Col lg={6}>
                            <div className="footer-head">
                                <img src={Logo} />
                                <p>Mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present</p>
                            <a><i className="fa fa-facebook-official" /></a>
                            <a><i className="fa fa-twitter-square" /></a>
                            <a><i className="fa fa-linkedin-square" /></a>
                            <a><i className="fa fa-pinterest-square" /></a>
                            </div>
                            </Col>
                            <Col lg={3} sm={6} xs={6}>
                                <div className="footer-head">
                                    <h4>Company</h4>
                                    <ul>
                                        <li><Link to='/faq'>FQA</Link></li>
                                        <li><Link to='/blog'>Blogs</Link></li>
                                        <li><Link to='/contact'>Contact</Link></li>
                                        <li><Link to='/find-tutor'>Courses</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} sm={6} xs={6}>
                                <div className="footer-head">
                                    <h4>Contact Info </h4>
                                    <ul>
                                        <li><Link><i className="fa fa-map-marker" /> 45/7 dreem street</Link></li>
                                        <li><Link><i className="fa fa-phone"/> (00000000000)</Link></li>
                                        <li><Link><i className="fa fa-envelope-o" /> demo@mail.com</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </>
    )
}

export default Footer
