import React from 'react'
import Carousel from 'react-multi-carousel'
import PropTypes from 'prop-types'
import Button from 'components/button'

import testimonial_1 from 'assets/Rectangle 40.png'
import testimonial_2 from 'assets/Rectangle 41.png'
import testimonial_3 from 'assets/Rectangle 42.png'

import 'react-multi-carousel/lib/styles.css'
import 'components/testimonials/styles.css'
import { useNavigate } from 'react-router-dom'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

function Testimonial(props) {
  const allTestimonials = [
    {
      id: 0,
      name: 'Hamid & Alisha',

      description: 'We connected through PaakMatch, met each other, and exchanged our ...',
      image: testimonial_1
    },
    {
      id: 1,
      name: 'Ali  & Marium',

      description:
        'I created my profile here on suggestion of my very close friend who also got...',
      image: testimonial_2
    },
    {
      id: 2,
      name: 'Abdul Rehman & Faiqha',

      description: 'Newly married and happy. I am happ I found PaakMatch...',
      image: testimonial_3
    }
  ]
  const navigate = useNavigate()

  return (
    <div className='d-lg-flex flex-column container-fluid justify-content-center align-items-center testimonial-container'>
      <hr className='h-break' />
      <h6 className='testimonial-heading text-uppercase'>
        Millions have found their life partner at Matrimony!
      </h6>
      <div className='col-md-10 testimonial-wrapper'>
        {/* Carousel */}
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={props.deviceType !== 'mobile' ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass='carousel-container'
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={props.deviceType}
          itemClass='carousel-item-padding-40-px'
        >
          {allTestimonials.map((client, index) => (
            <div key={index.toString()} style={{ minWidth: '70%' }} className='col-md-3'>
              <img
                className='position-relative rounded-circle bg-white shadow mx-auto testimonial-img'
                src={client.image}
                alt=''
              />
              <div className='testimonial-body bg-light text-center p-4 pt-0'>
                <h5 style={{ fontWeight: 'bold' }} className='font-weight-medium mt-5 text-black'>
                  {client.name}
                </h5>
                <p className='text-muted font-italic'>{client.profession}</p>
                <p className='m-0'>{client.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <h6 className='testimonial-heading-b text-uppercase'>
        Now it is your turn to be happily married
      </h6>
      <div className='testimonial-btn'>
        <Button
          onClick={() => navigate('/register')}
          title='Sign Up'
          width='19rem'
          borderRadius='12px'
        />
      </div>
    </div>
  )
}

Testimonial.propTypes = {
  deviceType: PropTypes.string
}

export default Testimonial
