import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <ul>
          <article>
            <h3>Todo List</h3>
              <li><NavLink to="https://github.com/ErnestoDLS/3.4-to-do-list">Todo List</NavLink></li>
              <p>Created a todo list using jquery.</p>
          </article>
          <article>
            <h3>Calculator</h3>
              <li><NavLink to="https://github.com/ErnestoDLS/2.4---Calculator">Calculator</NavLink></li>
            <p>Created a calculator using vanilla javascript.</p>
            </article>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
