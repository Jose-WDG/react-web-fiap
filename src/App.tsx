// pages
import { Fragment } from "react"
import { Home } from "./pages"
import { GlobalStyle } from "./styles/globalStyles"
import { toast, ToastContainer } from 'react-toastify';
import { Router } from "./router";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ToastContainer />
      <Router />
    </Fragment>
  )
}

export default App
