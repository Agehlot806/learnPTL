import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import HomeIMG from "../../assets/images/img/home.png";
import Feature1 from "../../assets/images/icons/feature-icon1.png";
import Feature2 from "../../assets/images/icons/feature-icon2.png";
import Feature3 from "../../assets/images/icons/feature-icon3.png";
import {
  fetchtutorcount,
  fetchReview,
} from "../../redux/action/actionCreators";
import { useDispatch, useSelector } from "react-redux";

function Banner() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/get-started/${1}`);
  };
  const { tutorsshowcount } = useSelector((state) => state?.tutorsshowcount);
  const { slots } = useSelector((state) => state?.reviews);
  console.log("better: ", slots);
  const [reviewFiveCount, setreviewFiveCount] = useState(0);
  const [subjectsTaughtCount, setSubjectsTaughtCount] = useState(0);
  useEffect(() => {
    dispatch(fetchtutorcount(tutorsshowcount));
    dispatch(fetchReview(slots));

    // Calculate the length of tutorsshowcount with a Subjects taught
    const tutorcount = tutorsshowcount.filter((item) => item.tutors).length;
    setSubjectsTaughtCount(tutorcount);
    // Calculate the length of products with a review of 5
    const count = slots.filter((item) => item.reviews === 5).length;
    setreviewFiveCount(count);
  }, [dispatch]);
  return (
    <>
      <div className="gradient-bg">
        <div className="overlay-bg">
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
                    <h1 className="home-heading home-heading-last-word">
                      Starts Here.
                    </h1>
                  </div>
                  <p>
                    While the lovely valley teems with vapour around me, and the
                    meridian sun strikes the upper{" "}
                  </p>
                  <div className="home-btns">
                    {/* <Link to="/find-tutor"> */}
                    <Button
                      className="theme-button1 mt-1"
                      hoverColor="theme-button1"
                      label="Browse Course"
                      icon="fa fa-long-arrow-right"
                      iconPosition="right"
                      onClick={() => handleNavigate(1)}
                      style={{ cursor: "pointer" }}
                    />
                    {/* </Link> */}
                  </div>
                </div>
              </Col>
              <Col lg={7} sm={6}>
                <div className="home-img">
                  <img src={HomeIMG} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <section className="home-pointsArea">
        <Container>
          <Row className="justify-content-center card-homePosition">
            <Col lg={4} sm={6} className="mb-4">
              <div className="home-points">
                <div>
                  <img src={Feature1} />
                </div>
                <div className="home-pointsContent">
                  <h4>32,000+</h4>
                  <p>Experienced tutors</p>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} className="mb-4">
              <div className="home-points">
                <div>
                  <img src={Feature2} />
                </div>
                <div className="home-pointsContent">
                  <h4>{reviewFiveCount}+</h4>
                  <p>5-star tutor reviews</p>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} className="mb-4">
              <div className="home-points">
                <div>
                  <img src={Feature3} />
                </div>
                <div className="home-pointsContent">
                  <h4>{subjectsTaughtCount}+</h4>
                  <p>Subjects taught</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
