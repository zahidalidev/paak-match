import { Route, Routes, Navigate } from 'react-router-dom'

import Matches from 'containers/matches'
import Home from 'containers/home'
import UserProfile from 'containers/userProfile'
import Chat from 'containers/chat'
import ProfileCreation from 'containers/ProfileCreation'
import Register from 'containers/register'
import Login from 'containers/login'
import ImageVerify from 'containers/imageVerify'
import TestStart from 'containers/testStart'
import Preferences from 'containers/preferences'
import Test from 'containers/test'
import Subscription from 'containers/subscription'

const routeList = [
  { path: '/matches', component: <Matches /> },
  { path: '/home', component: <Home /> },
  { path: '/profile/:id', component: <UserProfile /> },
  { path: '/chat/:id1/:id2', component: <Chat /> },
  { path: '/chat', component: <Chat /> },
  { path: '/createprofile', component: <ProfileCreation /> },
  { path: '/createprofile/:id', component: <ProfileCreation /> },
  { path: '/register', component: <Register /> },
  { path: '/login', component: <Login /> },
  { path: '/verify', component: <ImageVerify /> },
  { path: '/teststart', component: <TestStart /> },
  { path: '/preferences', component: <Preferences /> },
  { path: '/preferences/:id', component: <Preferences /> },
  { path: '/test', component: <Test /> },
  { path: '/subscription', component: <Subscription /> }
]

const AppRoutes = () => {
  return (
    <Routes>
      {routeList.map(item => (
        <Route key={item.path} path={item.path} exact element={item.component} />
      ))}
      <Route path='*' element={<Navigate replace to='/home' />} />
    </Routes>
  )
}

export default AppRoutes
