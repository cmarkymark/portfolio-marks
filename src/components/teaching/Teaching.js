import React from 'react';
import { Link } from 'react-router-dom';
import './Teaching.css';

const Teaching = (props) => {
  let links = [];
  if (!props.filePaths) {
    let entries = Object.entries(props);
    for (let i = 0; i < entries.length; i++) {
      let path = "/" + entries[i][1].title.replace(/\s/g , "-");
      links.push(
        <Link to={path} key={entries[i][1].title}>
          <p>{entries[i][1].title}</p>
        </Link>
      );
    }
  }
  return (
    <div id="teaching">
      Within this section of the website you will find course materials for classes I am teaching and have taught.  
    There are many reasons I think it is important for instructors to make resources publicly available,
    a primary one simply being that knowledge is collective. For those not taking my classes, whether a student, teacher, or
    whatever, I hope the materials can be resources for your benefit. The experience of taking a class comes with support and communication
    that these materials alone cannot convey, but I hope they may be helpful. 
      <div>
        {links}
      </div>
    </div>
  );
};

export default Teaching;
