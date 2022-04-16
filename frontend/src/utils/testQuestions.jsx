const questionsData = [
  //choice initialized at 0 for each index
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
    category: 'SN',
    question: 'I am more:',
    answerA: 'Realistic than speculative',
    answerB: 'Speculative than realistic',
    choice: 0
  },
  {
    id: 3,
    category: 'SN',
    question: "It's worse to:",
    answerA: 'Have your head in the clouds',
    answerB: 'Be in a rut',
    choice: 0
  },
  {
    id: 4,
    category: 'TF',
    question: 'I am impressed by:',
    answerA: 'Principles',
    answerB: 'Emotions',
    choice: 0
  },
  {
    id: 5,
    category: 'TF',
    question: 'I am more drawn to:',
    answerA: 'That which I find convincing',
    answerB: 'That which I find touching',
    choice: 0
  },
  {
    id: 6,
    category: 'JP',
    question: 'I prefer to work:',
    answerA: 'Toward deadlines',
    answerB: 'Just "whenever"',
    choice: 0
  },
  {
    id: 7,
    category: 'JP',
    question: 'I tend to choose:',
    answerA: 'Rather carefully',
    answerB: 'Somewhat impulsively',
    choice: 0
  },
  {
    id: 8,
    category: 'EI',
    question: 'At parties I:',
    answerA: 'Stay late with increasing energy',
    answerB: 'Leave early with decreased energy',
    choice: 0
  },
  {
    id: 9,
    category: 'SN',
    question: 'I am more attracted to:',
    answerA: 'Sensible people',
    answerB: 'Imaginative people',
    choice: 0
  },
  {
    id: 10,
    category: 'SN',
    question: 'I am more interested in:',
    answerA: 'What is actual',
    answerB: 'What is possible',
    choice: 0
  },
  {
    id: 11,
    category: 'TF',
    question: 'In judging others I am more swayed by:',
    answerA: 'Laws than circumstances',
    answerB: 'Circumstances than laws',
    choice: 0
  },
  {
    id: 12,
    category: 'TF',
    question: 'In approaching others my inclination is usually more:',
    answerA: 'Objective',
    answerB: 'Personal',
    choice: 0
  },
  {
    id: 13,
    category: 'JP',
    question: 'I am more:',
    answerA: 'Punctual',
    answerB: 'Leisurely',
    choice: 0
  },
  {
    id: 14,
    category: 'JP',
    question: 'It bothers me more to have things:',
    answerA: 'Incomplete',
    answerB: 'Completed',
    choice: 0
  },
  {
    id: 15,
    category: 'EI',
    question: 'In my social groups I:',
    answerA: "Keep abreast of other's happenings",
    answerB: 'Get behind on the news',
    choice: 0
  },
  {
    id: 16,
    category: 'SN',
    question: 'In doing ordinary things I am more likely to:',
    answerA: 'Do it the usual way',
    answerB: 'Do it my own way',
    choice: 0
  },
  {
    id: 17,
    category: 'SN',
    question: 'Writers should:',
    answerA: 'Say what they mean and mean what they say',
    answerB: 'Express things more by use of analogy',
    choice: 0
  },
  {
    id: 18,
    category: 'TF',
    question: 'This is what appeals me:',
    answerA: 'Consistency of thought',
    answerB: 'Harmonious human relationships',
    choice: 0
  },
  {
    id: 19,
    category: 'TF',
    question: 'I am more comfortable making:',
    answerA: 'Logical judgments',
    answerB: 'Value judgments',
    choice: 0
  },
  {
    id: 20,
    category: 'JP',
    question: 'I prefer things be:',
    answerA: 'Settled and decided',
    answerB: 'Unsettled and undecided',
    choice: 0
  },
  {
    id: 21,
    category: 'JP',
    question: 'I am more:',
    answerA: 'Serious and determined',
    answerB: 'Easy-going',
    choice: 0
  },
  {
    id: 22,
    category: 'EI',
    question: 'When making a phone call I:',
    answerA: 'Rarely question that it will all be said',
    answerB: "Rehearse what I'll say",
    choice: 0
  },
  {
    id: 23,
    category: 'SN',
    question: 'Facts:',
    answerA: 'Speak for themselves',
    answerB: 'Illustrate principles',
    choice: 0
  },
  {
    id: 24,
    category: 'SN',
    question: 'I believe visionaries are:',
    answerA: 'Somewhat annoying',
    answerB: 'Rather fascinating',
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
    category: 'JP',
    question: 'One should usually let events occur:',
    answerA: 'By careful selection and choice',
    answerB: 'Randomly and by chance',
    choice: 0
  },
  {
    id: 28,
    category: 'JP',
    question: 'I feel better:',
    answerA: 'After having purchased something',
    answerB: 'While having the option to buy something',
    choice: 0
  },
  {
    id: 29,
    category: 'EI',
    question: 'In the company of others I tend to:',
    answerA: 'Initiate conversation',
    answerB: 'Wait to be approached',
    choice: 0
  },
  {
    id: 30,
    category: 'SN',
    question: 'Common sense is:',
    answerA: 'Rarely questionable',
    answerB: 'Frequently questionable',
    choice: 0
  },
  {
    id: 31,
    category: 'SN',
    question: 'Children often do not:',
    answerA: 'Make themselves useful enough',
    answerB: 'Exercise their fantasy enough',
    choice: 0
  },
  {
    id: 32,
    category: 'TF',
    question: 'In making decisions I feel more comfortable with:',
    answerA: 'Standards',
    answerB: 'Feelings',
    choice: 0
  },
  {
    id: 33,
    category: 'TF',
    question: 'I am more:',
    answerA: 'Firm than gentle',
    answerB: 'Gentle than firm',
    choice: 0
  },
  {
    id: 34,
    category: 'JP',
    question: 'More admirable is:',
    answerA: 'The ability to organize and be methodical',
    answerB: 'The ability to adapt and make do',
    choice: 0
  },
  {
    id: 35,
    category: 'JP',
    question: 'I put more value on:',
    answerA: 'The absolute',
    answerB: 'Open-mindedness',
    choice: 0
  },
  {
    id: 36,
    category: 'EI',
    question: 'New and non-routine interaction with others:',
    answerA: 'Stimulates and energizes me',
    answerB: 'Taxes my reserves',
    choice: 0
  },
  {
    id: 37,
    category: 'SN',
    question: 'I am more frequently a:',
    answerA: 'Practical sort of person',
    answerB: 'Fanciful sort of person',
    choice: 0
  },
  {
    id: 38,
    category: 'SN',
    question: 'I am more likely to:',
    answerA: 'See how others are useful',
    answerB: 'See how others see',
    choice: 0
  },
  {
    id: 39,
    category: 'TF',
    question: 'It is more satisfying to:',
    answerA: 'Discuss an issue thoroughly',
    answerB: 'Arrive at agreement on an issue',
    choice: 0
  },
  {
    id: 40,
    category: 'TF',
    question: 'I am more ruled by:',
    answerA: 'My head',
    answerB: 'My heart',
    choice: 0
  },
  {
    id: 41,
    category: 'JP',
    question: 'I am more comfortable with work that is:',
    answerA: 'Contracted',
    answerB: 'Done on a casual basis',
    choice: 0
  },
  {
    id: 42,
    category: 'JP',
    question: 'I tend to look for:',
    answerA: 'The orderly',
    answerB: 'Whatever turns up',
    choice: 0
  },
  {
    id: 43,
    category: 'EI',
    question: 'I prefer:',
    answerA: 'Many friends with brief contact',
    answerB: 'A few friends with lengthier contact',
    choice: 0
  },
  {
    id: 44,
    category: 'SN',
    question: 'I go more by:',
    answerA: 'Facts',
    answerB: 'Principles',
    choice: 0
  },
  {
    id: 45,
    category: 'SN',
    question: 'I am more interested in:',
    answerA: 'Production and distribution',
    answerB: 'Design and research',
    choice: 0
  },
  {
    id: 46,
    category: 'TF',
    question: 'It is more of a compliment to call someone:',
    answerA: 'Logical',
    answerB: 'Sentimental',
    choice: 0
  },
  {
    id: 47,
    category: 'TF',
    question: 'In myself I value more that I am:',
    answerA: 'Unwavering',
    answerB: 'Devoted',
    choice: 0
  },
  {
    id: 48,
    category: 'JP',
    question: 'I more often prefer the:',
    answerA: 'Final and unalterable statement',
    answerB: 'Tentative and preliminary statement',
    choice: 0
  },
  {
    id: 49,
    category: 'JP',
    question: 'I am more comfortable:',
    answerA: 'After a decision',
    answerB: 'Before a decision',
    choice: 0
  },
  {
    id: 50,
    category: 'EI',
    question: 'I tend to:',
    answerA: 'Speak easily and at length with strangers',
    answerB: 'Find little to say to strangers',
    choice: 0
  },
  {
    id: 51,
    category: 'SN',
    question: 'I am more likely to trust:',
    answerA: 'My experience',
    answerB: 'A hunch',
    choice: 0
  },
  {
    id: 52,
    category: 'SN',
    question: 'I feel:',
    answerA: 'More practical than ingenious',
    answerB: 'More ingenious than practical',
    choice: 0
  },
  {
    id: 53,
    category: 'TF',
    question: 'More deserving of compliment is a person of:',
    answerA: 'Clear reasoning',
    answerB: 'Strong feeling',
    choice: 0
  },
  {
    id: 54,
    category: 'TF',
    question: 'I am more inclined to be:',
    answerA: 'Fair-minded',
    answerB: 'Sympathetic',
    choice: 0
  },
  {
    id: 55,
    category: 'JP',
    question: 'It is preferable to:',
    answerA: 'Make sure things are arranged',
    answerB: 'Just let things happen',
    choice: 0
  },
  {
    id: 56,
    category: 'JP',
    question: 'In relationships most things should be:',
    answerA: 'Renegotiable',
    answerB: 'Random and circumstantial',
    choice: 0
  },
  {
    id: 57,
    category: 'SN',
    question: 'I prize more in myself:',
    answerA: 'A strong sense of reality',
    answerB: 'A vivid imagination',
    choice: 0
  },
  {
    id: 58,
    category: 'SN',
    question: 'I am drawn more to:',
    answerA: 'Fundamentals',
    answerB: 'Overtones',
    choice: 0
  },
  {
    id: 59,
    category: 'TF',
    question: "It's a greater error to be too:",
    answerA: 'Passionate',
    answerB: 'Objective',
    choice: 0
  },
  {
    id: 60,
    category: 'TF',
    question: 'I see myself as basically:',
    answerA: 'Hard-nosed',
    answerB: 'Soft-hearted',
    choice: 0
  },
  {
    id: 61,
    category: 'JP',
    question: "A situation is more appealing if it's:",
    answerA: 'Structured and scheduled',
    answerB: 'Unstructured and unscheduled',
    choice: 0
  },
  {
    id: 62,
    category: 'JP',
    question: "I'm a person who is more:",
    answerA: 'Routinized than whimsical',
    answerB: 'Whimsical than routinized',
    choice: 0
  },
  {
    id: 63,
    category: 'EI',
    question: "I'm more inclined to be:",
    answerA: 'Easy to approach',
    answerB: 'Somewhat reserved',
    choice: 0
  },
  {
    id: 64,
    category: 'SN',
    question: 'In writings I prefer:',
    answerA: 'The more literal',
    answerB: 'The more figurative',
    choice: 0
  },
  {
    id: 65,
    category: 'SN',
    question: 'It is harder for me to:',
    answerA: 'Identify with others',
    answerB: 'Utilize others',
    choice: 0
  },
  {
    id: 66,
    category: 'TF',
    question: 'I wish more for myself:',
    answerA: 'Clarity of reason',
    answerB: 'Strength of compassion',
    choice: 0
  },
  {
    id: 67,
    category: 'TF',
    question: 'The greater fault is:',
    answerA: 'Being indiscriminate',
    answerB: 'Being critical',
    choice: 0
  },
  {
    id: 68,
    category: 'JP',
    question: 'I prefer the:',
    answerA: 'Planned event',
    answerB: 'Unplanned event',
    choice: 0
  },
  {
    id: 69,
    category: 'JP',
    question: 'I tend to be more:',
    answerA: 'Deliberate than spontaneous',
    answerB: 'Spontaneous than deliberate',
    choice: 0
  }
]

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
