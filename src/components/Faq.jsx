import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { faqs } from 'utils/constants'
import { colors } from 'config/theme'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

const Faq = () => {
  const classes = useStyles()

  return (
    <div
      className='container-fluid row justify-content-center align-items-center'
      style={{ backgroundColor: colors.white }}
    >
      <div
        className='col-md-8'
        style={{
          backgroundColor: colors.white,
          boxShadow: '1px 1px 10px 4px #dfdfdf',
          borderRadius: 10,
          marginBottom: '2rem',
          marginTop: '3rem'
        }}
      >
        <div style={{ marginTop: '4rem' }} className='row '>
          <h1
            className='text-start'
            style={{ fontSize: '1.8rem', fontWeight: 'bolder', marginLeft: '4.2rem' }}
          >
            Frequently Asked Questions
          </h1>
        </div>

        <div className='container-fluid' style={{ marginBottom: '3rem', marginTop: '1.5rem' }}>
          <div className={classes.root}>
            <div className='row justify-content-center align-items-center'>
              <div className='col-md-11'>
                {faqs.map((item, index) => (
                  <Accordion style={{ marginBottom: '1rem' }} key={index.toString()}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel2a-content'
                      id='panel2a-header'
                    >
                      <Typography className={classes.heading} style={{ fontSize: '1.06rem' }}>
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <p style={{ color: colors.primary, fontWeight: 'bold' }}>Ans:</p>{' '}
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
