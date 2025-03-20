import { Provider } from "react-redux"
import ReduxCounter from "./reduxCounter"
import store from "./store/store"

function App() {

  return (
    <>
      <Provider store={store}>
        <ReduxCounter/>
      </Provider>
    </>
  )
}

export default App
