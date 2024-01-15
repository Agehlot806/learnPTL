import React from 'react'
import '../Contact/contact.css'
import Button from '../../components/Button';
import Header from '../../directives/Header/header'
import Footer from '../../directives/Footer/footer'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import strings from '../../localzation'

function Contact() {
    return (
        <>
            <Header />
            <div className='gradient-bg'>
                <div className='overlay-bg'>
                    <div className='all-bg'>
                        <h1>Contact Us</h1>
                        <Link to='/'>Home</Link> <span>/ Contact Us</span>
                    </div>
                </div>
            </div>

            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={5} md={6} className="contact-page-left-side">
                            <div>
                                <h5>Get in Touch</h5>
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src="https://lmszai.zainikthemes.com/frontend/assets/img/icons-svg/contact-icon-1.png" alt="feature" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <p>Address</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 ">
                                        <img src="https://lmszai.zainikthemes.com/frontend/assets/img/icons-svg/contact-icon-2.png" alt="feature" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 ">
                                        <p className="mb-0">info@gmail.com</p>
                                        <p>info@gmail.com</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 ">
                                        <img src="https://lmszai.zainikthemes.com/frontend/assets/img/icons-svg/contact-icon-3.png" alt="feature" />
                                    </div>
                                    <div className="flex-grow-1 ms-3 ">
                                        <p className="mb-0">000-0000-00000</p>
                                        <p>000-0000-00000</p>
                                    </div>
                                </div>
                                <p className="mt-3">Strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal about the human. It might take 6 -12 hour to replay</p>
                            </div>
                        </Col>
                        <Col lg={7} md={6} className="contact-page-right">
                            <div >
                                <h5>Send Us a Message</h5>
                                <form>
                                    <Row>
                                        <Col md={6} className="mb-3">
                                            <input type="text" className="form-control" placeholder="Your name*" />
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <input type="email" className="form-control" placeholder="Your Email*" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} className="mb-3">
                                            <select className="form-control">
                                                <option value>Select an Issue</option>
                                                <option value={1}>Development</option>
                                                <option value={2}>Web</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <textarea className="form-control message" rows={3} data-gramm="false" wt-ignore-input="true" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <Button className="theme-button1 mt-1 w-100" hoverColor="theme-button1" label={strings.submitbtn} />
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Contact
