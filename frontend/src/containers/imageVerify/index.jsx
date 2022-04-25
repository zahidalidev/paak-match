import { useRef, useState } from 'react'
import Webcam from 'react-webcam'

import Button from 'components/button'

import sideImg from 'assets/Group 37302.png'

import 'containers/register/styles.css'
import 'containers/imageVerify/styles.css'
import { toast } from 'react-toastify'
import { addProfileImage, verifyProfileImages } from 'services/user'
import { useSelector } from 'react-redux'

const { innerHeight } = window

const VerifyImage = () => {
  let inputRef
  const webcamRef = useRef(null)
  const [uploadedImage, setUploadedImage] = useState(null)
  const [imgSrc, setImgSrc] = useState(null)
  const [showCamera, setShowCamera] = useState(false)
  const user = useSelector(state => state.user)

  const handleUpload = () => {
    inputRef.click()
    setShowCamera(true)
  }

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
  }

  const handlevarify = async () => {
    if (!imgSrc || !uploadedImage) {
      toast.error('Please select both images!')
      return
    } else {
      let data = new FormData()
      const blob = await fetch(imgSrc).then(res => res.blob())
      data.append('image1', blob)
      data.append('image2', uploadedImage)

      try {
        const { data: result } = await verifyProfileImages(data)
        if (result) {
          let dataP = new FormData()
          dataP.append('file', uploadedImage)
          const res = await addProfileImage(dataP, user.id)
          console.log(res)
        } else {
          toast.error('Picture not verified try again!')
        }
      } catch (error) {
        console.log('Verification error: ', error)
      }
    }
  }

  console.log('uploadedImage: ', uploadedImage)

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
              onChange={e => setUploadedImage(e.target.files.item(0))}
              ref={refParam => (inputRef = refParam)}
              hidden={true}
              type='file'
            />
            {uploadedImage && (
              <img
                style={{ height: '10rem', objectFit: 'contain', marginBottom: 15 }}
                src={URL.createObjectURL(uploadedImage)}
              />
            )}

            <Button onClick={handleUpload} title='Upload' width='25rem' />
          </div>
          <div className='d-flex auth-btn justify-content-center align-items-center flex-column btn-upload-varify'>
            {imgSrc && (
              <img
                style={{ height: '10rem', objectFit: 'contain', marginBottom: 15 }}
                src={imgSrc}
              />
            )}
            {showCamera && (
              <Webcam
                style={{ height: '10rem', objectFit: 'contain', marginBottom: 15 }}
                ref={webcamRef}
                audio={false}
                screenshotFormat='image/jpeg'
              />
            )}
            {uploadedImage && (
              <Button
                onClick={capture}
                title={imgSrc ? 'Capture Again' : 'Capture'}
                width='25rem'
              />
            )}
          </div>
          <div className='d-flex auth-btn flex-column btn-upload-varify mb-4'>
            {uploadedImage && imgSrc && (
              <Button onClick={handlevarify} title='Verify' width='25rem' />
            )}
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

export default VerifyImage
