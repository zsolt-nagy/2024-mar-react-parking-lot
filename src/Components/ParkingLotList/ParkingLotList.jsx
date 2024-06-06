import React from 'react';
import ParkingLotItem from './ParkingLotItem';
import './ParkingLot.css';

export default function ParkingLotList({ parkingLotItems, deleteItem }) {

    let ParkingLotItemsJsxList = parkingLotItems.map(item => 
        <ParkingLotItem key={item.id} deleteItem={deleteItem} {...item} />
    );

    return (
        <section className="parking-lot-list-container">
            {ParkingLotItemsJsxList}
        </section>
    )
}
