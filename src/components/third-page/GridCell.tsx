import React, {ReactNode} from 'react'

interface Props {
  title: string,
  children: ReactNode,
}

const GridCell: React.FC<Props> = (props: Props) => {
  return (
    <div className="third-page__grid-cell">
      {props.children}
      <h3 className="third-page__grid-cell__title">
        {props.title}
      </h3>
    </div>
  )
}

export default GridCell
