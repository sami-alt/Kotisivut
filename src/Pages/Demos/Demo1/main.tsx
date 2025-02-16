import { useState } from "react";
import BusData from "./busData";
import Stopdata from "./stopData";

function Demo1() {
    const [chooseData, setChooseData] = useState({ show:""})

    const display = () => {
        if (chooseData.show === 'vehicledata') {
            return <BusData />
        } else if (chooseData.show === 'stopdata') {
            return <Stopdata />
        } else {
            return
        }
    }

    const handleInput: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        event.preventDefault()
        setChooseData({ show: event.target.value })
    }

    return (
        <div className="demo">
            <h3>Bus timetable and location app</h3>
                <select id='show' onChange={handleInput} defaultValue={'select-option'}>
                    <option value="select-option" disabled> -- select an option -- </option>
                    <option value='vehicledata'>Show busses on a map</option>
                    <option value='stopdata'>show bus timetable by the stop</option>
                </select>
            {display()}
        </div>
    )
}

export default Demo1