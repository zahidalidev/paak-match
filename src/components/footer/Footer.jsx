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
          <div className='col-lg-4 col-md-6 mb-4'>
            <div className='col-lg-10 col-md-10'>
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
          <div className='col-lg-3 col-md-6 mb-5'>
            <h5 style={{ fontWeight: 'bold' }} className='text-white mb-4'>
              Get In Touch
            </h5>
            <p
              style={{
                marginTop: '2rem',
                fontSize: '0.9rem'
              }}
            >
              You can contact us on the following platforms or links!
            </p>
            <p
              style={{
                marginTop: '2rem',
                fontSize: '0.9rem'
              }}
            >
              <i className='mr-2 fa fa-map-marker' aria-hidden='true'></i> Lower Mainland Canada
            </p>
            <p
              style={{
                marginTop: '2rem',
                fontSize: '0.9rem'
              }}
            >
              <i className='mr-2 fa fa-phone' aria-hidden='true'></i> 604-PAAKMATCH
            </p>
            <p
              style={{
                marginTop: '2rem',
                fontSize: '0.9rem'
              }}
            >
              <i className='mr-2 fa fa-envelope mr-2'></i>support@paakmatch.ca
            </p>
          </div>
          <div className='col-lg-2 col-md-5 mb-5'>
            <h5 style={{ fontWeight: 'bold' }} className='text-white mb-4'>
              Quick Links
            </h5>
            <div className='d-flex flex-column justify-content-start'>
              <a
                style={{
                  marginTop: '1rem',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
                className='text-white mb-2'
                onClick={() => console.log('/home')}
              >
                Home
              </a>
              <a
                style={{
                  marginTop: '1rem',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
                className='text-white mb-2'
                onClick={() => console.log('/about')}
              >
                About Us
              </a>

              <a
                style={{
                  marginTop: '1rem',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
                className='text-white mb-2'
                onClick={() => console.log('/pricing')}
              >
                Pricing
              </a>
              <a
                style={{
                  marginTop: '1rem',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
                className='text-white'
                onClick={() => console.log('/contact')}
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 mb-5'>
            <a>
              <h1 className='text-secondary mb-3'>
                <img style={{ width: '16rem' }} src={logo} />
              </h1>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: colors.secondaryBlack }}
        className='container-fluid  text-white py-4 px-sm-3 px-md-5'
      >
        <p className='m-0 text-center text-white'>
          &copy;
          <a className='text-white font-weight-medium'>PaakMatch {new Date().getFullYear()}</a>. All
          Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
