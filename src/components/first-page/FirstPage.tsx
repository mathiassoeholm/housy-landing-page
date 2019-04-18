import React from 'react'
import Logo from './Logo'
import Dropdown from './Dropdown'
import SellingPoint from './SellingPoint'
import {faCreditCard} from '@fortawesome/free-regular-svg-icons'
import {faCoins, faGift} from '@fortawesome/free-solid-svg-icons'

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
        <h1>Effortless to the perfect tenant</h1>
        <h3>Find suitable tenants directly and without mass visitation.</h3>
        <button className={'find-tenants-button'} >
          Find Tenants Now
        </button>
      </div>
      <div className={'first-page-bottom'}>
        <div className={'first-page-bottom-row'}>
          <SellingPoint icon={faCreditCard} text={'No subscription'} showSlash />
          <SellingPoint icon={faCoins} text={'No running advertisement costs'} showSlash />
          <SellingPoint icon={faGift} text={'Free to successful rental'} />
        </div>
      </div>
      <div className={'first-page-overlay'} style={{ opacity: props.scrollOffset/window.innerHeight }}/>
    </div>
  );
}

export default FirstPage