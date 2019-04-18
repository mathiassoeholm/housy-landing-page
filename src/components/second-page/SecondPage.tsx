import React from 'react'

interface Props {
  scrollOffset: number
}

const SecondPage: React.FC<Props> = (props: Props) => {
  return (
    <div className={'second-page'} style={{ top: `calc(100vh - ${0.25*props.scrollOffset}px`  }}>

    </div>
  )
}

export default SecondPage
