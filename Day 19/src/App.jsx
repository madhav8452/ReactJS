import React from 'react'
import { Provider } from 'react-redux'
import FetchRander from './FetchRander'
import store from './store/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <FetchRander/>
      </Provider>
    </>
  )
}

export default App
