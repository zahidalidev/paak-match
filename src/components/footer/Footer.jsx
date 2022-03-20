import Button from '@material-ui/core/Button'

import { colors } from 'config/theme'

import logo from 'assets/footerLogo.png'

const Footer = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: colors.secondaryBlack }}
        className='container-fluid  text-white pt-5 px-sm-3 px-md-5'
      >
        <div className='row pt-5'>
          <div className='col-lg-3 col-md-6 mb-5'>
            <a>
              <h1 className='text-secondary mb-3'>
                <img style={{ width: '16rem' }} src={logo} />
              </h1>
            </a>
          </div>
          <div className='col-lg-3 col-md-6 mb-5'>
            <h4 className='text-white mb-4'>Get In Touch</h4>
            <p
              style={{
                fontFamily: 'Courier',
                wordSpacing: -4,
                fontSize: '0.9rem'
              }}
            >
              You can contact us on the following platforms or links!
            </p>
            <p
              style={{
                fontFamily: 'Courier',
                wordSpacing: -4,
                fontSize: '0.9rem'
              }}
            >
              <i className='fa fa-map-marker' aria-hidden='true'></i> Lower Mainland Canada
            </p>
            <p
              style={{
                fontFamily: 'Courier',
                wordSpacing: -4,
                fontSize: '0.9rem'
              }}
            >
              <i className='fa fa-phone' aria-hidden='true'></i> 604-LAUNDRY
            </p>
            <p
              style={{
                fontFamily: 'Courier',
                wordSpacing: -4,
                fontSize: '0.9rem'
              }}
            >
              <i className='fa fa-envelope mr-2'></i>support@paakmatch.ca
            </p>
          </div>
          <div className='col-lg-3 col-md-6 mb-5'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='d-flex flex-column justify-content-start'>
              <a
                style={{
                  fontFamily: 'Courier',
                  wordSpacing: -4,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
                className='text-white mb-2'
                onClick={() => console.log('/home')}
              >
                <i className='fa fa-angle-right mr-2'></i>
                Home
              </a>
              <a
                style={{
                  fontFamily: 'Courier',
                  wordSpacing: -4,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
                className='text-white mb-2'
                onClick={() => console.log('/about')}
              >
                <i className='fa fa-angle-right mr-2'></i>
                About Us
              </a>

              <a
                style={{
                  fontFamily: 'Courier',
                  wordSpacing: -4,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
                className='text-white mb-2'
                onClick={() => console.log('/pricing')}
              >
                <i className='fa fa-angle-right mr-2'></i>
                Pricing
              </a>
              <a
                style={{
                  fontFamily: 'Courier',
                  wordSpacing: -4,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
                className='text-white'
                onClick={() => console.log('/contact')}
              >
                <i className='fa fa-angle-right mr-2'></i>
                Contact Us
              </a>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 mb-5'>
            <h4 className='text-white mb-4'>Newsletter</h4>
            <form action=''>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control border-0'
                  placeholder='Your Name'
                  required='required'
                  onChange={e => console.log(e.target.value)}
                  style={{ borderRadius: '0.5rem' }}
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control border-0'
                  placeholder='Your Email'
                  required='required'
                  onChange={e => console.log(e.target.value)}
                  style={{ borderRadius: '0.5rem' }}
                />
              </div>
              <div>
                <Button
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: colors.white
                  }}
                  className='btn btn-primary py-md-2 px-md-4 mt-2'
                  variant='contained'
                  onClick={() => console.log()}
                >
                  Submitt Now
                </Button>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <div className='row'>
                  <div className='col-6' style={{ marginTop: '0.2rem' }}>
                    <a style={{ cursor: 'pointer' }}></a>
                  </div>
                  <div className='col-6'>
                    <a style={{ cursor: 'pointer' }}></a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: colors.secondaryBlack }}
        className='container-fluid  text-white py-4 px-sm-3 px-md-5'
      >
        <p className='m-0 text-center text-white'>
          &copy;
          <a className='text-white font-weight-medium'>PaakMatch 2021</a>. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
