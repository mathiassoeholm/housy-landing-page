import React, {Component} from 'react';
import FirstPage from './first-page/FirstPage'
import SecondPage from './second-page/SecondPage'
import ThirdPage from './third-page/ThirdPage'

interface State {
  currentPage: number,
}

class App extends Component<{}, State> {
  timeOfLastScroll = 0

  state: State = {
    currentPage: 0,
  }

  componentDidMount(): void {
    window.addEventListener('wheel', this.handleWheel)

    const body = document.querySelector('body')
    if (body != null) {
      body.classList.add('stop-scrolling')
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener('wheel', this.handleWheel)
  }

  handleWheel = (event: WheelEvent) => {
    if (Date.now() - this.timeOfLastScroll < 200) {
      this.timeOfLastScroll = Date.now()
      return
    }

    this.timeOfLastScroll = Date.now()

    if (event.deltaY > 0) {
      this.setState({
        currentPage: Math.min( this.pages.length - 1, this.state.currentPage + 1),
      })
    } else {
      this.setState({
        currentPage: Math.max(0, this.state.currentPage - 1),
      })
    }
  }

  pages = [
    <FirstPage />,
    <SecondPage />,
    <ThirdPage />,
  ]

  render() {
    return this.pages.map((page, index) => {
      const className =
        this.state.currentPage < index
          ? 'page page--below'
          : this.state.currentPage > index
          ? 'page page--above'
          : 'page'

      return (
        <div key={index} className={className}>
          {page}
        </div>
      )
    })
  }
}

export default App;
