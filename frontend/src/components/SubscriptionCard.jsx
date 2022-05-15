import PropTypes from 'prop-types'

import { colors } from 'config/theme'

const SubscriptionCard = ({ sub }) => (
  <div
    className='container'
    style={{
      borderRadius: 10,
      width: '26rem',
      height: '11.3rem',
      backgroundColor: colors.primary,
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      border: '3px outset #ffffff70'
    }}
  >
    <div
      style={{ paddingTop: '1rem', marginLeft: '1rem' }}
      className='d-flex flex-column justify-content-center align-items-start '
    >
      <div className='d-flex flex-row justify-content-start'>
        <p
          style={{ fontSize: '1rem', color: colors.white, marginRight: '1rem', fontWeight: 'bold' }}
        >
          Subscribed by:
        </p>
        <p style={{ fontSize: '1rem', color: colors.white, fontWeight: 'bold' }}>
          {sub.name} ID: {sub.id}
        </p>
      </div>
      <div className='d-flex flex-row justify-content-start'>
        <p
          style={{ fontSize: '1rem', color: colors.white, marginRight: '1rem', fontWeight: 'bold' }}
        >
          Sub ID:
        </p>
        <p style={{ fontSize: '1rem', color: colors.white }}>{sub.subscription_id}</p>
      </div>
      <div className='d-flex flex-row justify-content-start'>
        <p
          style={{ fontSize: '1rem', color: colors.white, marginRight: '1rem', fontWeight: 'bold' }}
        >
          Email:
        </p>
        <p style={{ fontSize: '1rem', color: colors.white }}>{sub.email}</p>
      </div>
      <div className='d-flex flex-row justify-content-start'>
        <p
          style={{ fontSize: '1rem', color: colors.white, marginRight: '1rem', fontWeight: 'bold' }}
        >
          Contact:
        </p>
        <p style={{ fontSize: '1rem', color: colors.white }}>{sub.contact_number}</p>
      </div>
    </div>
  </div>
)

SubscriptionCard.propTypes = {
  sub: PropTypes.object
}

export default SubscriptionCard
