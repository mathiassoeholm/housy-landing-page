import React from 'react'
import {IconProp} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSlash} from '@fortawesome/free-solid-svg-icons'

interface Props {
  icon: IconProp,
  text: string,
  showSlash?: boolean,
}

const SellingPoint: React.FC<Props> = (props: Props) => {
  return (
    <div className={'selling-point'}>
      <div className={'selling-point-icon-wrapper'}>
        <FontAwesomeIcon icon={props.icon} className={'selling-point-icon'} size={'2x'} />
        {
          props.showSlash &&
          <FontAwesomeIcon icon={faSlash} className={'selling-point-icon-slash'} size={'2x'} />
        }
      </div>
      {props.text}
    </div>
  )
}

export default SellingPoint
