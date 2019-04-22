import React from 'react'
import GridCell from './GridCell'

const ThirdPage: React.FC = () => {
  return (
    <div className="third-page">
      <div className="third-page__top-column">
        <h2 className="page__title">
          MORE BENEFITS
        </h2>
        <div className="page__separator"/>
      </div>
      <div className="third-page__grid-column">
        <div className="third-page__grid-row">
          <GridCell />
          <GridCell />
          <GridCell />
        </div>
        <div className="third-page__grid-row">
          <GridCell />
          <GridCell />
          <GridCell />
        </div>
      </div>
    </div>
  )
}

export default ThirdPage
