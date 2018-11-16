import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  title: '15条让内心变强大的哲理',
  content: '<img src="//upload-images.jianshu.io/upload_images/12961714-3318dd46510b0806.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt=""/>\n' +
  '          <p>15条让内心变强大的哲理15条让内心变强大的哲理</p>\n' +
  '          <p>15条让内心变强大的哲理15条让内心变强大的哲理</p>\n' +
  '          <p>15条让内心变强大的哲理15条让内心变强大的哲理</p>\n' +
  '          <p>15条让内心变强大的哲理15条让内心变强大的哲理</p>'
})


export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}