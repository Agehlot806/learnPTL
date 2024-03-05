import React, { useState } from "react";
import Header from "../../../directives/Header/header";
import Footer from "../../../directives/Footer/footer";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../../components/Button";
import TeacherstutorModel from "../../../components/models/teachers-tutor-model";
import Img5 from "../../../assets/images/img/img5.jpg";
import Img6 from "../../../assets/images/img/img6.jpg";
import Img7 from "../../../assets/images/img/img7.jpg";
import SendMessage from "../../../components/models/send-message";
import BookscheduleSlot from "../../../components/models/Book-scheduleSlot";

function Wishlist() {
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const [sendMessagesadd, setsendMessagesadd] = React.useState(false);
  const [bookTrial, setBookTrial] = React.useState(false);

  const allFindTutor = [
    {
      title: "Valentino M.",
      image: Img7,
      Exprience:
        "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino",
    },
    {
      title: "Johnny Depp",
      image: Img5,
      Exprience:
        "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino",
    },
    {
      title: "Johnny Depp",
      image: Img6,
      Exprience:
        "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino",
    },
  ];

  const handleCardHover = () => {
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };
  const renderTutorExprience = (Exprience) => {
    const maxCharacters = 90;

    if (Exprience?.length <= maxCharacters) {
      return <p>{Exprience}</p>;
    }

    const truncatedExprience = Exprience?.slice(0, maxCharacters);

    return (
      <>
        <p>{truncatedExprience}....</p>
      </>
    );
  };
  return (
    <>
      <Header />
      <div className="gradient-bg">
        <div className="overlay-bg">
          <div className="all-bg">
            <h1>Wishlist</h1>
            <Link to="/">Home</Link> <span>/ Wishlist</span>
          </div>
        </div>
      </div>
      <section className="section-padding">
        <Container>
          <div className="main-heading">
            <h1>3 saved English tutors</h1>
          </div>
          <div className="filter-cards">
            <Row>
              {allFindTutor.map((tutor, index) => (
                <Col lg={4} className="mb-4">
                  <div className="course-cards" key={index}>
                    <img src={tutor.image} alt={tutor.title} />
                    <Row>
                      <Col lg={6}>
                        <h4>{tutor.title}</h4>
                      </Col>
                      <Col lg={6}>
                        <div className="playvideo-bg">
                          <Link
                            className="play-video"
                            onClick={() => setModalShow(true)}
                            onMouseEnter={handleCardHover}
                          >
                            <i className="fa fa-play" /> Demo Video
                          </Link>
                        </div>
                      </Col>
                    </Row>
                    <p>{renderTutorExprience(tutor.Exprience)}</p>
                    <div>
                      {[...Array(5)].map((_, i) => (
                        <a key={i}>
                          <i
                            className="fa fa-star"
                            style={{ color: "#ffc014", marginLeft: "4px" }}
                          />
                        </a>
                      ))}
                    </div>
                    <div className="text-center">
                      <Button
                        className="theme-button1 mt-1"
                        hoverColor="theme-button1"
                        label="Book Trial Lesson"
                        onClick={() => setBookTrial(true)}
                      />
                      <BookscheduleSlot
                        show={bookTrial}
                        onHide={() => setBookTrial(false)}
                      />
                      <Button
                        className="theme-button1 mt-1"
                        hoverColor="theme-button1"
                        label="Send Message"
                        onClick={() => setsendMessagesadd(true)}
                      />
                      <SendMessage
                        show={sendMessagesadd}
                        onHide={() => setsendMessagesadd(false)}
                      />
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <TeacherstutorModel
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Wishlist;
