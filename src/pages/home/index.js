import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { HomeWrapper, HomeLeft, HomeRight  } from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4531/a71b88d43f0d0a32d6790d43d68b1a4b19264a8f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home