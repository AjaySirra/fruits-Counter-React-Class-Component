import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  eatMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
      bananaCount: prevState.bananaCount,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
      mangoCount: prevState.mangoCount,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="mangoes">{mangoCount}</span> mangoes{' '}
            <span className="bananas">{bananaCount}</span> bananas
          </h1>
          <div className="fruits">
            <div className="mango-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
              />
              <div>
                <button
                  className="mango-counter"
                  type="button"
                  onClick={this.eatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="mango-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div>
                <button
                  className="mango-counter"
                  type="button"
                  onClick={this.eatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
