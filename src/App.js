import React, { Component } from 'react';
import { Globalstyle } from './style'
import { GlobalFontstyle } from './statics/iconfont/iconfont'
import Header from './common/header'
import Home from './pages/home/'
import Detail from './pages/detail/'
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
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home} />
              <Route path='/detail/:id' exact component={Detail} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
