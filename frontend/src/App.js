import AppBar from 'components/appbar'

import Routes from 'components/Routes'
import { useLocation } from 'react-router-dom'

const App = () => {
  const { pathname } = useLocation()
  const showAppBar = pathname != '/createprofile'

  return (
    <>
      {showAppBar && <AppBar />}
      <Routes />
    </>
  )
}

export default App
