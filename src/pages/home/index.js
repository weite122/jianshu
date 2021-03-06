import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { HomeWrapper, HomeLeft, HomeRight, BackTop  } from './style'
import { actionCreators } from './store'

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img'
               src="//upload.jianshu.io/admin_banners/web_images/4531/a71b88d43f0d0a32d6790d43d68b1a4b19264a8f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
               alt=""/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        { this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}

      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow(e) {
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopshow(true))
    } else {
      dispatch(actionCreators.toggleTopshow(false))
    }
  }
})



export default connect(mapState, mapDispatch)(Home)