import { Route, Routes, Navigate } from 'react-router-dom'

import Home from 'containers/home'
import LandingPage from 'containers/landingPage'
import UserProfile from 'containers/userProfile'
import Chat from 'containers/chat'
import ProfileCreation from 'containers/ProfileCreation'
import Register from 'containers/register'
import Login from 'containers/login'
import ImageVarify from 'containers/imageVerify'

const routeList = [
  { path: '/home', component: <Home /> },
  { path: '/landingpage', component: <LandingPage /> },
  { path: '/profile', component: <UserProfile /> },
  { path: '/chat', component: <Chat /> },
  { path: '/createprofile', component: <ProfileCreation /> },
  { path: '/register', component: <Register /> },
  { path: '/login', component: <Login /> },
  { path: '/varify', component: <ImageVarify /> }
]

const AppRoutes = () => {
  return (
    <Routes>
      {routeList.map(item => (
        <Route key={item.path} path={item.path} exact element={item.component} />
      ))}
      <Route path='*' element={<Navigate replace to='/landingPage' />} />
    </Routes>
  )
}

export default AppRoutes
