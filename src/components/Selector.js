import React from "react";

const Selector = props => (
    <div className="form-group">
        <select {...props}>
            <option value="Atlanta,US" onChange={props.handleButtonSelect}>Atlanta,US</option>
            <option value="London,UK" onChange={props.handleButtonSelect}>London,UK</option>
            <option value="Bujumbura,BI" onChange={props.handleButtonSelect}>Bujumbura,BI</option>
        </select>
        <button {...props}>Submit City</button>
    </div>
)

export default Selector;