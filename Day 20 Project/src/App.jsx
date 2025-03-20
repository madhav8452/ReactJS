import React from 'react'
import FormData from './component/form'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  
  return (
    <div>
      <Provider store={store}>
        <FormData/>
      </Provider>
    </div>
  )
}

export default App
