import React from 'react';
import Dropdown from './Dropdown.js';
import './Navigation.css';

const Navigation = (props) => {
  return (
    <nav id="navigation">
      <Dropdown heading={"Home"} />
      <Dropdown heading={"Research"} drop={props.research} />
      <Dropdown heading={"Teaching"} drop={props.teaching} />
      <Dropdown heading={"Fascination"} drop={props.fascination} />
    </nav>
  );
};

export default Navigation;
