import React, { useState } from "react";
import "../Login/login.css";
import { Col, Container, Row, Form } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import LoginImg from "../../assets/images/img/home.png";
import strings from "../../localzation";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function BecomeATutor() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate(`/register-a-tutor`);
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-area">
        <Container fluid className="p-0">
          <Row>
            <Col lg={6} className="align-self-center">
              <div className="section-padding">
                <div className="sign-content">
                  <h5>Teach online</h5>
                  <p>Earn money on your schedule</p>

                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Label>{strings.Emailaddress}</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Your Mail"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>{strings.Password}</Form.Label>
                      <div className="password-input">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Your Password"
                        />
                        <i
                          className={`fa ${
                            showPassword ? "fa-eye-slash" : "fa-eye"
                          }`}
                          onClick={togglePasswordVisibility}
                        />
                      </div>
                    </Form.Group>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.SignupwithEmail}
                      onClick={handleSignup}
                    />
                    <Button
                      className="red-button w-100 mt-3"
                      hoverColor="red-button"
                      icon="fa fa-google"
                      label={strings.SignUpwithGooglebtn}
                    />
                    <Button
                      className="red-button w-100 mt-3"
                      hoverColor="red-button"
                      icon="fa fa-facebook"
                      label={strings.SignUpwithFacebook}
                    />
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="all-overlay-bg">
                <div className="logo-left">
                  <img src={Logo} />
                  <p>
                    Discover world best online courses here. 24k online course
                    is waiting for you
                  </p>
                </div>
                <div className="loginImg">
                  <img src={LoginImg} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BecomeATutor;
