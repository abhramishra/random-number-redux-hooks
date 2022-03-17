import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { increment, decrement, incrementBy } from './actions/countAction'
const store = configureStore()


// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())

// store.dispatch(decrement())

// store.dispatch(incrementBy(10))



ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
  )

