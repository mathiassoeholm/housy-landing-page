import React, {useState} from 'react'
import FindTenantsButton from '../FindTenantsButton'
import VisibilitySensor from 'react-visibility-sensor'
import anime from 'animejs'

interface Props {
  scrollOffset: number
}

const SecondPage: React.FC<Props> = (props: Props) => {
  const [didStartAnimation, setDidStartAnimation] = useState(false)
  const [end, setEnd] = useState(0)
  const [start, setStart] = useState(0)

  const onMainBoxChangeVisibility = (isVisible: boolean) => {
    if (isVisible && !didStartAnimation) {
      anime({
        targets: {},
        easing: 'easeInExpo',
        duration: 1000,
        update: function(anim: anime.AnimeInstance) {
          setEnd(anim.progress/100)
        }
      });

      setTimeout(() => {
        anime({
          targets: {},
          easing: 'easeOutExpo',
          duration: 1000,
          update: function(anim: anime.AnimeInstance) {
            setStart(anim.progress/100)
          }
        });
      }, 200)



      setDidStartAnimation(true);
    }
  }

  const getLine = (start: number, end: number) => {

    const aspect = 70/25;
    const short = (1/aspect)/2;
    const long = (1-short*2)/2

    const p1 = 0;
    const p2 = long;
    const p3 = long+short;
    const p4 = long+short+long;
    const p5 = long+short+long+short;
/*
    console.log('p1 ' + p1)
    console.log('p2 ' + p2)
    console.log('p3 ' + p3)
    console.log('p4 ' + p4)
    console.log('p5 ' + p5)
    console.log('start ' + start)
    console.log('end ' + end)
*/
    const p1_x = 100 - (start/long)*100;
    const p1_y = 0;
    const drawP1 = start < p2;
    const p1_string = drawP1
      ? `${p1_x} ${p1_y},`
      : '';

    const p2_x = end <= p2
      ? ((p2 - end)/long)*100
      : 0;
    const p2_y = start >= p2
      ? (start-p2)/short * 100
      : 0;
    const drawP2 = start <= p3;
    const p2_string = drawP2
      ? `${p2_x} ${p2_y},`
      : '';

    const p3_x = start >= p3
      ? ((start - p3)/long)*100
      : 0;
    const p3_y = end <= p3
      ? 100 - (p3-end)/short * 100
      : 100;
    const drawP3 = end >= p2 && start <= p4;
    const p3_string = drawP3
      ? `${p3_x} ${p3_y},`
      : '';

    const p4_x = end <= p4
      ? ((end - p3)/long)*100
      : 100;
    const p4_y = start >= p4
      ? 100 - (start-p4)/short * 100
      : 100;
    const drawP4 = end >= p3;
    const p4_string = drawP4
      ? `${p4_x} ${p4_y},`
      : '';

    const p5_x = 100;
    const p5_y = end >= p4
      ? (p5 - end)/short * 100
      : 0;
    const drawP5 = end > p4;
    const p5_string = drawP5
      ? `${p5_x} ${p5_y},`
      : '';
/*
    console.log('p1_string ' + p1_string)
    console.log('p2_string ' + p2_string)
    console.log('p3_string ' + p3_string)
    console.log('p4_string ' + p4_string)
    console.log('p5_string ' + p5_string)
*/
    const points = `${p1_string}${p2_string}${p3_string}${p4_string}${p5_string}`.slice(0, -1)
    //console.log(points)

    return  <polyline
      className="second-page-animated-line"
      points={points}
      fill="none"
      strokeWidth="4"
      vectorEffect="non-scaling-stroke"
    />
  }

  return (
    <div className={'second-page'} style={{ top: `calc(100vh - ${0.25*props.scrollOffset}px`  }}>
      <div className={'second-page-main-row'}>
      <div className={'second-page-top-column'}>
        <h2>3 EASY STEPS</h2>
        <div className={'second-page-separator'} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <VisibilitySensor onChange={onMainBoxChangeVisibility}>
        <div className={'second-page-main-box'}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {getLine(start, end)}
        </svg>
      </div>
      </VisibilitySensor>
      <FindTenantsButton />
      </div>
    </div>
  )
}

export default SecondPage
