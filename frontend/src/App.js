import { ToastContainer } from 'react-toastify'
import AppBar from 'components/appbar'

import Routes from 'components/Routes'
import { useLocation } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const { pathname } = useLocation()
  const showAppBar = pathname != '/createprofile'

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {showAppBar && <AppBar />}
      <Routes />
    </>
  )
}

export default App
