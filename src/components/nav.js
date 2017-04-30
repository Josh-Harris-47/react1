import React, { Component } from 'react';

class Nav extends Component {
  render(){
    return (
      <div className="app-nav">
        <div
          onClick={(event) => { this.updateScreen(1)}}
          className={this.props.screenIndex === 1 ? 'nav-item screen1 active-nav' : 'nav-item screen1' }>
          <p>screen 1</p>
        </div>
        <div
          onClick={(event) => {this.updateScreen(2)}}
          className={this.props.screenIndex === 2 ? 'nav-item screen2 active-nav' : 'nav-item screen2' }>
          <p>screen 2</p>
        </div>
        <div
          onClick={(event) => {this.updateScreen(3)}}
          className={this.props.screenIndex === 3 ? 'nav-item screen3 active-nav' : 'nav-item screen3' }>
          <p>screen 3</p>
        </div>
      </div>
    )
  }
}
module.exports=Nav