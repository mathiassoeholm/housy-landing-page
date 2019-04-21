import React, { Component } from 'react';
import FirstPage from './first-page/FirstPage'
import SecondPage from './second-page/SecondPage'

interface State {
  scrollOffset: number,
}

class App extends Component<{}, State> {
  canScroll = true
  currentPage = 1

  state: State = {
    scrollOffset: 0,
  }

  componentDidMount(): void {
    window.addEventListener('scroll',  this.handleScroll)
    window.addEventListener('wheel', this.handleWheel)


    const body = document.querySelector('body')
    if (body != null) {
      body.classList.add('stop-scrolling')
    }
  }

  componentWillUnmount(): void {
    window.addEventListener('scroll',  this.handleScroll)
    window.removeEventListener('wheel', this.handleWheel)
  }

  handleScroll = () => {
    console.log(window.pageYOffset)
    this.setState({
      scrollOffset: window.pageYOffset
    })
  }

  handleWheel = (event: WheelEvent) => {
    if (!this.canScroll) {
      return
    }

    this.canScroll = false

    setTimeout(() => {
      this.canScroll = true
    }, 400)



    if (event.deltaY > 0) {
      if (this.currentPage === 'first') {

      }
    } else {

    }
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
