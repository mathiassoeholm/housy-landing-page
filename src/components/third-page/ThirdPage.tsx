import React from 'react'

interface Props {
  scrollOffset: number
}

const ThirdPage: React.FC<Props> = (props: Props) => {

  let height = window.innerHeight;
  let secondPageOffset = height - 0.25*props.scrollOffset;

  console.log(secondPageOffset)

  let offset = 0;
  if (secondPageOffset <= 0) {
    offset = props.scrollOffset
  }

  return (
    <div className={'third-page'} style={{ top: `calc(200vh - ${offset}px`  }}>

    </div>
  )
}

export default ThirdPage
