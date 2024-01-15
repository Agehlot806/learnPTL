import React, { useState, useRef } from 'react';
import Button from '../Button';
import '../models/models.css'
import { Modal, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import strings from '../../localzation';
import video1 from '../../assets/images/video/video1.mp4';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';


function TeacherstutorModel(props) {
    const viewFullSchedule = (linkdata) => {
        window.open(linkdata);
      };
    
    return (
        <>
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                // backdrop="static"
                className='teacher-tutorModel'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Teacher Tutor Name
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="video-player">

                        <Player>
                            <source src={video1} />
                        </Player>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link onClick={(e) => viewFullSchedule("/view-full-schedule")}>
                        <Button className='theme-button1 w-100' label={strings.Viewfullschedule} />
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TeacherstutorModel;
