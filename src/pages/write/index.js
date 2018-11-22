import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {actionCreators} from "../login/store";



class Write extends Component {
  render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <div>写文章野蛮</div>
      )
    } else {
      return <Redirect to='/login' />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})


export default connect(mapState, null)(Write)