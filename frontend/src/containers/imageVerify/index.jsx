import Button from 'components/button'

import sideImg from 'assets/Group 37302.png'

import 'containers/register/styles.css'
import 'containers/imageVerify/styles.css'

const { innerHeight } = window

const VarifyImage = () => {
  let inputRef

  const handleUpload = () => {
    inputRef.click()
    console.log(file)
  }

  const handlevarify = event => {
    console.log(event.target.files.item(0))
  }

  return (
    <div className='d-flex flex-row container-fluid LoginWrapper justify-content-center align-items-center'>
      <div className='d-flex col-md-6 flex-column align-items-center justify-content-end'>
        <div className='d-flex justify-content-center align-items-center'>
          <h2 className='auth-heading varify-paak'>PaakMatch!</h2>
        </div>
        <div className='d-flex col-md-12 flex-column justify-content-center align-items-center'>
          <h4 className='auth-sub-heading varify-heading'>Upload your image to verify</h4>

          <div className='d-flex auth-btn flex-column btn-upload-varify'>
            <input
              onChange={e => handlevarify(e)}
              ref={refParam => (inputRef = refParam)}
              hidden={true}
              type='file'
            />
            <Button onClick={handleUpload} title='Upload' width='25rem' />
          </div>
        </div>
      </div>
      <div className='d-flex col-md-6 justify-content-center align-items-center'>
        <div className='d-flex col-md-10 login-img-wrapper justify-content-start align-items-center'>
          <img
            style={{ objectFit: 'contain', height: innerHeight - 150, marginLeft: -20 }}
            src={sideImg}
          />
        </div>
      </div>
    </div>
  )
}

export default VarifyImage
