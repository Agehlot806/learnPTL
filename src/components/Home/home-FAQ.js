import React, { useEffect } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import FAQ from "../../assets/images/img/faq1.gif";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaqs } from "../../redux/action/actionCreators";

function HomeFAQ() {
  const dispatch = useDispatch();
  const { faqs } = useSelector((state) => state.faqs);
  console.log("faqsccccccc: ", faqs);
  useEffect(() => {
    dispatch(fetchFaqs());
  }, [dispatch]);
  return (
    <section className="section-padding">
      <Container>
        <div className="main-heading">
          <h1>Frequently Ask Questions.</h1>
          <p>CHOOSE FROM 5,000 ONLINE VIDEO COURSES WITH NEW ADDITIONS</p>
        </div>
        <Row>
          <Col lg={6} className="align-self-center">
            <div className="faq">
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    1. which I enjoy with my whole heart am alone feel?
                  </Accordion.Header>
                  <Accordion.Body>
                    Ranquil existence, that I neglect my talents. I should be
                    incapable of drawing a single stroke at the present moment;
                    and yet I feel that was a greater artist than now. When,
                    while the lovely valley with vapour around me, and the
                    meridian.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    2. which I enjoy with my whole heart am alone feel?
                  </Accordion.Header>
                  <Accordion.Body>
                    Ranquil existence, that I neglect my talents. I should be
                    incapable of drawing a single stroke at the present moment;
                    and yet I feel that was a greater artist than now. When,
                    while the lovely valley with vapour around me, and the
                    meridian.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    3. which I enjoy with my whole heart am alone feel?
                  </Accordion.Header>
                  <Accordion.Body>
                    Ranquil existence, that I neglect my talents. I should be
                    incapable of drawing a single stroke at the present moment;
                    and yet I feel that was a greater artist than now. When,
                    while the lovely valley with vapour around me, and the
                    meridian.{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    4. Are certificates provided upon course completion on
                    LMSZAI?
                  </Accordion.Header>
                  <Accordion.Body>
                    Upon course completion, LMSZAI provides certificates as
                    tangible proof of your achievement, showcasing your
                    expertise and dedication to continuous learning and skill
                    development.{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    5. How can I enroll in a course on LMSZAI?
                  </Accordion.Header>
                  <Accordion.Body>
                    To enroll in a course on LMSZAI, log in, browse courses,
                    select one, and click "Enroll" or "Join Course."{" "}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col lg={6}>
            <div className="faq-img">
              <img src={FAQ} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeFAQ;
