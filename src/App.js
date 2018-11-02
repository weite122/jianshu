import React, { Component } from 'react';
import { Globalstyle } from './style'
import { GlobalFontstyle } from './statics/iconfont/iconfont'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Globalstyle></Globalstyle>
        <GlobalFontstyle></GlobalFontstyle>
        <Header></Header>
      </div>
    )
  }
}

export default App;
