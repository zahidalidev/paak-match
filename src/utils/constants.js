import { Home, Article, Photo, People, Settings } from '@mui/icons-material'

import callIcon from 'assets/callIcon.png'
import docIcon from 'assets/docIcon.png'
import trustIcon from 'assets/trustIcon.png'

export const momentVideo = 'https://www.youtube.com/embed/PaUqCS1Tsxg?controls=0'

export const sideBarHomeMenues = [
  {
    title: 'Home',
    path: '/home',
    icon: <Home sx={{ height: 25, width: 25 }} className='home-menu-icons' />
  },
  {
    title: 'Edit Preferences',
    path: '/editpreferences',
    icon: <Article sx={{ height: 25, width: 25 }} className='home-menu-icons' />
  },
  {
    title: 'Your Matches',
    path: '/matches',
    icon: <Photo sx={{ height: 25, width: 25 }} className='home-menu-icons' />
  },
  {
    title: 'Edit Profile',
    path: '/editprofile',
    icon: <People sx={{ height: 25, width: 25 }} className='home-menu-icons' />
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Settings sx={{ height: 25, width: 25 }} className='home-menu-icons' />
  }
]

export const ourPromises = [
  {
    description: 'Contact genuine profiles with 100% verified mobile numbers',
    img: callIcon
  },
  {
    description: 'Highest number of documented marriages online',
    img: docIcon
  },
  {
    description: 'The most trusted matrimony brand',
    img: trustIcon
  }
]

export const faqs = [
  {
    question: 'How to register on PaakMatch Matrimony?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    question: 'What are come top-notch safety measures in PaakMatch Matrimony?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    question: 'What is PaakMatch Matrimony "Prime"?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    question: 'Why choose PaakMatch Premium Membership plan?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    question: 'What are the features of PaakMatch Matrimony?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    question: 'How can I varify my profile on PaakMatch Matrimony?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    question: 'What is assisted service from PaakMatch Matrimony?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  }
]
