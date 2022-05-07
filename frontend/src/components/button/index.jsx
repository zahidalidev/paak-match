import { Button as MuiButton } from '@mui/material'
import PropTypes from 'prop-types'

import 'components/button/styles.css'

const Button = ({ title, width = '10.5rem', borderRadius = '0px', height = '3.4rem', onClick }) => {
  return (
    <MuiButton
      onClick={onClick}
      variant='contained'
      className='header-btn'
      style={{ width, height, borderRadius, color: '#ffffff' }}
    >
      {title}
    </MuiButton>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
