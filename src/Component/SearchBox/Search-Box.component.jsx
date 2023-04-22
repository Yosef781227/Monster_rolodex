import {Component} from 'react'

import './Search-Box.styles.css'

class SearchBox extends Component {
    render() {
        return (
            <input
            type="search"
            placeholder={this.props.searchholder}
            onChange={this.props.searchBoxhandler}
            className={`search-box ${this.props.namedclass}`}
          />
        )
    }
}

export default SearchBox