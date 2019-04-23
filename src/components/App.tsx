import React, {Component} from 'react';
import FirstPage from './first-page/FirstPage'
import SecondPage from './second-page/SecondPage'
import ThirdPage from './third-page/ThirdPage'

interface State {
  currentPage: number,
}

class App extends Component<{}, State> {
  timeOfLastScroll = 0
  canGoBack = false

  state: State = {
    currentPage: 0,
  }

  componentDidMount(): void {
    window.addEventListener('wheel', this.handleWheel)
    window.addEventListener('popstate', this.resolvePath)

    this.resolvePath()
  }

  componentWillUnmount(): void {
    window.removeEventListener('wheel', this.handleWheel)
    window.removeEventListener('popstate', this.resolvePath)
  }

  resolvePath = () => {
    const path = window.location.pathname;
    const regex = /\/\d+$/
    const extracted = path.match(regex)

    if (extracted != null) {
      const trimmed = path.substr(1, path.length-1)
      const index = parseInt(trimmed)

      if (index && index < this.pages.length) {
        this.setState({currentPage: index})
        return
      }
    }

    this.setState({currentPage: 0})
  }

  handleWheel = (event: WheelEvent) => {
    if (Date.now() - this.timeOfLastScroll < 200) {
      this.timeOfLastScroll = Date.now()
      return
    }

    this.timeOfLastScroll = Date.now()

    if (event.deltaY > 0 && this.state.currentPage < this.pages.length - 1) {
      this.pushPage(this.state.currentPage + 1)
    } else if (event.deltaY < 0 && this.state.currentPage > 0){
      if (this.canGoBack) {
        window.history.back()
      } else {
        this.replacePage(this.state.currentPage - 1)
      }
    }
  }

  pushPage = (page: number) => {
    this.canGoBack = true
    window.history.pushState(null, page.toString(), `/${page}`)
    this.resolvePath()
  }

  replacePage = (page: number) => {
    window.history.replaceState(null, page.toString(), `/${page}`)
    this.resolvePath()
  }

  pages = [
    <FirstPage />,
    <SecondPage />,
    <ThirdPage />,
  ]

  render() {
    return this.pages.map((page, index) => {
      const className = this.state.currentPage < index ? 'page page--below'
        : this.state.currentPage > index ? 'page page--above'
        : 'page'

      return (
        <div key={index} className={className}>
          {page}
          <div className={'page__overlay'}/>
        </div>
      )
    })
  }
}

export default App;
