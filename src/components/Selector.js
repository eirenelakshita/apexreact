import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Selector = props => (
    <DropdownButton id="dropdown-basic-button" title="Select a City">
        <Dropdown.Item value="Atlanta,US" onClick={props.handleButtonSelect}>Atlanta USA</Dropdown.Item>
        <Dropdown.Item value="London,UK" onClick={props.handleButtonSelect}>London England</Dropdown.Item>
        <Dropdown.Item value="Bujumbura,BI" onClick={props.handleButtonSelect}>Bujumbura Burundi</Dropdown.Item>
    </DropdownButton>
)

export default Selector;