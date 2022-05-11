import { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import Tooltip from '@mui/material/Tooltip'

import { nodeBaseURL } from 'config/baseURL'

import logo from 'assets/logo.png'
import profileIcon from 'assets/profileIcon.png'

import 'components/appbar/styles.css'
import { USER_LOGOUT } from 'store/user'
import { REMOVE_PROFILE } from 'store/profiles'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const { currentprofileDetail } = useSelector(state => state.profile)
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [pages, setPages] = useState([{ name: 'Home', path: '/home' }])

  const token = localStorage.getItem('token')
  useEffect(() => {
    let tempPages = [{ name: 'Home', path: '/home' }]
    if (token) {
      tempPages = [...tempPages, { name: 'Matches', path: '/matches' }]
      console.log('currentprofileDetail: ', currentprofileDetail, user)
      if (currentprofileDetail.plan == 'premium') {
        tempPages = [
          ...tempPages,
          { name: 'Chat', path: '/chat' },
          { name: 'Logout', path: '/home' }
        ]
      } else {
        tempPages = [...tempPages, { name: 'Logout', path: '/home' }]
      }
    } else {
      tempPages = [
        ...tempPages,
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' }
      ]
    }
    setPages(tempPages)
  }, [user, currentprofileDetail, token])

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }

  // const handleOpenUserMenu = event => {
  //   setAnchorElUser(event.currentTarget)
  // }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogout = () => {
    console.log('LOgout')
    dispatch(USER_LOGOUT())
    dispatch(REMOVE_PROFILE())
  }

  return (
    <AppBar position='static' className='appbar'>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img className='logo' src={logo} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className='menu'
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index.toString()}
                  className='menu-items'
                  onClick={page.name === 'Logout' ? handleLogout : () => navigate(page.path)}
                >
                  <Typography textAlign='center'>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
            pages
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img className='logo' src={logo} />
          </Typography>
          <Box className='menu' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                className='menu-items'
                key={index.toString()}
                onClick={page.name === 'Logout' ? handleLogout : () => navigate(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title='Open settings'> */}
            <IconButton sx={{ p: 0 }}>
              <Avatar
                className='profile-icon'
                alt='Profile icon'
                src={
                  localStorage.getItem('token')
                    ? `${nodeBaseURL}/${currentprofileDetail.image}`
                    : profileIcon
                }
              />
            </IconButton>
            {/* </Tooltip> */}
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
