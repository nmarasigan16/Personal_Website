import React from "react";
import Button from 'react-md/lib/Buttons';
import './intro.css';

function Intro(props) {
  return (
    <div className="block">
      <div className="row">
        <p className="header">Hi, I'm Nathan</p>
      </div>
      <div className="row">
        <div className="flanker" />
        <p className="subhead"> A student at the University of Illinois at Urbana Champaign interested in web development and communication networks.</p>
        <div className="flanker" />
      </div>
      <div className="buttons">
        <Button tooltipLabel="Resume" icon primary>description</Button>
        <Button tooltipLabel="Github" icon primary iconClassName='fa fa-github' />
        <Button tooltipLabel="Contact" icon primary>email</Button>
        <Button tooltipLabel="Linkedin" icon primary iconClassName='fa fa-linkedin' />
      </div>
    </div>
  )
}

export default Intro;