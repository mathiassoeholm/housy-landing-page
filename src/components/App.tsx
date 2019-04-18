import React, { Component } from 'react';
import FirstPage from './first-page/FirstPage'
import SecondPage from './second-page/SecondPage'

interface State {
  scrollOffset: number
}

class App extends Component<{}, State> {

  state: State = {
    scrollOffset: 0,
  }

  componentDidMount(): void {
    window.addEventListener('scroll',  this.handleScroll)
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
      scrollOffset: window.pageYOffset
    })
  }

  render() {
    return (
      <>
        <FirstPage scrollOffset={this.state.scrollOffset} />
        <SecondPage scrollOffset={this.state.scrollOffset}/>
      </>
    );
  }
}

export default App;
