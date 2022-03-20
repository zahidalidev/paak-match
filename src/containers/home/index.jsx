import { momentVideo, ourPromises } from 'utils/constants'
import Header from 'components/header'
import Button from 'components/button'
import Testimonial from 'components/testimonials/Testimonial'
import Faq from 'components/Faq'

import homeImg1 from 'assets/slider/v2_14.png'
import homeImg2 from 'assets/Rectangle 12.png'
import shyChooseImg from 'assets/Rectangle 39.png'
import momentBottom from 'assets/SVG File (1) 2.png'

import 'containers/home/styles.css'

const Home = () => {
  return (
    <div>
      <Header />
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
      <div className='promise-section d-flex flex-column justify-content-center align-items-center'>
        <div>
          <h2 className='pro-heading'>Our Promise</h2>
        </div>
        <div className='pro-container d-flex flex-row row justify-content-center align-items-center'>
          {ourPromises.map((item, index) => (
            <div
              key={index.toString}
              className='pro-wrapper d-flex flex-column col-md-4 justify-content-center align-items-center'
            >
              <img className='pro-icon' src={item.img} />
              <h4 className='pro-c'>{item.description}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className='intro-section d-flex justify-content-around align-items-center'>
        <div className='d-flex row flex-row col-md-10'>
          <div className='d-flex flex-column col-md-8'>
            <div>
              <h2 className='intro-heading'>We help at every stage</h2>
              <h4 className='mt-3 intro-c'>
                Matrimoni service - Pakistan’s No. 1 and Most Trusted Matrimony service, will help
                Millions like you find matches from across different socities.
              </h4>
            </div>
            <div className='choose-wrapper'>
              <h2 className='intro-heading'>Why Choose us as Matrimony Service</h2>
              <div className='choose-des-wrapper mt-3'>
                <li className='choose-des intro-c'>No.1 & most trusted matrimony service</li>
                <li className='choose-des intro-c'>100% verified moblie numbers</li>
                <li className='choose-des intro-c'>
                  Our largest number of proflies increases your chances of meeting the right person
                </li>
                <li className='choose-des intro-c'>Mlilions have found their life partner here</li>
                <li className='choose-des intro-c'>Trusted service for more than 21 years</li>
              </div>
            </div>
            <div className='intro-btn'>
              <Button title='Sign Up' width='19rem' borderRadius='12px' />
            </div>
          </div>
          <div className='d-flex flex-column col-md-4'>
            <img className='intro-img' src={shyChooseImg} />
          </div>
        </div>
      </div>
      <div className='moment-container d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2 className='moment-heading'>Some moments</h2>
          <img className='moment-bottom-img' src={momentBottom} />
        </div>
        <iframe
          className='video-responsive'
          auto
          src={momentVideo}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        <h4 className='moment-c'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore.
        </h4>
      </div>
      <Testimonial />
      <Faq />
    </div>
  )
}

export default Home
