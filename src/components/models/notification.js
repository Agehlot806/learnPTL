import React from 'react'
import { Modal } from 'react-bootstrap'
import '../models/models.css'
function Notification(props) {
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
                    Notifications
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='mt-5 text-center'>
                <i className="fa fa-bell-o mb-2" style={{ fontSize: '30px' }}/>
                    <h4>Don't miss out on updates!</h4>
                    <p>Keep an eye on this feed for updates about your learning journey on Preply</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Notification
