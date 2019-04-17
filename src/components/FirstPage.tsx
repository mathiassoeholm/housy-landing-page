import React from 'react'
import Logo from './Logo'
import Dropdown from './Dropdown'

const FirstPage: React.FC = () => {
  return (
    <div className={'first-page'}>
      <div className={'first-page-top-row'}>
        <Logo />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Dropdown data={new Map([
            ['tenant', 'I am a Tenant'],
            ['landlord', 'I am a Landlord'],
          ])}/>
          <button className={'login-button'} >
            Login
          </button>
          <Dropdown data={new Map([
            ['english', 'English'],
            ['german', 'German'],
            ['danish', 'Danish'],
          ])}/>
        </div>
      </div>
    </div>
  );
}

export default FirstPage
