import React from 'react'
import Logo from './Logo'
import Dropdown from './Dropdown'

const FirstPage: React.FC = () => {
  return (
    <div className={'first-page'}>
      <div className={'first-page-top-row'}>
        <Logo />
        <div style={{ display: 'flex' }}>
          <Dropdown />
          <Dropdown />
        </div>
      </div>
    </div>
  );
}

export default FirstPage
