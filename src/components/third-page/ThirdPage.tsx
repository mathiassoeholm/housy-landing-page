import React, {useState} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import GridCell from './GridCell'
import AccessTime from '@material-ui/icons/AccessTime'
import AccountBalanceWalletOutlined from '@material-ui/icons/AccountBalanceWalletOutlined'
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import TrendingUp from '@material-ui/icons/TrendingUp'
import MonetizationOnOutlined from '@material-ui/icons/MonetizationOnOutlined'

const ThirdPage: React.FC = () => {
  const [hasBeenSeen, setHasBeenSeen] = useState(false)

  const onChangeVisibility = (isVisible: boolean) => {
    if (!hasBeenSeen && isVisible) {
      setHasBeenSeen(isVisible)
    }
  }

  return (
    <div className="third-page">
      <div className="third-page__top-column">
        <h2 className="page__title">
          MORE BENEFITS
        </h2>
        <div className="page__separator"/>
      </div>
      <div className="third-page__grid-column">
        <VisibilitySensor onChange={onChangeVisibility}>
        <div className="third-page__grid-row">
          <GridCell title="Time Savings" visible={hasBeenSeen} index={0} >
            <AccessTime className="third-page__grid-cell__icon" />
          </GridCell>
          <GridCell title="Money Savings" visible={hasBeenSeen} index={1} >
            <AccountBalanceWalletOutlined className="third-page__grid-cell__icon" />
          </GridCell>
          <GridCell title="No Revenue Loss" visible={hasBeenSeen} index={2} >
            <MonetizationOnOutlined className="third-page__grid-cell__icon" />
          </GridCell>
        </div>
        </VisibilitySensor>
        <div className="third-page__grid-row">
          <GridCell title="Market Changes" visible={hasBeenSeen} index={3} >
            <TrendingUp className="third-page__grid-cell__icon" />
          </GridCell>
          <GridCell title="Selection Process" visible={hasBeenSeen} index={4} >
            <ThumbUpAltOutlined className="third-page__grid-cell__icon" />
          </GridCell>
          <GridCell title="Complete Solution" visible={hasBeenSeen} index={5} >
            <CheckCircleOutlined className="third-page__grid-cell__icon" />
          </GridCell>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage
