import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import './ParkingLotForm.css';

const PRIORITIES = {
    Low: 'Low',
    Medium: 'Medium',
    High: 'High',
}



export default function ParkingLotForm({ 
    submitData,
    id, 
    defaultDate,
    defaultPriority,
    defaultLink,
    defaultDescription,
    cancelClicked,
}) {

    let idPrefix = '';
    if (typeof id === 'string' && id.length > 0) {
        idPrefix = id + '-';
    }

    const [date, setDate] = useState(defaultDate ?? '');
    const [link, setLink] = useState(defaultLink ?? '');
    const [description, setDescription] = useState(defaultDescription ?? '');
    const [priority, setPriority] = useState(defaultPriority ?? PRIORITIES.Medium);

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handlePriorityChange(e) {
        setPriority(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const [y, M, d] = date.split('-');
        const formattedDate = `${M}/${d}/${y}`;
        submitData(formattedDate, link, description, priority);

        setDate('');
        setLink('');
        setDescription('');
        setPriority(PRIORITIES.Medium);
    }

    return (
        <Form 
            data-bs-theme="dark" 
            className="parking-lot-form"
            onSubmit={handleSubmit}>
            <FormGroup className="parking-lot-row">
                <Label htmlFor={`${idPrefix}link-date`}>
                    Date
                </Label>
                <Input
                    type="date"
                    name="date"
                    id={`${idPrefix}link-date`}
                    value={date}
                    onChange={handleDateChange}
                    required
                />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Label htmlFor={`${idPrefix}link-url`}>
                    Link
                </Label>
                <Input
                    type="url"
                    name="url"
                    id={`${idPrefix}link-url`}
                    value={link}
                    onChange={handleLinkChange}
                    required
                />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Label htmlFor={`${idPrefix}link-description`}>
                    Description
                </Label>
                <Input
                    type="text"
                    name="description"
                    id={`${idPrefix}link-description`}
                    value={description}
                    onChange={handleDescriptionChange}
                    required 
                />
            </FormGroup>
            <FormGroup className="parking-lot-row d-flex flex-wrap">
                <div>
                    <Input
                        type="radio"
                        name="radio-priority"
                        value={PRIORITIES.High}
                        checked={priority === PRIORITIES.High}
                        onChange={handlePriorityChange}
                        id={`${idPrefix}prio-high`}
                    />
                    {' '}
                    <Label htmlFor={`${idPrefix}prio-high`} className="me-3">
                        High
                    </Label>                    
                </div>
                <div>
                    <Input
                        type="radio"
                        name="radio-priority"
                        value={PRIORITIES.Medium}
                        checked={priority === PRIORITIES.Medium}
                        onChange={handlePriorityChange}
                        id={`${idPrefix}prio-medium`}
                    />
                    {' '}
                    <Label htmlFor={`${idPrefix}prio-medium`} className="me-3">
                        Medium
                    </Label>
                </div>
                <div>
                    <Input
                        type="radio"
                        name="radio-priority"
                        value={PRIORITIES.Low}
                        checked={priority === PRIORITIES.Low}
                        onChange={handlePriorityChange}
                        id={`${idPrefix}prio-low`}
                    />
                    {' '}
                    <Label htmlFor={`${idPrefix}prio-low`} className="me-3">
                        Low
                    </Label> 
                </div>
            </FormGroup>
            <Button type="submit">
                Submit
            </Button>
            {
                typeof cancelClicked === 'function' && 
                <Button 
                    type="button" 
                    className="ms-3"
                    onClick={cancelClicked}>
                    Cancel
                </Button>
            }
        </Form>
    )
}
