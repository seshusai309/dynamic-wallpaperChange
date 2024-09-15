import {Component} from 'react'

import './index.css'

class ThumbNail extends Component {
  render() {
    const {active, items, fun} = this.props
    const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = items
    const clicked = () => {
      fun(imageUrl, imageAltText, id)
    }
    const val = active ? 'non-opacity' : ''
    return (
      <li>
        <button type="button" onClick={clicked} className={`btn ${val}`}>
          <img alt={thumbnailAltText} src={thumbnailUrl} />
        </button>
      </li>
    )
  }
}

export default ThumbNail
