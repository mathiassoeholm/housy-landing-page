import React from 'react'
import Icon from '../Icon'
import {faCoins} from '@fortawesome/free-solid-svg-icons'

const GridCell: React.FC = () => {
  return (
    <div className="third-page__grid-cell">
      <Icon icon={faCoins} size="3x" showSlash />
      <h3 className="third-page__grid-cell__title">
        No Revenue Loss
      </h3>
    </div>
  )
}

export default GridCell
