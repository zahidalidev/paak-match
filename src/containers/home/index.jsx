import Header from 'components/header'
import Button from 'components/button'

import homeImg1 from 'assets/slider/v2_14.png'
import homeImg2 from 'assets/Rectangle 12.png'

import 'containers/home/styles.css'

const Home = () => {
  return (
    <div>
      <Header />
      <section>
        <div className='d-flex row section-2'>
          <div className='d-flex col-md-7 flex-row justify-content-end'>
            <img src={homeImg1} className='home-img4' />
            <img src={homeImg2} className='home-img5' />
          </div>
          <div className='d-flex flex-column col-md-4'>
            <h3 className='c-section2'>Do you struggle with personality matchmaking</h3>
            <ul className='qu-wrapper'>
              <li className='qu-list'>Problem number one goes here</li>
              <li className='qu-list'>Problem number one goes here</li>
              <li className='qu-list'>Problem number one goes here</li>
              <li className='qu-list'>Problem number one goes here</li>
            </ul>
            <div className='qu-btn'>
              <Button title='Get Match' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
