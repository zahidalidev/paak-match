import { useState } from 'react'
import { ArrowForward } from '@material-ui/icons'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
// import FormControl from '@mui/material/FormControl'

import 'containers/test/styles.css'
import Button from 'components/button'
import { toast } from 'react-toastify'
import { detectPersonality } from 'services/user'

const Test = () => {
  const itemsPerPage = 12
  const [endOffset, setEndOffset] = useState(itemsPerPage)
  const [itemOffset, setItemOffset] = useState(0)

  const [questionsData, setQuestionsData] = useState([
    {
      id: 1,
      category: 'EI',
      question: 'At a social event I:',
      answerA: 'Interact with many people including strangers',
      answerB: 'Interact with a few people I know',
      choice: null
    },
    {
      id: 2,
      category: 'EI',
      question: 'At parties I:',
      answerA: 'Stay late with increasing energy',
      answerB: 'Leave early with decreased energy',
      choice: null
    },
    {
      id: 3,
      category: 'EI',
      question: 'In my social groups I:',
      answerA: "Keep abreast of other's happenings",
      answerB: 'Get behind on the news',
      choice: null
    },
    {
      id: 4,
      category: 'EI',
      question: 'When making a phone call I:',
      answerA: 'Rarely question that it will all be said',
      answerB: "Rehearse what I'll say",
      choice: null
    },
    {
      id: 5,
      category: 'EI',
      question: 'In the company of others I tend to:',
      answerA: 'Initiate conversation',
      answerB: 'Wait to be approached',
      choice: null
    },
    {
      id: 6,
      category: 'EI',
      question: 'New and non-routine interaction with others:',
      answerA: 'Stimulates and energizes me',
      answerB: 'Taxes my reserves',
      choice: null
    },
    {
      id: 7,
      category: 'EI',
      question: 'I prefer:',
      answerA: 'Many friends with brief contact',
      answerB: 'A few friends with lengthier contact',
      choice: null
    },
    {
      id: 8,
      category: 'EI',
      question: 'I tend to:',
      answerA: 'Speak easily and at length with strangers',
      answerB: 'Find little to say to strangers',
      choice: null
    },
    {
      id: 9,
      category: 'EI',
      question: "I'm more inclined to be:",
      answerA: 'Easy to approach',
      answerB: 'Somewhat reserved',
      choice: null
    },
    {
      id: 10,
      category: 'SN',
      question: 'I am more:',
      answerA: 'Realistic than speculative',
      answerB: 'Speculative than realistic',
      choice: null
    },
    {
      id: 11,
      category: 'SN',
      question: "It's worse to:",
      answerA: 'Have your head in the clouds',
      answerB: 'Be in a rut',
      choice: null
    },
    {
      id: 12,
      category: 'SN',
      question: 'I am more attracted to:',
      answerA: 'Sensible people',
      answerB: 'Imaginative people',
      choice: null
    },
    {
      id: 13,
      category: 'SN',
      question: 'I am more interested in:',
      answerA: 'What is actual',
      answerB: 'What is possible',
      choice: null
    },
    {
      id: 14,
      category: 'SN',
      question: 'In doing ordinary things I am more likely to:',
      answerA: 'Do it the usual way',
      answerB: 'Do it my own way',
      choice: null
    },
    {
      id: 15,
      category: 'SN',
      question: 'Writers should:',
      answerA: 'Say what they mean and mean what they say',
      answerB: 'Express things more by use of analogy',
      choice: null
    },
    {
      id: 16,
      category: 'SN',
      question: 'Facts:',
      answerA: 'Speak for themselves',
      answerB: 'Illustrate principles',
      choice: null
    },
    {
      id: 17,
      category: 'SN',
      question: 'I believe visionaries are:',
      answerA: 'Somewhat annoying',
      answerB: 'Rather fascinating',
      choice: null
    },
    {
      id: 18,
      category: 'SN',
      question: 'Common sense is:',
      answerA: 'Rarely questionable',
      answerB: 'Frequently questionable',
      choice: null
    },
    {
      id: 19,
      category: 'TF',
      question: 'I am impressed by:',
      answerA: 'Principles',
      answerB: 'Emotions',
      choice: null
    },
    {
      id: 20,
      category: 'TF',
      question: 'I am more drawn to:',
      answerA: 'That which I find convincing',
      answerB: 'That which I find touching',
      choice: null
    },
    {
      id: 21,
      category: 'TF',
      question: 'In judging others I am more swayed by:',
      answerA: 'Laws than circumstances',
      answerB: 'Circumstances than laws',
      choice: null
    },
    {
      id: 22,
      category: 'TF',
      question: 'In approaching others my inclination is usually more:',
      answerA: 'Objective',
      answerB: 'Personal',
      choice: null
    },
    {
      id: 23,
      category: 'TF',
      question: 'This is what appeals me:',
      answerA: 'Consistency of thought',
      answerB: 'Harmonious human relationships',
      choice: null
    },
    {
      id: 24,
      category: 'TF',
      question: 'I am more comfortable making:',
      answerA: 'Logical judgments',
      answerB: 'Value judgments',
      choice: null
    },
    {
      id: 25,
      category: 'TF',
      question: 'I am more often a:',
      answerA: 'Cool-headed person',
      answerB: 'Warm-hearted person',
      choice: null
    },
    {
      id: 26,
      category: 'TF',
      question: 'It is worse to be:',
      answerA: 'Unjust',
      answerB: 'Merciless',
      choice: null
    },
    {
      id: 27,
      category: 'TF',
      question: 'In making decisions I feel more comfortable with:',
      answerA: 'Standards',
      answerB: 'Feelings',
      choice: null
    },
    {
      id: 28,
      category: 'JP',
      question: 'I prefer to work:',
      answerA: 'Toward deadlines',
      answerB: 'Just "whenever"',
      choice: null
    },
    {
      id: 29,
      category: 'JP',
      question: 'I tend to choose:',
      answerA: 'Rather carefully',
      answerB: 'Somewhat impulsively',
      choice: null
    },
    {
      id: 30,
      category: 'JP',
      question: 'I am more:',
      answerA: 'Punctual',
      answerB: 'Leisurely',
      choice: null
    },
    {
      id: 31,
      category: 'JP',
      question: 'It bothers me more to have things:',
      answerA: 'Incomplete',
      answerB: 'Completed',
      choice: null
    },
    {
      id: 32,
      category: 'JP',
      question: 'I prefer things be:',
      answerA: 'Settled and decided',
      answerB: 'Unsettled and undecided',
      choice: null
    },
    {
      id: 33,
      category: 'JP',
      question: 'I am more:',
      answerA: 'Serious and determined',
      answerB: 'Easy-going',
      choice: null
    },
    {
      id: 34,
      category: 'JP',
      question: 'One should usually let events occur:',
      answerA: 'By careful selection and choice',
      answerB: 'Randomly and by chance',
      choice: null
    },
    {
      id: 35,
      category: 'JP',
      question: 'I feel better:',
      answerA: 'After having purchased something',
      answerB: 'While having the option to buy something',
      choice: null
    },
    {
      id: 36,
      category: 'JP',
      question: 'More admirable is:',
      answerA: 'The ability to organize and be methodical',
      answerB: 'The ability to adapt and make do',
      choice: null
    }
  ])

  const handleNext = async () => {
    const tempChoices = [...questionsData]
    if (endOffset < tempChoices.length) {
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

  const handleSubmit = async () => {
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
      const res = await detectPersonality(choices1, choices2, choices3, choices4)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleBack = () => {
    if (itemOffset > 0) {
      setItemOffset(itemOffset - itemsPerPage)
      setEndOffset(endOffset - itemsPerPage)
    }
  }

  const handleChange = (value, index) => {
    const tempQues = [...questionsData]
    tempQues[index - 1].choice = parseInt(value)
    setQuestionsData(tempQues)
  }

  return (
    <div className='d-flex test-question-contaienr container-fluid flex-column justify-content-center align-items-center'>
      {questionsData.slice(itemOffset, endOffset).map(item => (
        <div key={item.id.toString()} className='d-flex flex-column col-md-8 questions-wrapper'>
          <div className='d-flex flex-column justify-content-center align-items-center  mt-3 range-pref-b'>
            <div className='d-flex col-md-11 flex-row mt-3 '>
              <div className='d-flex col-md-2'>
                <ArrowForward className='arrow-f-question' />
              </div>
              <div className='d-flex col-md-8 justify-content-center align-items-center'>
                <h5>{item.question}</h5>
              </div>
            </div>
            <RadioGroup
              onChange={e => handleChange(e.target.value, item.id)}
              row
              value={item.choice}
              className='col-md-8 test-options-wrapper '
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label={item.answerA}
                labelPlacement='bottom'
              />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label={item.answerB}
                labelPlacement='bottom'
              />
            </RadioGroup>
          </div>
        </div>
      ))}
      <div className='d-flex flex-row next-btn-wrapper'>
        <div>
          <Button title='BACK' width='15rem' onClick={handleBack} />
        </div>
        <div className='ml-3'>
          <Button title='NEXT' width='15rem' onClick={handleNext} />
        </div>
      </div>
    </div>
  )
}

export default Test
