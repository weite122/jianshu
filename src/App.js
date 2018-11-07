import React, { Component } from 'react';
import { Globalstyle } from './style'
import { GlobalFontstyle } from './statics/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Globalstyle />
        <GlobalFontstyle />
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
              <div>
                <Route path='/' exact render={() => <div>home</div>} />
                <Route path='/detail' exact render={() => <div>detail</div>} />
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    )
  }
}

export default App;
