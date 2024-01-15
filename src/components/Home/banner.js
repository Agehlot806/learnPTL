import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import HomeIMG from '../../assets/images/img/home.png';
import Feature1 from '../../assets/images/icons/feature-icon1.png';
import Feature2 from '../../assets/images/icons/feature-icon2.png';
import Feature3 from '../../assets/images/icons/feature-icon3.png';

function Banner() {
    return (
        <>
            <div className='gradient-bg'>
                <div className='overlay-bg'>
                    <Container>
                        <Row>
                            <Col lg={5} sm={6}>
                                <div className="home-content">
                                    <h6 className="come-for-learn-text">
                                        <span>Come</span>
                                        <span>for</span>
                                        <span>Learn</span>
                                    </h6>
                                    <div className="text">
                                        <h1 className="home-heading">A Better</h1>
                                        <h1 className="home-heading">
                                            <span className="main-middle-text">Learning</span>
                                        </h1>
                                        <h1 className="home-heading home-heading-last-word">Starts Here.</h1>
                                    </div>
                                    <p>While the lovely valley teems with vapour around me, and the meridian sun strikes the upper </p>
                                    <div className="home-btns">
                                        <Link to="/find-tutor">
                                            <Button className="theme-button1 mt-1" hoverColor="theme-button1" label="Browse Course" icon="fa fa-long-arrow-right" iconPosition="right" />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7} sm={6}>
                                <div className='home-img'>
                                    <img src={HomeIMG} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <section className='home-pointsArea'>
                <Container>
                    <Row className='justify-content-center card-homePosition'>
                        <Col lg={4} sm={6} className='mb-4'>
                            <div className='home-points'>
                                <div>
                                    <img src={Feature1} />
                                </div>
                                <div className='home-pointsContent'>
                                    <h4>32,000+</h4>
                                    <p>Experienced tutors</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='mb-4'>
                            <div className='home-points'>
                                <div>
                                    <img src={Feature2} />
                                </div>
                                <div className='home-pointsContent'>
                                    <h4>300,000+</h4>
                                    <p>5-star tutor reviews</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='mb-4'>
                            <div className='home-points'>
                                <div>
                                    <img src={Feature3} />
                                </div>
                                <div className='home-pointsContent'>
                                    <h4>120+</h4>
                                    <p>Subjects taught</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner
