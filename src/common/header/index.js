import React, { Component } from 'react'
import {HeaderWrapper, Logo, Nav,
  NavItem, NavSearch, Addition, Button,
  SearchWrapper, SearchInfo, SearchInfoTitle,
  SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style'
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators }  from './store'


class Header extends Component {
   getListArea () {
    if(this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={300}
              classNames='slide'
            >
              <NavSearch
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
                className={this.props.focused ? 'focused' : ''}
              >
              </NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Button className='writting'>
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}






const mapStateToProps =  (state) => {
  return {
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

