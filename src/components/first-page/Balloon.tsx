import React, {Component} from 'react'
import balloon from '../../assets/balloon.png'
import anime from 'animejs'

const animationDuration = 60000

class Balloon extends Component {

  componentDidMount(): void {
    let path = anime.path('.balloon__viewport path')

    let animation = anime({
      targets: '.balloon__image',
      translateX: path('x'),
      translateY: path('y'),
      easing: 'linear',
      duration: animationDuration,
      loop: true,
      autoplay: false,
    })

    animation.seek(20000)
    animation.play()
  }

  render() {
    return (
      <div className="balloon__parent">
        <svg
          className="balloon__viewport"
          height="100%"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-100 30 C 200 300, 700 300, 800 100 S 1400 300, 1500 100, S 1800 300, 2200 500" fill="transparent"
                vectorEffect="non-scaling-stroke"/>

        </svg>
        <img className="balloon__image" src={balloon}/>
      </div>
    )
  }
}

export default Balloon
