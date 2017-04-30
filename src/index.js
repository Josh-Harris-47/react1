import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Screen1 from './screens/screen1.js';
import Screen2 from './screens/screen2.js';
import Screen3 from './screens/screen3.js';
import Nav from './components/nav.js';
import './styles/app.css';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      screenIndex: 1
    }
  }
  
  updateScreen(newScreen) {
    
    this.setState({screenIndex: newScreen})
  }
  
  render () {
    
    var activeScreen
    
    if(this.state.screenIndex ===1){
      activeScreen = <Screen1/>
    }
    
    if(this.state.screenIndex ===2){
      activeScreen = <Screen2/>
    }
    
    if(this.state.screenIndex ===3){
      activeScreen = <Screen3/>
    }
    
    return (
      <div className="app">
        <div className="app-header"><h1>GETTING STARTED</h1></div>
          <div className="app-wrapper">
            <Nav screenIndex={this.state.screenIndex}/>
            <div className="app-main">
              {activeScreen}
            </div>
          </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App>
  </App>,
  document.getElementById('root')
);
