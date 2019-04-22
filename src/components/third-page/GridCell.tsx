import React, {ReactNode} from 'react'

interface Props {
  title: string,
  children: ReactNode,
  visible: boolean,
  index: number,
}

const GridCell: React.FC<Props> = (props: Props) => {
  const scaleClassName = props.visible ? 'normal-scale' : 'zero-scale'
  const scaleDelay = props.index*0.12

  return (
    <div className="third-page__grid-cell">
      <div
        className={scaleClassName}
        style={{transitionDelay: `${scaleDelay}s` }}
      >
      {props.children}
      </div>
      <div
        className={scaleClassName}
        style={{transitionDelay: `${scaleDelay + 0.06}s` }}
      >
        <h3 className="third-page__grid-cell__title">
          {props.title}
        </h3>
      </div>
      <p className="third-page__grid-cell__description">
        Lorem ipsum dolor sit amet<br/>
        consectetur adipiscing elit
      </p>
    </div>
  )
}

export default GridCell
