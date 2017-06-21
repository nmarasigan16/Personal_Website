import React from "react";
import Button from 'react-md/lib/Buttons';
import Typist from 'react-typist';
import Avatar from '../../images/avatar.jpg'
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
            hideWhenDoneDelay: 100
          }}
        >
        &nbsp;I'm Nathan
        </Typist>
      </div>
      <div className="row">
        <img className="avatar" src={Avatar} alt={""} />
      </div>
      <div className="row">
        <div className="flanker" />
        <Typist
          avgTypingDelay={50}
          className="subhead"
          startDelay={3000}
          cursor={{
            show: true,
            blink:true,
            element: '_',
            hideWhenDone: true,
            hideWhenDoneDelay: 100
          }}
        >
          A<wbr /> developer <wbr />currently<wbr /> studying<wbr /> at<wbr /> 
          <span style={{color:'#FA6300'}}> UIUC</span>
        </Typist>
        <div className="flanker" />
      </div>
      <div className="row">
        <div className="buttons">
          <Button className="b1" tooltipLabel="Resume" icon primary>description</Button>
          <Button className="b2" tooltipLabel="Github" icon primary iconClassName='fa fa-github' />
          <Button className="b3" tooltipLabel="Contact" icon primary>email</Button>
          <Button className="b4" tooltipLabel="Linkedin" icon primary iconClassName='fa fa-linkedin' />
        </div>
      </div>
    </div>
  )
}

export default Intro;