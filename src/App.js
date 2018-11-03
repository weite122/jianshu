import React, { Component } from 'react';
import { Globalstyle } from './style'
import { GlobalFontstyle } from './statics/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Globalstyle></Globalstyle>
        <GlobalFontstyle></GlobalFontstyle>
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </div>
    )
  }
}

export default App;
