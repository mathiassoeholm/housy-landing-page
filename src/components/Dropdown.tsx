import React from 'react'
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

interface Props {
  data: Map<string, string>
}

const Dropdown: React.FC<Props> = (props: Props) => {
  return (
    <div className={'select-wrapper'}>
      <FontAwesomeIcon icon={faChevronDown} className={'select-arrow'} size={'xs'}/>
      <select>
        {
          Array.from(props.data, ([key, value]) =>
            <option value={key}>{value}</option>
          )
        }
      </select>
    </div>
  )
}

export default Dropdown
