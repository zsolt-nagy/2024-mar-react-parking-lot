import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";

import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";
import Timer from "./Components/Timer/Timer";

export default function App() {
    let [parkingLotItems, setParkingLotItems] = useState(getInitialState());

    useEffect(saveParkingLotItems, [parkingLotItems]);

    function saveParkingLotItems() {
        localStorage.setItem("items", JSON.stringify(parkingLotItems));
    }

    function getInitialState() {
        let savedState = localStorage.getItem("items");
        if (typeof savedState === "string") {
            return JSON.parse(savedState);
        }
        return [];
    }

    function addItem(date, link, description, priority) {
        setParkingLotItems((oldItems) => [
            ...oldItems,
            {
                id: nanoid(),
                date,
                description,
                link,
                priority,
            },
        ]);
    }

    function deleteItem(id) {
        setParkingLotItems((oldItems) =>
            oldItems.filter((item) => item.id !== id)
        );
    }

    return (
        <div className="App">
            <header>
                <h1>Browser Parking Lot</h1>
                <p>Send most of your browser tabs into retirement.</p>
                <Timer />
            </header>
            <main>
                <ParkingLotForm addItem={addItem} />
                <ParkingLotList
                    parkingLotItems={parkingLotItems}
                    deleteItem={deleteItem}
                />
            </main>
        </div>
    );
}
