import { Button } from '@mui/material'
import PropTypes from 'prop-types'

import 'components/button/styles.css'

const CusButton = ({ title, width = '10.5rem', borderRadius = '0px' }) => {
  return (
    <Button variant='contained' className='header-btn' style={{ width, borderRadius }}>
      {title}
    </Button>
  )
}

CusButton.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  borderRadius: PropTypes.string
}

export default CusButton
