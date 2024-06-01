import React from 'react';

export default function ParkingLotItem({ id, date, priority, link, description}) {
    return (
        <section className="parking-lot-item-container">
            <p className="parking-lot-item-field">Date: { date }</p>
            <p className="parking-lot-item-field">Priority: { priority }</p>
            <p className="parking-lot-item-field">Description: { description}</p>
            <p className="parking-lot-item-field">
                Link:
                <a href={link} target="_blank" className="parking-lot-item-anchor">
                    {link}
                </a>
            </p>
        </section>
    )
}
