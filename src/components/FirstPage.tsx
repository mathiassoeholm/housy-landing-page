import React from 'react'
import Logo from './Logo'
import Dropdown from './Dropdown'

interface Props {
  scrollOffset: number
}

const FirstPage: React.FC<Props> = (props: Props) => {
  return (
    <div className={'first-page'}>
      <div className={'first-page-top'}>
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
      <div className={'first-page-center'}>

      </div>
      <div className={'first-page-bottom'}>

      </div>
      <div className={'first-page-overlay'} style={{ opacity: props.scrollOffset/window.innerHeight }}/>
    </div>
  );
}

export default FirstPage
