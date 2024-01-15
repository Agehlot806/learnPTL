import React, { useState } from 'react'
import '../Find Tutor/find-tutor.css'
import Header from '../../directives/Header/header'
import { Link } from 'react-router-dom'
import { Col, Container, Row, Accordion } from 'react-bootstrap'
import Img5 from '../../assets/images/img/img5.jpg'
import Img6 from '../../assets/images/img/img6.jpg'
import Img7 from '../../assets/images/img/img7.jpg'
import Footer from '../../directives/Footer/footer'
import Allfilter from '../../components/Filter/all-filter'
import TeacherstutorModel from '../../components/models/teachers-tutor-model'
import Button from '../../components/Button'
import Getstarted from '../Home tutors/get-started'


function Findtutor() {
    const [modalShow, setModalShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items per page


    const iwanttolearnList = [
        { optionName: "English tutors" },
        { optionName: "Spanish tutors" },
        { optionName: "French tutors" },
        { optionName: "German tutors" },
        { optionName: "Chinese tutors" },
    ];

    const countryOptions = [
        { optionName: "India" },
        { optionName: "United States of America" },
        { optionName: "United Kingdom" },
        { optionName: "Canada" },
        { optionName: "Australia" },
        { optionName: "Afghanistan" },
        { optionName: "Åland Islands" },
        { optionName: "Eritrea" },
        { optionName: "Ghana" },
        { optionName: "Maldives" },
        { optionName: "New Zealand" },
        { optionName: "Sri Lanka" },
    ];

    const alsoSpeaksOptions = [
        { optionName: "Albanian" },
        { optionName: "Hindi" },
        { optionName: "English" },
        { optionName: "Chinese (Mandarin)" },
        { optionName: "Farsi" },
        { optionName: "Italian" },
        { optionName: "Punjabi" },
        { optionName: "Russian" },
        { optionName: "Tamil" },

    ]

    const specialtiesOptions = [
        { optionName: "Business English" },
        { optionName: "English for beginners" },
        { optionName: "English for kids" },
        { optionName: "English for traveling" },
        { optionName: "English Literature" },
        { optionName: "Australian English" },
        { optionName: "English for ADHD students" },
        { optionName: "Ap english language & composition" },

    ]

    const allFindTutor = [
        { title: "Valentino M.", image: Img7, Exprience: "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino" },
        { title: "Johnny Depp", image: Img5, Exprience: "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino" },
        { title: "Johnny Depp", image: Img6, Exprience: "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino" },
        { title: "Johnny Depp", image: Img5, Exprience: "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino" },
        { title: "Johnny Depp", image: Img7, Exprience: "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino" },
        { title: "Johnny Depp", image: Img6, Exprience: "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino" },
        { title: "Johnny Depp", image: Img5, Exprience: "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino" },
    ];



    const handleCardHover = () => {
        setModalShow(true);
    };

    const handleModalClose = () => {
        setModalShow(false);
    };

    const renderTutorExprience = (Exprience) => {
        const maxCharacters = 90; // Number of characters to show initially

        if (Exprience?.length <= maxCharacters) {
            return <p>{Exprience}</p>; // Show the full Exprience if it's short
        }

        const truncatedExprience = Exprience?.slice(0, maxCharacters);

        return (
            <>
                <p>{truncatedExprience}....</p>
            </>
        );
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allFindTutor.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


     
    return (
        <>
            <Header />
            <div className='gradient-bg'>
                <div className='overlay-bg'>
                    <div className='all-bg'>
                        <h1>Find Tutor</h1>
                        <Link>Home</Link> <span>/ Find Tutor</span>
                    </div>
                </div>
            </div>
            <Getstarted />
            <section className='section-padding'>
                <Container>
                    <Allfilter
                        iwanttolearnList={iwanttolearnList}
                        countryOptions={countryOptions}
                        alsoSpeaksOptions={alsoSpeaksOptions}
                        specialtiesOptions={specialtiesOptions}
                        iwanttolearn={"I want to learn"}
                        Price={"Price"}
                        Countryofbirth={"Country of birth"}
                        alsoSpeaks={"Also Speaks"}
                        Specialties={"Specialties"}
                        nativeSpeaker={"Native Speaker"}
                        tutorcategories={"Tutor Categories"}
                    />
                </Container>
            </section>
            <section className='section-padding'>
                <Container>
                    <div className='filter-cards'>
                        <Row>
                            {currentItems.map((tutor, index) => (
                                <Col lg={4} className='mb-4'>
                                    <div className='course-cards' key={index}>
                                        <img src={tutor.image} alt={tutor.title} />
                                        <Row>
                                            <Col lg={6}><h4>{tutor.title}</h4></Col>
                                            <Col lg={6}>
                                                <div className='playvideo-bg'>
                                                    <Link className='play-video' onClick={() => setModalShow(true)} onMouseEnter={handleCardHover}><i className='fa fa-play' /> Demo Video</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                        <p>{renderTutorExprience(tutor.Exprience)}</p>
                                        <div>
                                            {[...Array(5)].map((_, i) => (
                                                <a key={i}><i className="fa fa-star" /></a>
                                            ))}
                                        </div>
                                        <div className='text-center'>
                                            <Button className="theme-button1 mt-1" hoverColor="theme-button1" label="Book Trial Lesson" />
                                            <Button className="theme-button1 mt-1" hoverColor="theme-button1" label="Send Message" />
                                        </div>

                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <TeacherstutorModel show={modalShow} onHide={() => setModalShow(false)} />
                    </div>
                    <div className='pagination-container'>
                    <ul className='pagination'>
                        {Array.from({ length: Math.ceil(allFindTutor.length / itemsPerPage) }).map(
                            (item, index) => (
                                <li key={index} className='page-item'>
                                    <Link
                                        to='#'
                                        className='page-link'
                                        onClick={() => paginate(index + 1)}
                                    >
                                        {index + 1}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                </Container>
                
            </section >

            <Footer />
        </>
    )
}

export default Findtutor