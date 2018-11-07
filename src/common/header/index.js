import React, {Component} from 'react'
import {
  HeaderWrapper, Logo, Nav,
  NavItem, NavSearch, Addition, Button,
  SearchWrapper, SearchInfo, SearchInfoTitle,
  SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreators} from './store'


class Header extends Component {
  getListArea() {
    const {focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
    const pageList = []
    const newList = list.toJS()
    if (newList.length) {
      for (let i = page* 10; i < (page+1) * 10; i++ ) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames='slide'
            >
              <NavSearch
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
                className={focused ? 'focused' : ''}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
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


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
     (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      console.log(originAngle)
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if (page < totalPage - 1) {
        dispatch(actionCreators.changePage(page + 1))
      }else {
        dispatch(actionCreators.changePage(0))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

