import React, {Component, useState} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import uuid from '../../util/uuid'

interface Props {
  image: string
}

class MainBoxChild extends Component<Props> {
  didStartAnimation = false
  imageId = uuid()

  render() {
    const onChangeVisibility = (isVisible: boolean) => {
      if (isVisible && !this.didStartAnimation) {
        const image = document.getElementById(`${this.imageId}`)

        if (image != null) {
          image.classList.add('main-box-child-image--finished')
        }

        this.didStartAnimation = true
      }
    }

    return (
      <div className={'main-box-child'}>
        <VisibilitySensor onChange={onChangeVisibility}>
          <img
            id={this.imageId}
            className={'main-box-child-image'}
            src={this.props.image}
          />
        </VisibilitySensor>
        <h3>Establish Criteria</h3>
        <p>
          Establish your requirements, the Housy
          Matching process proposes your directly
          matching tenant for your property.
        </p>
      </div>
    )
  }
}

export default MainBoxChild
