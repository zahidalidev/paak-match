import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

import 'components/appbar/styles.css'

import logo from 'assets/logo.png'

const Header = () => {
  return (
    <AppBar position='static' className='appbar'>
      <Container>
        <Toolbar>
          <Typography variant='h6' noWrap component='div' sx={{ mr: 2, display: { md: 'flex' } }}>
            <img className='logo' src={logo} />
          </Typography>

          <Box
            className='d-flex justify-content-center'
            sx={{ flexGrow: 1, display: { md: 'flex' } }}
          >
            <Button sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.2rem' }}>
              Create Your Profile
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
