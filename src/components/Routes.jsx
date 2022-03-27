import { Route, Routes, Navigate } from 'react-router-dom'

import LandingPage from 'containers/landingPage'

const routeList = [{ path: '/landingPage', component: <LandingPage /> }]

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
