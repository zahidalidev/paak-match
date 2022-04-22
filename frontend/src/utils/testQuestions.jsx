const questionsData = [
  {
    id: 1,
    category: 'EI',
    question: 'At a social event I:',
    answerA: 'Interact with many people including strangers',
    answerB: 'Interact with a few people I know',
    choice: 0
  },
  {
    id: 2,
    category: 'EI',
    question: 'At parties I:',
    answerA: 'Stay late with increasing energy',
    answerB: 'Leave early with decreased energy',
    choice: 0
  },
  {
    id: 3,
    category: 'EI',
    question: 'In my social groups I:',
    answerA: "Keep abreast of other's happenings",
    answerB: 'Get behind on the news',
    choice: 0
  },
  {
    id: 4,
    category: 'EI',
    question: 'When making a phone call I:',
    answerA: 'Rarely question that it will all be said',
    answerB: "Rehearse what I'll say",
    choice: 0
  },
  {
    id: 5,
    category: 'EI',
    question: 'In the company of others I tend to:',
    answerA: 'Initiate conversation',
    answerB: 'Wait to be approached',
    choice: 0
  },
  {
    id: 6,
    category: 'EI',
    question: 'New and non-routine interaction with others:',
    answerA: 'Stimulates and energizes me',
    answerB: 'Taxes my reserves',
    choice: 0
  },
  {
    id: 7,
    category: 'EI',
    question: 'I prefer:',
    answerA: 'Many friends with brief contact',
    answerB: 'A few friends with lengthier contact',
    choice: 0
  },
  {
    id: 8,
    category: 'EI',
    question: 'I tend to:',
    answerA: 'Speak easily and at length with strangers',
    answerB: 'Find little to say to strangers',
    choice: 0
  },
  {
    id: 9,
    category: 'EI',
    question: "I'm more inclined to be:",
    answerA: 'Easy to approach',
    answerB: 'Somewhat reserved',
    choice: 0
  },
  {
    id: 10,
    category: 'SN',
    question: 'I am more:',
    answerA: 'Realistic than speculative',
    answerB: 'Speculative than realistic',
    choice: 0
  },
  {
    id: 11,
    category: 'SN',
    question: "It's worse to:",
    answerA: 'Have your head in the clouds',
    answerB: 'Be in a rut',
    choice: 0
  },
  {
    id: 12,
    category: 'SN',
    question: 'I am more attracted to:',
    answerA: 'Sensible people',
    answerB: 'Imaginative people',
    choice: 0
  },
  {
    id: 13,
    category: 'SN',
    question: 'I am more interested in:',
    answerA: 'What is actual',
    answerB: 'What is possible',
    choice: 0
  },
  {
    id: 14,
    category: 'SN',
    question: 'In doing ordinary things I am more likely to:',
    answerA: 'Do it the usual way',
    answerB: 'Do it my own way',
    choice: 0
  },
  {
    id: 15,
    category: 'SN',
    question: 'Writers should:',
    answerA: 'Say what they mean and mean what they say',
    answerB: 'Express things more by use of analogy',
    choice: 0
  },
  {
    id: 16,
    category: 'SN',
    question: 'Facts:',
    answerA: 'Speak for themselves',
    answerB: 'Illustrate principles',
    choice: 0
  },
  {
    id: 17,
    category: 'SN',
    question: 'I believe visionaries are:',
    answerA: 'Somewhat annoying',
    answerB: 'Rather fascinating',
    choice: 0
  },
  {
    id: 18,
    category: 'SN',
    question: 'Common sense is:',
    answerA: 'Rarely questionable',
    answerB: 'Frequently questionable',
    choice: 0
  },
  {
    id: 19,
    category: 'TF',
    question: 'I am impressed by:',
    answerA: 'Principles',
    answerB: 'Emotions',
    choice: 0
  },
  {
    id: 20,
    category: 'TF',
    question: 'I am more drawn to:',
    answerA: 'That which I find convincing',
    answerB: 'That which I find touching',
    choice: 0
  },
  {
    id: 21,
    category: 'TF',
    question: 'In judging others I am more swayed by:',
    answerA: 'Laws than circumstances',
    answerB: 'Circumstances than laws',
    choice: 0
  },
  {
    id: 22,
    category: 'TF',
    question: 'In approaching others my inclination is usually more:',
    answerA: 'Objective',
    answerB: 'Personal',
    choice: 0
  },
  {
    id: 23,
    category: 'TF',
    question: 'This is what appeals me:',
    answerA: 'Consistency of thought',
    answerB: 'Harmonious human relationships',
    choice: 0
  },
  {
    id: 24,
    category: 'TF',
    question: 'I am more comfortable making:',
    answerA: 'Logical judgments',
    answerB: 'Value judgments',
    choice: 0
  },
  {
    id: 25,
    category: 'TF',
    question: 'I am more often a:',
    answerA: 'Cool-headed person',
    answerB: 'Warm-hearted person',
    choice: 0
  },
  {
    id: 26,
    category: 'TF',
    question: 'It is worse to be:',
    answerA: 'Unjust',
    answerB: 'Merciless',
    choice: 0
  },
  {
    id: 27,
    category: 'TF',
    question: 'In making decisions I feel more comfortable with:',
    answerA: 'Standards',
    answerB: 'Feelings',
    choice: 0
  },
  {
    id: 28,
    category: 'JP',
    question: 'I prefer to work:',
    answerA: 'Toward deadlines',
    answerB: 'Just "whenever"',
    choice: 0
  },
  {
    id: 29,
    category: 'JP',
    question: 'I tend to choose:',
    answerA: 'Rather carefully',
    answerB: 'Somewhat impulsively',
    choice: 0
  },
  {
    id: 30,
    category: 'JP',
    question: 'I am more:',
    answerA: 'Punctual',
    answerB: 'Leisurely',
    choice: 0
  },
  {
    id: 31,
    category: 'JP',
    question: 'It bothers me more to have things:',
    answerA: 'Incomplete',
    answerB: 'Completed',
    choice: 0
  },
  {
    id: 32,
    category: 'JP',
    question: 'I prefer things be:',
    answerA: 'Settled and decided',
    answerB: 'Unsettled and undecided',
    choice: 0
  },
  {
    id: 33,
    category: 'JP',
    question: 'I am more:',
    answerA: 'Serious and determined',
    answerB: 'Easy-going',
    choice: 0
  },
  {
    id: 34,
    category: 'JP',
    question: 'One should usually let events occur:',
    answerA: 'By careful selection and choice',
    answerB: 'Randomly and by chance',
    choice: 0
  },
  {
    id: 35,
    category: 'JP',
    question: 'I feel better:',
    answerA: 'After having purchased something',
    answerB: 'While having the option to buy something',
    choice: 0
  },
  {
    id: 36,
    category: 'JP',
    question: 'More admirable is:',
    answerA: 'The ability to organize and be methodical',
    answerB: 'The ability to adapt and make do',
    choice: 0
  }
]

// EI: 9
// SN: 9
// TF: 9
// JP: 9

/* This used to be question 57 but is outdated
{
id: 57,
category: 'EI',
question: 'When the phone rings:',
answerA: 'Hasten to get to it first',
answerB: 'Hope someone else will answer',
choice: 0
},
*/

export default questionsData
