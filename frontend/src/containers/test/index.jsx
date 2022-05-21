import { useState } from 'react'
import { ArrowForward } from '@material-ui/icons'
// import Radio from '@mui/material/Radio'
// import RadioGroup from '@mui/material/RadioGroup'
// import FormControlLabel from '@mui/material/FormControlLabel'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { itemsPerPage, personalitiesCombinations } from 'utils/constants'
import { addPersonality, detectPersonality } from 'services/user'
import Button from 'components/button'
import Loader from 'components/loader'

import bluecircle from 'assets/bluecircle.png'
import blueOutlineCircle from 'assets/blueOutlineCircle.png'
import orangeCircle from 'assets/orangeCircle.png'
import orangeOutlineCircle from 'assets/orangeOutlineCircle.png'

import 'containers/test/styles.css'

const Test = () => {
  const [endOffset, setEndOffset] = useState(itemsPerPage)
  const [itemOffset, setItemOffset] = useState(0)
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [backButton, setBackButton] = useState(false)

  const [questionsData, setQuestionsData] = useState([
    {
      id: 1,
      category: 'EI',
      question: 'You regularly make new friends',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 2,
      category: 'EI',
      question:
        'At social events, you usually try to introduce yourself to new people and also enjoy talking to the ones you already know',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 3,
      category: 'EI',
      question:
        'You feel comfortable just walking up to someone you find interesting and striking up a conversation',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 4,
      category: 'EI',
      question: 'You enjoy participating in group activities',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 5,
      category: 'EI',
      question: 'You enjoy making phone calls',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 6,
      category: 'EI',
      question:
        'In your social circle, you are often the one who contacts your friends and initiates activities',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 7,
      category: 'EI',
      question:
        'Your personal work style is not closer to spontaneous bursts of energy than organized and consistent efforts',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 8,
      category: 'EI',
      question: 'You would not love a job that requires you to work alone most of the time',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 9,
      category: 'EI',
      question:
        'You feel more drawn to places with busy, bustling atmospheres than quiet, intimate places',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 10,
      category: 'SN',
      question: 'You solve problems by working through facts until you understand the problem',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 11,
      category: 'SN',
      question:
        'You remember events as snapshots of what actually happened and dont read between the lines about their meaning',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 12,
      category: 'SN',
      question: 'You are pragmatic (practical) and look to the bottom line',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 13,
      category: 'SN',
      question: 'You start with facts and then form a big picture',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 14,
      category: 'SN',
      question: 'You trust experience first and trust words and symbols less',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 15,
      category: 'SN',
      question:
        'Sometimes you pay so much attention to facts, either present or past, that you miss new possibilities',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 16,
      category: 'SN',
      question:
        'You work well with details and are happy to dig into the nitty-gritty(important aspects) of a situation',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 17,
      category: 'SN',
      question: 'You like concrete tasks and tend to pursue things in a linear sequence',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 18,
      category: 'SN',
      question: 'You do not doubt things and test everything',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 19,
      category: 'TF',
      question: 'Seeing other people cry can not easily make you feel like you want to cry too',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 20,
      category: 'TF',
      question: 'You enjoy watching people argue',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 21,
      category: 'TF',
      question:
        'You think world would be a better place if they relied more on rationality and less on feelings',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 22,
      category: 'TF',
      question: 'You are not sentimental',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 23,
      category: 'TF',
      question: 'You are more inclined to follow your head than your heart',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 24,
      category: 'TF',
      question:
        'Your happiness comes from your own accomplishments rather than helping others accomplish things',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 25,
      category: 'TF',
      question: 'Your mood can change very quickly',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 26,
      category: 'TF',
      question: 'You lose patience with people who are not as efficient as you',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 27,
      category: 'TF',
      question:
        'You rarely find it easy to empathize with a person whose experiences are very different from yours',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 28,
      category: 'JP',
      question: 'You often make a backup plan for a backup plan',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 29,
      category: 'JP',
      question: 'You prefer to completely finish one project before starting another',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 30,
      category: 'JP',
      question: 'You like to use organizing tools like schedules and lists',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 31,
      category: 'JP',
      question:
        'You rarely prefer just doing what you feel like at any given moment instead of planning a particular daily routine',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 32,
      category: 'JP',
      question: 'You like to have a to-do list for each day',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 33,
      category: 'JP',
      question:
        'If your plans are interrupted, your top priority is to get back on track as soon as possible',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 34,
      category: 'JP',
      question: 'You complete things methodically without skipping over any steps',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 35,
      category: 'JP',
      question: 'You do not struggle with the deadlines, they are easy for you',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    },
    {
      id: 36,
      category: 'JP',
      question: 'You like to get your work done before playing',
      answerA: 'Agree',
      answerB: 'Disagree',
      choice: null
    }
  ])

  const handleNext = async () => {
    const tempChoices = [...questionsData]
    if (endOffset < tempChoices.length) {
      window.scrollTo(0, 0)
      setBackButton(true)
      setItemOffset(itemOffset + itemsPerPage)
      setEndOffset(endOffset + itemsPerPage)
    } else if (endOffset === tempChoices.length) {
      let temp = tempChoices.filter(item => item.choice === null)
      if (temp.length === 0) {
        await handleSubmit()
      } else {
        toast.error('Please Mark all the questions')
      }
    }
  }

  const handleBack = () => {
    if (itemOffset > 0) {
      window.scrollTo(0, 0)
      setItemOffset(itemOffset - itemsPerPage)
      setEndOffset(endOffset - itemsPerPage)
    }
    if (itemOffset <= 12) {
      setBackButton(false)
    } else {
      setBackButton(true)
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    let choices1 = []
    let choices2 = []
    let choices3 = []
    let choices4 = []
    questionsData.forEach((item, index) => {
      if (index < 9) choices1.push(item.choice)
      else if (index < 18) choices2.push(item.choice)
      else if (index < 27) choices3.push(item.choice)
      else choices4.push(item.choice)
    })
    try {
      const { data } = await detectPersonality(choices1, choices2, choices3, choices4)
      let predictedPersonality = ''
      data.forEach((element, index) => {
        predictedPersonality += personalitiesCombinations[index][element]
      })
      await addPersonality({ id: user.id, type: predictedPersonality })
      setLoading(false)
      navigate('/matches')
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
    setLoading(false)
  }

  const handleChange = (value, index) => {
    const tempQues = [...questionsData]
    tempQues[index - 1].choice = parseInt(value)
    console.log('tempQues: ', tempQues)
    setQuestionsData(tempQues)
  }

  return (
    <div className='d-flex test-question-contaienr container-fluid flex-column justify-content-center align-items-center'>
      <Loader show={loading} />
      {questionsData.slice(itemOffset, endOffset).map(item => (
        <div key={item.id.toString()} className='d-flex flex-column col-md-8 questions-wrapper'>
          <div className='d-flex flex-column justify-content-center align-items-center mt-3 range-pref-b'>
            <div className='d-flex col-md-11 flex-row mt-3 '>
              <div className='d-flex col-md-2'>
                <ArrowForward className='arrow-f-question' />
              </div>
              <div className='d-flex col-md-8 justify-content-center align-items-center'>
                <h5>{item.question}</h5>
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-center col-md-10 test-options-wrapper text-center'>
              <div className='d-flex flex-row justify-content-center align-items-center text-center col-md-3'>
                <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }} className='mt-4 mr-5'>
                  {item.answerA}
                </p>
                <img
                  onClick={() => handleChange(0, item.id)}
                  className='bluecircle1'
                  src={item.choice == 0 ? blueOutlineCircle : bluecircle}
                />
              </div>
              <div className='d-flex flex-row justify-content-center align-items-center text-center col-md-2'>
                <img
                  onClick={() => handleChange(0, item.id)}
                  className='bluecircle2'
                  src={item.choice == 0 ? blueOutlineCircle : bluecircle}
                />
              </div>
              <div className='d-flex flex-row justify-content-center align-items-center text-center col-md-2'>
                <img
                  onClick={() => handleChange(1, item.id)}
                  className='bluecircle3'
                  src={item.choice == 1 ? blueOutlineCircle : bluecircle}
                />
              </div>
              <div className='d-flex flex-row justify-content-center align-items-center text-center col-md-2'>
                <img
                  onClick={() => handleChange(1, item.id)}
                  className='bluecircle2'
                  src={item.choice == 1 ? orangeOutlineCircle : orangeCircle}
                />
              </div>
              <div className='d-flex flex-row justify-content-center align-items-center text-center col-md-3'>
                <img
                  onClick={() => handleChange(1, item.id)}
                  className='bluecircle1'
                  src={item.choice == 1 ? orangeOutlineCircle : orangeCircle}
                />
                <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }} className='mt-4 ml-5'>
                  {item.answerB}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className='d-flex flex-row next-btn-wrapper'>
        <div>{backButton && <Button title='BACK' width='15rem' onClick={handleBack} />}</div>
        <div className='ml-3'>
          <Button title='NEXT' width='15rem' onClick={handleNext} />
        </div>
      </div>
    </div>
  )
}

export default Test
