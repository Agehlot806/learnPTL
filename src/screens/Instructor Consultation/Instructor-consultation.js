import React from 'react'
import '../Find Tutor/find-tutor.css'
import Button from '../../components/Button';
import Header from '../../directives/Header/header'
import { Link } from 'react-router-dom'
import { Col, Container, Row, Accordion } from 'react-bootstrap'
import IMG1 from '../../assets/images/img/img1.jpg';
import IMG2 from '../../assets/images/img/img2.jpg';
import IMG3 from '../../assets/images/img/img3.jpg';
import IMG4 from '../../assets/images/img/img4.jpg';
import Membership1 from '../../assets/images/icons/membership_1.png';
import Membership2 from '../../assets/images/icons/membership_2.png';
import Membership3 from '../../assets/images/icons/membership_3.png';
import Membership4 from '../../assets/images/icons/membership_4.png';
import Membership5 from '../../assets/images/icons/membership_5.png';
import Footer from '../../directives/Footer/footer'
import strings from '../../localzation';
import Allfilter from '../../components/Filter/all-filter';

function Instructorconsultation() {
    const TypeOption = [
        { optionName: "In-person" },
        { optionName: "Online" },
    ];

    return (
        <>
            <Header />
            <div className='gradient-bg'>
                <div className='overlay-bg'>
                    <div className='all-bg'>
                        <h1>Instructor Consultation</h1>
                        <Link to='/'>Home</Link> <span>/ Instructor Consultation</span>
                    </div>
                </div>
            </div>
            <section className='section-padding'>
                <Container>
                    <Allfilter
                        TypeOption={TypeOption}
                        SearchInstructorName={"Search Instructor Name"}
                        Type={"Type"}
                        HourlyRate={"HourlyRate"}
                        InstructorRating={"Rating"}
                    />
                </Container>
            </section>
            <section className='section-padding'>
                <Container>
                    <div className='filter-cards'>
                        <Row>
                            <Col lg={4} sm={4} className='mb-4'>
                                <div className='Tutors-card'>
                                    <img src={IMG3} />
                                    <h3>Darrell Edwards</h3>
                                    <p>English tutors|| Author Level 2</p>
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
                            <Col lg={4} sm={4} className='mb-4'>
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
                            <Col lg={4} sm={4} className='mb-4'>
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
                            <Col lg={4} sm={4} className='mb-4'>
                                <div className='Tutors-card'>
                                    <img src={IMG2} />
                                    <h3>James Bond</h3>
                                    <p>Italian tutors ||Author Level 2</p>
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
                    </div>
                </Container>
            </section >

            <Footer />
        </>
    )
}

export default Instructorconsultation
