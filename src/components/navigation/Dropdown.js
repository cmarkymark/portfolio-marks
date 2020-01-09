import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

class Dropdown extends React.component {

  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    }
  }

  mouseEnter = () => {
		this.setState({
			dropdown: true
		});
	}

	mouseLeave = () => {
		this.setState({
			dropdown: false
		});
	}

}

export default Dropdown;
