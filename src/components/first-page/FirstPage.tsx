import React from 'react'
import Logo from './Logo'
import Dropdown from './Dropdown'
import SellingPoint from './SellingPoint'
import {faCreditCard} from '@fortawesome/free-regular-svg-icons'
import {faCoins, faGift} from '@fortawesome/free-solid-svg-icons'
import FindTenantsButton from '../FindTenantsButton'
import Balloon from './Balloon'

interface Props {
  scrollOffset: number
}

const FirstPage: React.FC<Props> = (props: Props) => {
  return (
    <div className="first-page">
      <div className="first-page__top">
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
      <div className="first-page__center">
        <div className="first-page__background"/>
        <Balloon />
        <h1 className="first-page__title">
          Effortless to the perfect tenant
        </h1>
        <h3 className="first-page__subtitle">
          Find suitable tenants directly and without mass visitation.
        </h3>
        <FindTenantsButton />
      </div>
      <div className="first-page__bottom">
        <div className="first-page__bottom-row">
          <SellingPoint icon={faCreditCard} text={'No subscription'} showSlash />
          <SellingPoint icon={faCoins} text={'No running advertisement costs'} showSlash />
          <SellingPoint icon={faGift} text={'Free to successful rental'} />
        </div>
      </div>
      <div className="first-page__overlay" style={{ opacity: props.scrollOffset/window.innerHeight }}/>
    </div>
  );
}

export default FirstPage
