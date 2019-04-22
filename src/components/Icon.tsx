import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSlash} from '@fortawesome/free-solid-svg-icons'
import {IconProp, SizeProp} from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconProp,
  showSlash?: boolean,
  size?: SizeProp,
}

const Icon: React.FC<Props> = (props: Props) => {
  return (
    <div className="icon">
      <FontAwesomeIcon icon={props.icon} size={props.size || '2x'} />
      {
        props.showSlash &&
        <FontAwesomeIcon icon={faSlash} className="icon__slash" size={props.size || '2x'} />
      }
    </div>
  )
}

export default Icon
