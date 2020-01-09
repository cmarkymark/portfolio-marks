import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown.js'
import './Navigation.css';

const Navigation = (props) => {
  console.log(props);
  return (
    <nav id="navigation">
      <Link to="/" className="link"><h3>Home</h3></Link>
      <Link to="/about" className="link"><h3>About</h3></Link>
      <Link to="/fascination" className="link"><h3>Fascination</h3></Link>
      <Link to="/research" className="link"><h3>Research</h3></Link>
      <Link to="/teaching" className="link"><h3>Teaching</h3></Link>
      <Dropdown props={} className="dropdown" />
      <Dropdown props={} className="dropdown" />
      <Dropdown props={} className="dropdown" />
      <Dropdown props={} className="dropdown" />
      <Dropdown props={} className="dropdown" />
    </nav>
  );
};

export default Navigation;
