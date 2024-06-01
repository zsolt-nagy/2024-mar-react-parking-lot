import React from 'react';
import ParkingLotItem from './ParkingLotItem';
import './ParkingLot.css';

export default function ParkingLotList({ parkingLotItems }) {

    let ParkingLotItemsJsxList = parkingLotItems.map(item => 
        <ParkingLotItem key={item.id} {...item} />
    );

    return (
        <section className="parking-lot-list-container">
            {ParkingLotItemsJsxList}
        </section>
    )
}
