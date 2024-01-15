import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import strings from '../../localzation';
import Button from '../../components/Button';
import TeamMember from '../../assets/images/icons/team-members.png';
import IMG1 from '../../assets/images/img/img1.jpg';
import IMG2 from '../../assets/images/img/img2.jpg';
import IMG3 from '../../assets/images/img/img3.jpg';
import IMG4 from '../../assets/images/img/img4.jpg';
import Membership1 from '../../assets/images/icons/membership_1.png';
import Membership2 from '../../assets/images/icons/membership_2.png';
import Membership3 from '../../assets/images/icons/membership_3.png';
import Membership4 from '../../assets/images/icons/membership_4.png';
import Membership5 from '../../assets/images/icons/membership_5.png';

function Onetooneconsultation() {
    return (
        <section className='section-padding'>
            <Container>
                <Row>
                    <Col lg={8} sm={9} xs={7}>
                        <div className='d-flex main-heading'>
                            <div>
                                <img className='teamimg' src={TeamMember} />
                            </div>
                            <div>
                                <h1>One to one consultation</h1>
                                <p>Consult with your favorite consultant!</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={3} xs={5}>
                        <div className='bolderrightText'>
                            <Link to='/instructor-consultation'>
                                <Button className='bolderBtn' label={strings.ViewAll} icon="fa fa-long-arrow-right" iconPosition="right" />
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} sm={4} xs={6} className='mb-4'>
                        <div className='Tutors-card'>
                            <img src={IMG3} />
                            <h3>Darrell Edwards</h3>
                            <p>English tutors || Author Level 2</p>
                            <div>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                            </div>
                            <div className='Tutors-membership'>
                                <a><img src={Membership1} /></a>
                                <a><img src={Membership2} /></a>
                                <a><img src={Membership3} /></a>
                                <a><img src={Membership4} /></a>
                                <a><img src={Membership5} /></a>
                            </div>
                            <h6>50/hour</h6>
                            <Link to='/view-profile'>
                                <Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.ViewProfile} />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} sm={4} xs={6} className='mb-4'>
                        <div className='Tutors-card'>
                            <img src={IMG4} />
                            <h3>Jack Nicholson</h3>
                            <p>French tutors  || Author Level 3</p>
                            <div>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                            </div>
                            <div className='Tutors-membership'>
                                <a><img src={Membership1} /></a>
                                <a><img src={Membership2} /></a>
                                <a><img src={Membership3} /></a>
                                <a><img src={Membership4} /></a>
                                <a><img src={Membership5} /></a>
                            </div>
                            <h6>99/Hour</h6>
                            <Link to='/view-profile'>
                                <Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.ViewProfile} />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} sm={4} xs={6} className='mb-4'>
                        <div className='Tutors-card'>
                            <img src={IMG1} />
                            <h3>Johnny Depp</h3>
                            <p>German tutors  ||Author Level 3</p>
                            <div>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                            </div>
                            <div className='Tutors-membership'>
                                <a><img src={Membership1} /></a>
                                <a><img src={Membership2} /></a>
                                <a><img src={Membership3} /></a>
                                <a><img src={Membership4} /></a>
                                <a><img src={Membership5} /></a>
                            </div>
                            <h6>50/hour</h6>
                            <Link to='/view-profile'>
                                <Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.ViewProfile} />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} sm={4} xs={6} className='mb-4'>
                        <div className='Tutors-card'>
                            <img src={IMG2} />
                            <h3>James Bond</h3>
                            <p>Italian tutors || Author Level 2</p>
                            <div>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                            </div>
                            <div className='Tutors-membership'>
                                <a><img src={Membership1} /></a>
                                <a><img src={Membership2} /></a>
                                <a><img src={Membership3} /></a>
                                <a><img src={Membership4} /></a>
                                <a><img src={Membership5} /></a>
                            </div>
                            <h6>50/hour</h6>
                            <Link to='/view-profile'>
                                <Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.ViewProfile} />
                            </Link>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Onetooneconsultation
