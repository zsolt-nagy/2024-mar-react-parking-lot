import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

export default function ParkingLotItem({ id, date, priority, link, description}) {
    return (
        <Card 
            className="my-2 parking-lot-item-container" 
            color="secondary"
            inverse>
            <CardHeader>
                { date } (Priority: {priority})
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
        </Card>
    )
}
