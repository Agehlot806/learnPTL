import React from 'react'
import { Container } from 'react-bootstrap'
import strings from '../../localzation'
import Button from '../../components/Button';

function Hometutorbanner() {
    return (
        <>
            <section className='section-padding '>
                <div className='Becomeatutor-Homebg'>
                    <Container fluid>
                        <div className='home-tutor-banner'>
                            <div className='text-center main-heading'>
                                <h1>{strings.Becomeatutor}</h1>
                                <p>Earn money sharing your expert knowledge with students. Sign up to start <br /> tutoring  online with LearnPTL.</p>
                                <Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.Becomeatutor} icon="fa fa-long-arrow-right" iconPosition="right" />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Hometutorbanner
