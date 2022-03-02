import { Route, Routes, Navigate } from 'react-router-dom'

import People from 'containers/home'

const routeList = [{ path: '/home', component: <People /> }]

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
