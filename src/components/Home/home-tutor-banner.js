import React from "react";
import { Container } from "react-bootstrap";
import strings from "../../localzation";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

function Hometutorbanner() {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/become-a-tutor`);
  };
  return (
    <>
      <section className="section-padding ">
        <div className="Becomeatutor-Homebg">
          <Container fluid>
            <div className="home-tutor-banner">
              <div className="text-center main-heading">
                <h1>{strings.Becomeatutor}</h1>
                <p>
                  Earn money sharing your expert knowledge with students. Sign
                  up to start <br /> tutoring online with LearnPTL.
                </p>
                {/* <Link to="become-a-tutor"> */}
                <Button
                  className="theme-button1 mt-1"
                  hoverColor="theme-button1"
                  label={strings.Becomeatutor}
                  icon="fa fa-long-arrow-right"
                  iconPosition="right"
                  onClick={() => handleNavigate(1)}
                />
                {/* </Link> */}
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Hometutorbanner;
