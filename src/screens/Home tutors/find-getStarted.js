import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import shape6 from "../../assets/images/img/shape6.webp";
import shape4 from "../../assets/images/img/shape4.webp";
import Img3 from "../../assets/images/img/img3.webp";
import Logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpeakShow } from "../../redux/action/actionCreators";

function FindgetStarted() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSpeakShow(speaks));
  }, [dispatch]);
  const { speaks } = useSelector((state) => state.speaks);
  console.log("speakslll: ", speaks);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <section className="section-padding mt-4 ">
        <Container>
          <Row>
            <Col lg={6} sm={6}>
              <div className="iconcoin-mask-bg-wrap iconcoin-mask-bg-wrap-1 mb-4 mb-lg-0">
                <img
                  className="ico-image-sm top_image_bounce"
                  src={shape6}
                  alt="img"
                />
                <img className="ico-shape-image" src={shape4} alt="img" />
                <div className="thumb top_image_bounce">
                  <img src={Img3} alt="img" />
                </div>
              </div>
            </Col>
            <Col lg={6} sm={6}>
              <div className="find-tutors">
                <div className="text-center">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="main-heading">
                  <h1>Find the right tutor for you.</h1>
                  <p>
                    Tell us how you’d like to learn to get a personalized choice
                    of tutors
                  </p>
                </div>
                <Row className="mb-4">
                  <Col lg={7}>
                    <Form.Group>
                      <Form.Label>What do you want to learn?</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        {speaks &&
                          speaks.map((speak) => (
                            <option key={speak.id} value={speak?.speak}>
                              {speak?.speak}
                            </option>
                          ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={5} className="align-self-center mt-4">
                    <Link to="/get-started">
                      <Button
                        onClick={nextStep}
                        className="theme-button1 mt-1"
                        hoverColor="theme-button1"
                        label="Get Started"
                        icon="fa fa-long-arrow-right"
                        iconPosition="right"
                      />
                    </Link>
                  </Col>
                </Row>
                <Link to="">
                  I want to choose from 17,222 Tutors{" "}
                  <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default FindgetStarted;
