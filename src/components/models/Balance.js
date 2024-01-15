import React from 'react'
import '../../components/models/models.css'
import Button from '../Button';
import { Modal, Form, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import strings from '../../localzation';
import Img1 from '../../assets/images/img/img1.jpg'
function Balance(props) {


  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        // centered
        // backdrop="static"
        className='bookScheduleModel'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Subscribe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='balance-area'>
          <h6>Transfer lessons or subscription</h6>
          <Row>
            <Col lg={8}>
              <div className='balance-model'>
                <div>
                  <img src={Img1} />
                </div>
                <div>
                  <h3>Rahul M. <span>English</span></h3>
                  <p>You've viewed their profile</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <Button className='theme-button1 w-100' onClick={props.onHide} label={strings.Booktriallesson} />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Balance
