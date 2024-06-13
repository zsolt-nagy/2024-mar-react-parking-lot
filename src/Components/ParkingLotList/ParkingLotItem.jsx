import React, { useState } from 'react';
import ParkingLotForm from '../ParkingLotForm/ParkingLotForm';
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardTitle, 
    CardText, 
    Button,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';

export default function ParkingLotItem({ 
    deleteItem, 
    editItem,
    id, 
    date, 
    priority, 
    link, 
    description 
}) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(oldModalState => !oldModalState);

    function handleDelete() {
        deleteItem(id);
    }

    function usDateToYyyyMmDd(date) {
        const [M, d, y] = date.split('/');
        return `${y}-${M}-${d}`;
    }

    function updateItem(formattedDate, link, description, priority) {
        editItem(id, formattedDate, link, description, priority);
        setModal(false);
    }
    
    return (
        <Card 
            className="my-2 parking-lot-item-container" 
            color="secondary"
            inverse>
            <CardHeader className="card-header">
                <div>
                    { date } (Priority: {priority})
                </div>
                <div>
                    <Button 
                        color="success" 
                        className="card-button"
                        onClick={toggle}>✎</Button>
                    <Button 
                        color="danger" 
                        className="card-button delete-button"
                        onClick={handleDelete}>
                        <strong>X</strong>
                    </Button>
                </div>
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5">
                    { description }
                </CardTitle>
                <CardText>
                    Link:&nbsp;
                    <a href={link} target="_blank" className="parking-lot-item-anchor">
                        {link}
                    </a>
                </CardText>
            </CardBody>
            <Modal isOpen={modal} toggle={toggle} fade={true}>
                <ModalHeader data-bs-theme="dark" className="bg-dark" toggle={toggle}>Modal title</ModalHeader>
                <ModalBody data-bs-theme="dark" className="bg-dark">
                    <ParkingLotForm
                        id={id}
                        defaultDate={usDateToYyyyMmDd(date)} 
                        defaultPriority={priority}
                        defaultLink={link}
                        defaultDescription={description} 
                        submitData={updateItem} 
                        cancelClicked={toggle}                   
                    />
                </ModalBody>
            </Modal>
        </Card>
    )
}
