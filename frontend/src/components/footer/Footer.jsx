import { useNavigate } from 'react-router-dom'

import { colors } from 'config/theme'

import logo from 'assets/footerLogo.png'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div
        style={{ backgroundColor: colors.secondaryBlack }}
        className='container-fluid  text-white pt-5 px-sm-3 px-md-5'
      >
        <div className='row pt-5'>
          <div className='col-lg-4 col-md-6 mb-4'>
            <div className='col-lg-10 col-md-10'>
              <h4 className='text-white mb-4'>PAAKMATCH</h4>
              <form action=''>
                <p>
                  Existing systems find the match based on physical characteristics. But the
                  drawback of such systems is they don&apos;t rank the matches based on personality
                  traits. “To rank the potential matches based on the Myers-Briggs Test, we need a
                  Matrimonial Application that uses a personality-based as well as the
                  constraints-based procedure to rank the matched profiles.
                </p>
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
              <i className='mr-2 fa fa-map-marker' aria-hidden='true'></i> Lahore, Punjab, Pakistan
            </p>
            <p
              style={{
                marginTop: '2rem',
                fontSize: '0.9rem'
              }}
            >
              <i className='mr-2 fa fa-phone' aria-hidden='true'></i> +92-336-7088018
            </p>
            <p
              style={{
                marginTop: '2rem',
                fontSize: '0.9rem'
              }}
            >
              <i className='mr-2 fa fa-envelope mr-2'></i>support@paakmatch.com
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
                onClick={() => navigate('/home')}
              >
                Home
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
