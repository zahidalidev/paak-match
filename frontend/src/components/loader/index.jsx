import PropsTypes from 'prop-types'

import 'components/loader/styles.css'

const Loader = ({ show }) =>
  !show ? null : (
    <div className='backdrop'>
      <div className='loading-spinner-wrapper'>
        <div className='loading-spinner'>
          <div></div>
        </div>
      </div>
    </div>
  )

Loader.propTypes = {
  show: PropsTypes.bool.isRequired
}

export default Loader
