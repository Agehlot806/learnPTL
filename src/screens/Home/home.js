import React from 'react'
import '../Home/home.css';
import Footer from '../../directives/Footer/footer';
import Header from '../../directives/Header/header';
import Tutorsbylanguage from '../../components/Home/tutors-by-language';
import Onetooneconsultation from '../../components/Home/one-to-one-consultation';
import Topratedcourses from '../../components/Home/top-rated-courses';
import HomeTestimonials from '../../components/Home/home-testimonials';
import HomeFAQ from '../../components/Home/home-FAQ';
import HowLearnPTLworks from '../../components/Home/how-LearnPTL-works';
import Banner from '../../components/Home/banner';
import Lessonsbanner from '../../components/Home/lessons-banner';
import Hometutorbanner from '../../components/Home/home-tutor-banner';




function Home() {

    return (
        <>
            {/* Header Area */}
            <Header />

            {/* Home Banner Area */}
            <Banner />

            {/* Tutors by language Area */}
            <Tutorsbylanguage />

            {/* One to one consultation Area*/}
            {/* <Onetooneconsultation /> */}

            {/* Top rated courses Area*/}
            {/* <Topratedcourses /> */}

            {/* Testimonials Area */}
            <HomeTestimonials />

            {/* How LearnPTL works Area*/}
            <HowLearnPTLworks />

            {/* Lessons banner Area */}
            <Lessonsbanner />

            {/* Home tutor banner Area */}
            <Hometutorbanner />

            {/* FAQ Area */}
            <HomeFAQ />

            {/* Footer Area */}
            <Footer />

        </>
    )
}

export default Home