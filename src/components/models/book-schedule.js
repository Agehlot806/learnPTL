import React from 'react'
import Button from '../Button';
import { Modal, Form, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import strings from '../../localzation';

function Bookschedule(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                className='bookScheduleModel'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Booking Now
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='booking-model'>
                        <Form>
                            <Row>
                                <Col lg={6}>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={4}>
                                            Select Date:
                                        </Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="date" placeholder="Select Date" />
                                        </Col>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={4}>
                                            Hours:
                                        </Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="time" placeholder="Select Date" />
                                        </Col>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={4}>
                                            Type:
                                        </Form.Label>
                                        <Col sm={8}>
                                            <Link to=''>
                                                <Button className='bolderBtn' label="In Person" />
                                            </Link>
                                            <Link to=''>
                                                <Button className='bolderBtn' label="Online" />
                                            </Link>
                                        </Col>
                                    </Form.Group>
                                </Col>

                            </Row>

                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button className='theme-button1 w-100'  onClick={props.onHide} label={strings.MakePayment} />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Bookschedule
