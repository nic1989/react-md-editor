import React, { Fragment } from 'react';
import ReadmeStr from '../README.md';
import Exmaple from './Exmaple';
import Logo from './Logo';
import './App.less'

const mdStr = ReadmeStr.replace(/([\s\S]*)<!--dividing-->/, '').replace(/^\s+/, '');

export default function App() {
  
  return (
    <Fragment>
      <div className="warpper">
        <header className="header">
          <Logo />
        </header>
        <Exmaple mdStr={mdStr} />        
      </div>
    </Fragment>
  );
}
