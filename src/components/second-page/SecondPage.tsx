import React from 'react'
import FindTenantsButton from '../FindTenantsButton'
import BorderAnimation from './BorderAnimation'
import MainBoxChild from './MainBoxChild'
import archiveImage from '../../assets/archive.png'
import tenantImage from '../../assets/tenant.png'
import apartmentImage from '../../assets/apartment.png'

const SecondPage: React.FC = () => {
  return (
    <div className="second-page" >
      <div className="second-page__top-column">
        <h2 className="page__title">
          3 EASY STEPS
        </h2>
        <div className="page__separator" />
        <p className="second-page__top-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="second-page__bottom-column">
        <div className="second-page__box">
          <BorderAnimation />
          <MainBoxChild image={archiveImage} />
          <MainBoxChild image={tenantImage} />
          <MainBoxChild image={apartmentImage} />
        </div>
        <FindTenantsButton />
      </div>
    </div>
  )
}

export default SecondPage
