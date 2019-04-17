import React from 'react'
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown: React.FC = () => {
  return (
    <div className={'select-wrapper'}>
      <FontAwesomeIcon icon={faChevronDown} className={'select-arrow'} size={'xs'}/>
      <select>
        <option value="volvo">I am a Tenant</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  )
}

export default Dropdown
