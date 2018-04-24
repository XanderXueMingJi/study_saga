import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* xueSaga() {
  console.log('Hello Xue ming ji!')
}

export function* incrementAsync() {
  console.log('hello');
  yield call(delay, 1000) //delay  延迟    延迟1秒后下面的代码再操作
  yield put({type: 'INCREMENT'}) // 个人觉得是 触发 action 的 INCREMENT
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)//takeEvery:个人觉得是监听 action 触发 INCREMENT_ASYNC
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    xueSaga(),
    watchIncrementAsync()
  ]
}
