import React, {useState} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import anime from 'animejs'

const BorderAnimation: React.FC = () => {
  const [didStartAnimation, setDidStartAnimation] = useState(false)
  const [end, setEnd] = useState(0)
  const [start, setStart] = useState(0)

  const onChangeVisibility = (isVisible: boolean) => {
    if (isVisible && !didStartAnimation) {

      let animation = {
        start: 0,
        end: 0,
      }

      anime({
        targets: animation,
        end: 1,
        easing: 'easeOutSine',
        duration: 1400,
        update: function() {
          setEnd(animation.end)
        }
      })

      setTimeout(() => {
        anime({
          targets: animation,
          start: 1,
          easing: 'easeOutSine',
          duration: 1400,
          update: function() {
            setStart(animation.start)
          }
        })
      }, 200)

      setDidStartAnimation(true)
    }
  }

  const getLine = (start: number, end: number) => {
    const aspect = 70/25
    const short = (1/aspect)/2
    const long = (1-short*2)/2

    const p2 = long
    const p3 = long+short
    const p4 = long+short+long
    const p5 = long+short+long+short

    const p1_x = 100 - (start/long)*100
    const p1_y = 0
    const drawP1 = start < p2
    const p1_string = drawP1
      ? `${p1_x} ${p1_y},`
      : ''

    const p2_x = end <= p2
      ? ((p2 - end)/long)*100
      : 0
    const p2_y = start >= p2
      ? (start-p2)/short * 100
      : 0
    const drawP2 = start <= p3
    const p2_string = drawP2
      ? `${p2_x} ${p2_y},`
      : ''

    const p3_x = start >= p3
      ? ((start - p3)/long)*100
      : 0
    const p3_y = end <= p3
      ? 100 - (p3-end)/short * 100
      : 100
    const drawP3 = end >= p2 && start <= p4
    const p3_string = drawP3
      ? `${p3_x} ${p3_y},`
      : ''

    const p4_x = end <= p4
      ? ((end - p3)/long)*100
      : 100
    const p4_y = start >= p4
      ? 100 - (start-p4)/short * 100
      : 100
    const drawP4 = end >= p3
    const p4_string = drawP4
      ? `${p4_x} ${p4_y},`
      : ''

    const p5_x = 100
    const p5_y = end >= p4
      ? (p5 - end)/short * 100
      : 0
    const drawP5 = end > p4
    const p5_string = drawP5
      ? `${p5_x} ${p5_y},`
      : ''

    const points = `${p1_string}${p2_string}${p3_string}${p4_string}${p5_string}`
      .slice(0, -1) // Remove trailing comma

    return  <polyline
      className="border-animation-path"
      points={points}
      fill="none"
      strokeWidth="4"
      vectorEffect="non-scaling-stroke"
    />
  }

  return (
    <VisibilitySensor onChange={onChangeVisibility}>
      <svg
        className={'border-animation'}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {
          getLine(start, end)
        }
      </svg>
    </VisibilitySensor>
  )
}

export default BorderAnimation
