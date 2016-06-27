import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h3>My Boards</h3>

        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">Blog</NavLink></li>
          <li><NavLink to="/repos">Projects</NavLink></li>
        </ul>
        {this.props.children}
      </div>ß
    )
  }
})
