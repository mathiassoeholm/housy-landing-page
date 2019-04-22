import React, {Component} from 'react'
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
          image.classList.add('second-page__box__child__image--finished')
        }

        this.didStartAnimation = true
      }
    }

    return (
      <div className="second-page__box__child">
        <VisibilitySensor onChange={onChangeVisibility}>
          <img
            id={this.imageId}
            className="second-page__box__child__image"
            src={this.props.image}
          />
        </VisibilitySensor>
        <h3 className="second-page__box__child__title">
          Establish Criteria
        </h3>
        <p className="second-page__box__child__description">
          Establish your requirements, the Housy
          Matching process proposes your directly
          matching tenant for your property.
        </p>
      </div>
    )
  }
}

export default MainBoxChild
