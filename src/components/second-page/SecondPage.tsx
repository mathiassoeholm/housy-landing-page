import React from 'react'
import FindTenantsButton from '../FindTenantsButton'

interface Props {
  scrollOffset: number
}

const SecondPage: React.FC<Props> = (props: Props) => {
  return (
    <div className={'second-page'} style={{ top: `calc(100vh - ${0.25*props.scrollOffset}px`  }}>
      <div className={'second-page-main-row'}>
      <div className={'second-page-top-column'}>
        <h2>3 EASY STEPS</h2>
        <div className={'second-page-separator'} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className={'second-page-main-box'}/>
      <FindTenantsButton />
      </div>
    </div>
  )
}

export default SecondPage
