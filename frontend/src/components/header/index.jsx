import Button from 'components/button'

import 'components/header/styles.css'

import backimg1 from 'assets/slider/v2_12.png'
import backimg2 from 'assets/slider/v2_13.png'
import headerImg1 from 'assets/slider/v2_17.png'
import headerImg2 from 'assets/slider/v2_18.png'
import headerImg3 from 'assets/slider/v2_14.png'
import headerImg4 from 'assets/slider/v2_15.png'

const Header = () => {
  return (
    <>
      <div className='d-flex flex-row align-align-items-center main-header-back'>
        <div className='d-flex flex-column col-5 '>
          <img className='back-img1' src={backimg2} />
        </div>
        <div className='d-flex flex-column col-5 '>
          <img className='back-img2' src={backimg1} />
        </div>
      </div>
      <div className='main-header'>
        <div className='header-body'>
          <div className='header-left'>
            <img src={headerImg1} className='header-img1'></img>

            <div className='c-m-header'>
              <img src={headerImg2} className='header-img2'></img>
              <span className='header-c1'>Muslims don’t date they marry</span>
            </div>
            <span className='header-c2'>Muslims don’t date they marry</span>
          </div>
          <div className='header-right d-flex flex-column'>
            <div className='d-flex flex-row'>
              <img src={headerImg3} className='header-img3'></img>
              <img src={headerImg4} className='header-img4'></img>
            </div>
            <span className='header-description'>
              10 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore.
            </span>
          </div>
        </div>
        <div className='header-bottom'>
          <div className='d-flex col-4 header-c3-container justify-content-center'>
            <span className='header-c3 '>Matrimonial</span>
          </div>
          <div className='d-flex col-5 justify-content-center'>
            <Button title='Get Match' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
