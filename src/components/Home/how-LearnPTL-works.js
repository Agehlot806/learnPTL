import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Bassel1 from '../../assets/images/img/Bassel-1.avif'
import Bassel2 from '../../assets/images/img/Bassel-2.avif'
import Bassel3 from '../../assets/images/img/Bassel-3.avif'

function HowLearnPTLworks() {
    return (
        <section className='section-padding'>
            <Container>
                <div className='text-center main-heading'>
                    <h1>How Learn PTL works:</h1>
                </div>
                <Row className='justify-content-center'>
                    <Col lg={4} sm={6} className='mb-4'>
                        <div className='LearnPTL-works'>
                            <img src={Bassel1} />
                            <h3>Find your tutor.</h3>
                            <p>We’ll connect you with a tutor who will motivate, challenge, and inspire you.</p>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='mb-4'>
                        <div className='LearnPTL-works'>
                            <img src={Bassel2} />
                            <h3>Start learning.</h3>
                            <p>Your tutor will guide the way through your first lesson and help you plan your next steps.</p>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='mb-4'>
                        <div className='LearnPTL-works'>
                            <img src={Bassel3} />
                            <h3>Speak. Read. Write. Repeat.</h3>
                            <p>Choose how many lessons you want to take each week and get ready to reach your goals!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HowLearnPTLworks
