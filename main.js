// https://redux-saga-in-chinese.js.org/docs/introduction/BeginnerTutorial.html
// npm start请打开    http://localhost:9966/
import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

// import Counter from './Counter'
// import reducer from './reducers'
import Counter from './app/Counter'
import reducer from './app/reducers'


const store = createStore(reducer)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
