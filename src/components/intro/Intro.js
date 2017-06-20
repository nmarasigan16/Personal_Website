import React from "react";
import Button from 'react-md/lib/Buttons';
import Typist from 'react-typist';
import './intro.css';

function Intro(props) {
  return (
    <div className="block">
      <div className="row">
        <Typist 
          className="header" 
          avgTypingDelay={100}
          cursor={{
            show: true,
            blink: true,
            element: '_',
            hideWhenDone: true, 
            hideWhenDoneDelay: 50,
            }}
        >
          Hi,
        </Typist>
        <Typist 
          className="header"
          startDelay={1000}
          cursor={{
            show: true,
            blink:true,
            element: '_',
            hideWhenDone: true,
            hideWhenDoneDelay: 1000
          }}
        >
        &nbsp;I'm Nathan
        </Typist>
      </div>
      <div className="row">
        <div className="flanker" />
        <p className="subhead">
          A developer currently studying at 
          <span style={{color:'#FA6300'}}> UIUC</span>
        </p>
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