import React, {ReactNode} from 'react'

interface Props {
  text: string,
  children: ReactNode,
}

const SellingPoint: React.FC<Props> = (props: Props) => {
  return (
    <div className={'selling-point'}>
      <div className={'selling-point-icon-wrapper'}>
        {props.children}
      </div>
      {props.text}
    </div>
  )
}

export default SellingPoint
