import PropsTypes from 'prop-types'

import 'components/subModel/styles.css'
import Button from 'components/button'

const SubModel = ({ show, onCancel, onContinue }) =>
  !show ? null : (
    <div className='d-flex backdrop justify-content-center align-items-center'>
      <div className='d-flex model-back d-flex flex-column'>
        <p className='sub-model-heading'>
          Buy <span style={{ fontWeight: 'bold' }}>Subscription</span> to continue chat
        </p>
        <div className='d-flex flex-row mt-3'>
          <div className='mr-4'>
            <Button onClick={onCancel} height='3rem' title='Cancel' />
          </div>
          <Button onClick={onContinue} height='3rem' title='Continue' />
        </div>
      </div>
    </div>
  )

SubModel.propTypes = {
  show: PropsTypes.bool.isRequired,
  onCancel: PropsTypes.func,
  onContinue: PropsTypes.func
}

export default SubModel
