import { Button } from '@mui/material'
import PropTypes from 'prop-types'

import 'components/button/styles.css'

const CusButton = ({ title }) => {
  return (
    <Button variant='contained' className='header-btn'>
      {title}
    </Button>
  )
}

CusButton.propTypes = {
  title: PropTypes.string.isRequired
}

export default CusButton
