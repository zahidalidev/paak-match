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
// import Tooltip from '@mui/material/Tooltip'

import 'components/appbar/styles.css'

import logo from 'assets/logo.png'
// import profileIcon from 'assets/profileIcon.png'
import { useSelector } from 'react-redux'
import { nodeBaseURL } from 'config/baseURL'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const { currentprofileDetail } = useSelector(state => state.profile)
  const user = useSelector(state => state.user)
  const [pages, setPages] = useState([{ name: 'Home', path: '/home' }])

  useEffect(() => {
    const token = localStorage.getItem('token')
    let tempPages = [{ name: 'Home', path: '/home' }]
    if (token) {
      tempPages = [...tempPages, { name: 'Matches', path: '/matches' }]
      if (currentprofileDetail.plan == 'premium') {
        tempPages = [...tempPages, { name: 'Chat' }, { name: 'Logout' }]
      } else {
        tempPages = [...tempPages, { name: 'Logout' }]
      }
    } else {
      tempPages = [...tempPages, { name: 'Login' }, { name: 'Register' }]
    }
    setPages(tempPages)
  }, user)

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
                  onClick={handleCloseNavMenu}
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
                onClick={handleCloseNavMenu}
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
                src={`${nodeBaseURL}/${currentprofileDetail.image}`}
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
