import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'

import { LoginWithToken } from 'services/user'
import AppBar from 'components/appbar'
import Routes from 'components/Routes'
import { USER_LOGIN } from 'store/user'

import 'react-toastify/dist/ReactToastify.css'
import { getProfileDetails } from 'services/profile'
import { ADD_CURRENT_PROFILE } from 'store/profiles'

const App = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const showAppBar =
    pathname == '/createprofile' ||
    pathname == '/verify' ||
    pathname == '/preferences' ||
    pathname == '/teststart' ||
    pathname == '/test'
      ? false
      : true
  console.log('app.js pathname: ', pathname)
  const getUser = async body => {
    try {
      const { data } = await LoginWithToken(body)
      dispatch(USER_LOGIN({ id: data.id, token: data.hash, name: data.name, email: data.email }))
      const { data: details } = await getProfileDetails(data.id)
      console.log('app.js user: ', details)
      dispatch(ADD_CURRENT_PROFILE({ currentprofileDetail: details }))
    } catch (error) {
      console.log('Login Error: ', error)
      toast.error('User Login Faild, Try Again!')
      navigate('/home')
    }
  }

  useEffect(() => {
    let token = localStorage.getItem('token')
    let email = localStorage.getItem('email')
    if (token) {
      getUser({ token: JSON.parse(token), email: JSON.parse(email) })
    } else {
      navigate('/home')
    }
  }, [])

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
