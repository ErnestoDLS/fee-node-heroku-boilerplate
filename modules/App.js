import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Ernesto De Los Santos</h1>
        <h2>San Antonio Texas</h2>
          <p>I'm 27 years old, born and raised in San Antiono and I have a golden retriever.</p>
          <a href="https://github.com/ErnestoDLS">GitHub Profile</a>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">Blog</NavLink></li>
          <li><NavLink to="/repos">Projects</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
