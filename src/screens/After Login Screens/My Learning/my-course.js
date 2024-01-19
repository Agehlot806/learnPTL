import React from 'react'
import Header from '../../../directives/Header/header'
import Footer from '../../../directives/Footer/footer'
import {  Col, Container, Row } from 'react-bootstrap'
import '../My Learning/my-learning.css'
import { Player } from 'video-react';
import video1 from '../../../assets/images/video/video1.mp4';
import Coursecontent from '../../../components/Course Content/course-content'
import CourseIntroduction from '../../../components/Course Content/course-Introduction'


function Mycourse() {
    return (
        <>
            <Header />
            <section className='section-padding'>
                <Container>
                    <div className='text-center main-heading'>
                        <h1>Microservices with Node JS and React</h1>
                        <ul className="course-watch-banner-items">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--carbon me-2" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" data-icon="carbon:video"><path fill="currentColor" d="M21 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v4.06l5.42-3.87A1 1 0 0 1 30 9v14a1 1 0 0 1-1.58.81L23 19.94V24a2 2 0 0 1-2 2M4 8v16h17v-6a1 1 0 0 1 1.58-.81L28 21.06V10.94l-5.42 3.87A1 1 0 0 1 21 14V8Z" /></svg>1
                                Lectures
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--akar-icons me-2" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="akar-icons:book"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 6s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1zm10 0s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1z" /></svg>1
                                sections
                            </li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ant-design me-2" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ant-design:clock-circle-outlined"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372" /><path fill="currentColor" d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2" /></svg>
                                25 sec
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>

            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='course-video'>
                                <Player>
                                    <source src={video1} />
                                </Player>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Coursecontent />
                        </Col>

                    </Row>
                </Container>
            </section>

            <CourseIntroduction />
            <Footer />
        </>
    )
}

export default Mycourse
