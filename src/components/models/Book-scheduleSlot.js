import React from 'react'
import Button from '../Button';
import { Modal, Form, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import strings from '../../localzation';
import Scheduleslot from '../Schedule Slot/Schedule-slot';

function BookscheduleSlot(props) {
    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                // backdrop="static"
                className='bookScheduleModel'
            >
                {/* <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Booking Now
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                   <Scheduleslot />
                </Modal.Body>
                {/* <Modal.Footer>
                <Button className='theme-button1 w-100'  onClick={props.onHide} label="Confirm Time" />
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default BookscheduleSlot
