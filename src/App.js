import "./App.css";

import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";

export default function App() {
    return (
        <div className="App">
            <header>
                <h1>Browser Parking Lot</h1>
                <p>Send most of your browser tabs into retirement.</p>
            </header>
            <main>
                <ParkingLotForm />
                <ParkingLotList />
            </main>
        </div>
    );
}
