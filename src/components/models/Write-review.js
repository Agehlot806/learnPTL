import React, { useState, useRef } from 'react';
import Button from '../Button';
import '../models/models.css'
import { Modal, Form, Col, Row, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import strings from '../../localzation';
import 'video-react/dist/video-react.css';


function Writereview(props) {

    return (
        <>
            <Modal
                {...props}
                // size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                // backdrop="static"
                className='teacher-tutorModel'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Write a Review
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center'>
                        {[...Array(5)].map((_, i) => (
                            <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }}/></a>
                        ))}
                    </div>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Feedback"
                        className="mb-3 mt-3"
                    >
                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='theme-button1 w-100' label={strings.submitbtn} />
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Writereview;
