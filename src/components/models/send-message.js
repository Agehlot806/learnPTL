import React from 'react'
import { Form, Modal } from 'react-bootstrap'
import '../models/models.css'
import Img1 from '../../assets/images/img/img1.jpg'
import Button from '../Button'

function SendMessage(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered={false}
                dialogClassName="modal-right"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Send Message
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='mt-5 text-center'>
                    <div className='send-message'>
                        <img src={Img1} />
                        <h4>Contact Sophie D.</h4>
                        <p>Introduce yourself to the tutor, share your learning goals and ask any questions</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Control as="textarea" placeholder="Write Your message here" />
                            </Form.Group>
                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Get the response you’re looking for. Share your message with other tutors to receive more answers." />
                            </Form.Group>

                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="theme-button1 w-100"
                        label="Send Message"
                    />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SendMessage 
