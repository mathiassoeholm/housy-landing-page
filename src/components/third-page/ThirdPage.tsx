import React from 'react'
import GridCell from './GridCell'
import AccessTime from '@material-ui/icons/AccessTime'
import AccountBalanceWalletOutlined from '@material-ui/icons/AccountBalanceWalletOutlined'
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import TrendingUp from '@material-ui/icons/TrendingUp'
import Icon from '../Icon'
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins'

const ThirdPage: React.FC = () => {
  return (
    <div className="third-page">
      <div className="third-page__top-column">
        <h2 className="page__title">
          MORE BENEFITS
        </h2>
        <div className="page__separator"/>
      </div>
      <div className="third-page__grid-column">
        <div className="third-page__grid-row">
          <GridCell title="Time Savings" >
            <AccessTime className="third-page__grid-cell__icon" />
          </GridCell>
          <GridCell title="Money Savings" >
            <AccountBalanceWalletOutlined className="third-page__grid-cell__icon" />
          </GridCell>
          <GridCell title="No Revenue Loss" >
            <Icon icon={faCoins} showSlash size="3x" />
          </GridCell>
        </div>
        <div className="third-page__grid-row">
          <GridCell title="Market Changes" >
            <TrendingUp className="third-page__grid-cell__icon" />
          </GridCell>
          <GridCell title="Selection Process" >
            <ThumbUpAltOutlined className="third-page__grid-cell__icon" />
          </GridCell>
          <GridCell title="Complete Solution" >
            <CheckCircleOutlined className="third-page__grid-cell__icon" />
          </GridCell>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage
