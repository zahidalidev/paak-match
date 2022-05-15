import Form from 'components/form'
import Header from 'components/Header'
import { useLocation } from 'react-router-dom'

const ProfileCreation = () => {
  const { pathname } = useLocation()
  return (
    <>
      {pathname == '/createprofile/69' ? null : <Header />}
      <Form />
    </>
  )
}

export default ProfileCreation
