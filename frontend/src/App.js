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
  const showAppBar = pathname != '/createprofile'

  const getUser = async token => {
    try {
      const { data } = await LoginWithToken(token)
      dispatch(USER_LOGIN({ id: data.id, token: data.hash, name: data.name, email: data.email }))
      const { data: details } = await getProfileDetails(data.id)
      dispatch(ADD_CURRENT_PROFILE({ currentprofileDetail: details }))
    } catch (error) {
      console.log('Login Error: ', error)
      toast.error('User Login Faild, Try Again!')
      navigate('/register')
    }
  }

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      getUser({ token: JSON.parse(token) })
    } else {
      navigate('/register')
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
