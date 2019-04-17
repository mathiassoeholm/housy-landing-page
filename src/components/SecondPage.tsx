import React, {Component} from 'react'

interface State {
  offset: number
}

class SecondPage extends Component<{}, State> {
  state: State = {
    offset: 0,
  }

  componentDidMount(): void {
    window.addEventListener('scroll',  this.handleScroll)
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
      offset: window.pageYOffset
    })
  }

  render() {
    return (
      <div className={'second-page'} style={{ top: `calc(100vh - ${this.state.offset}px`  }}>

      </div>
    )
  }
}

export default SecondPage
