import PropTypes from 'prop-types'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from 'components/button'

import prof1Icon from 'assets/basic.png'
import casteIcon from 'assets/caste.png'
import professionIcon from 'assets/prof.png'
import bioIcon from 'assets/bio.png'

import 'components/form/styles.css'
import Input from 'components/common/Input'

const InfoHeading = ({ title, icon }) => (
  <div className='d-flex col-md-12 flex-row mt-3 align-items-center justify-content-center'>
    <div className='d-flex flex-row col-md-6 align-items-center' style={{ color: '#8F8EC3' }}>
      <img className='d-flex p-creation-icon' src={icon} alt='basicDetails' />
      <h5
        style={{
          marginBottom: -8,
          marginLeft: '1.5rem',
          color: '#8F8EC3',
          fontWeight: 'bold',
          fontSize: '1.7rem'
        }}
      >
        {title}
      </h5>
    </div>
  </div>
)

const Form = () => {
  return (
    <>
      <section className='d-flex flex-column mt-5 justify-content-center align-items-center'>
        <InfoHeading title='Basic Information' icon={prof1Icon} />

        <div
          style={{ marginLeft: '-1rem' }}
          className='d-flex col-md-5 flex-row mt-3 align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ marginBottom: '-1.5rem', fontSize: '1.2rem' }}>Full Name</h6>
          </div>
          <div className='d-flex col-md-9'>
            <Input width='35rem' title='Full Name' />
          </div>
        </div>

        <div
          style={{ marginLeft: '-1rem', marginTop: '3rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ marginBottom: '-1.5rem', fontSize: '1.2rem' }}>Date of Birth</h6>
          </div>
          <div className='d-flex col-md-9'>
            <Input type='date' width='35rem' title='' />
          </div>
        </div>

        <div
          style={{ marginLeft: '-1rem', marginTop: '3.5rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ fontSize: '1.2rem' }}>Religion</h6>
          </div>
          <div className='d-flex col-md-9'>
            <FormControl style={{ width: '33rem', marginLeft: 9 }}>
              <InputLabel style={{ fontSize: 16, marginTop: -2 }} id='demo-simple-select-label'>
                Religion
              </InputLabel>
              <Select
                style={{ height: 50 }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='Religion'
                // onChange={handleChange}
              >
                <MenuItem value='' selected='selected' disabled='disabled'>
                  Select Religion
                </MenuItem>
                <MenuItem value='Agnostic'>Sunnis(Muslim)</MenuItem>
                <MenuItem value='Atheist'>Shia(Muslim)</MenuItem>
                <MenuItem value='Buddhism'>Wahabi(Muslim)</MenuItem>
                <MenuItem value='Christianity'>Brailvi(Muslim)</MenuItem>
                <MenuItem value='Hinduism'>Abbasi(Muslim)</MenuItem>
                <MenuItem value='Islam'>Deobandi(Muslim)</MenuItem>
                <MenuItem value='Judaism'>Hindu(Non-Muslim)</MenuItem>
                <MenuItem value='Judaism'>Christian(Non-Muslim)</MenuItem>
                <MenuItem value='Other'>Other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div
          style={{ marginLeft: '-1rem', marginTop: '1.5rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ fontSize: '1.2rem' }}>Mother Tongue</h6>
          </div>
          <div className='d-flex col-md-9'>
            <FormControl style={{ width: '33rem', marginLeft: 9 }}>
              <InputLabel style={{ fontSize: 16, marginTop: -2 }} id='demo-simple-select-label'>
                Mother Tongue
              </InputLabel>
              <Select
                style={{ height: 50 }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='Religion'
                // onChange={handleChange}
              >
                <MenuItem value='' selected='selected' disabled='disabled'>
                  Select Mother Tongue
                </MenuItem>
                <MenuItem value='UR'>Urdu</MenuItem>
                <MenuItem value='HI'>Hindi</MenuItem>
                <MenuItem value='PA'>Punjabi</MenuItem>
                <MenuItem value='SI'>Sindhi</MenuItem>
                <MenuItem value='BA'>Balochi</MenuItem>
                <MenuItem value='SA'>Saraiki</MenuItem>
                <MenuItem value='EN'>English</MenuItem>
                <MenuItem value='Other'>Other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div
          style={{ marginLeft: '-1rem', marginTop: '1rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ marginBottom: '-1.5rem', fontSize: '1.2rem' }}>Phone Number</h6>
          </div>
          <div className='d-flex col-md-9'>
            <Input type='number' width='35rem' title='03000000000' />
          </div>
        </div>

        <div
          style={{ marginLeft: '-1rem', marginTop: '3rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ marginBottom: '-1.5rem', fontSize: '1.2rem' }}>Email</h6>
          </div>
          <div className='d-flex col-md-9'>
            <Input type='email' width='35rem' title='Email' />
          </div>
        </div>

        <center>
          <hr
            style={{ width: '60%', color: '#8F8EC3', border: '-0.5px solid', marginTop: '4rem' }}
          />
        </center>
      </section>

      <section className='d-flex flex-column mt-5 justify-content-center align-items-center'>
        <InfoHeading title='Personal Details' icon={prof1Icon} />

        <div
          style={{ marginLeft: '-1rem', marginTop: '1.5rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ fontSize: '1.2rem' }}>Gender</h6>
          </div>
          <div className='d-flex col-md-9'>
            <FormControl style={{ width: '33rem', marginLeft: 9 }}>
              <InputLabel style={{ fontSize: 16, marginTop: -2 }} id='demo-simple-select-label'>
                Gender
              </InputLabel>
              <Select
                style={{ height: 50 }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='Religion'
                // onChange={handleChange}
              >
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div
          style={{ marginLeft: '-1rem', marginTop: '1.5rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ fontSize: '1.2rem' }}>Marital Status</h6>
          </div>
          <div className='d-flex col-md-9'>
            <FormControl style={{ width: '33rem', marginLeft: 9 }}>
              <InputLabel style={{ fontSize: 16, marginTop: -2 }} id='demo-simple-select-label'>
                Marital Status
              </InputLabel>
              <Select
                style={{ height: 50 }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='Religion'
                // onChange={handleChange}
              >
                <MenuItem value='Never Married'>Never Married</MenuItem>
                <MenuItem value='Widowed'>Widowed</MenuItem>
                <MenuItem value='Divorced'>Divorced</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div
          style={{ marginLeft: '-1rem', marginTop: '1.5rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ fontSize: '1.2rem' }}>Height</h6>
          </div>
          <div className='d-flex col-md-9'>
            <FormControl style={{ width: '33rem', marginLeft: 9 }}>
              <InputLabel style={{ fontSize: 16, marginTop: -2 }} id='demo-simple-select-label'>
                Height
              </InputLabel>
              <Select
                style={{ height: 50 }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='Religion'
                // onChange={handleChange}
              >
                <MenuItem value='' selected='selected' disabled='disabled'>
                  Enter Height feet(inch)
                </MenuItem>
                <MenuItem value=''>4′ 6″ (54″)</MenuItem>
                <MenuItem value=''>4′ 7″ (55″)</MenuItem>
                <MenuItem value=''>4′ 8″ (56″)</MenuItem>
                <MenuItem value=''>4′ 9″ (57″)</MenuItem>
                <MenuItem value=''>4′ 10″ (58″)</MenuItem>
                <MenuItem value=''>4′ 11″ (59″)</MenuItem>
                <MenuItem value=''>5′ (60″)</MenuItem>
                <MenuItem value=''>5′ 1″ (61″)</MenuItem>
                <MenuItem value=''>5′ 2″ (62″)</MenuItem>
                <MenuItem value=''>5′ 3″ (63″)</MenuItem>
                <MenuItem value=''>5′ 4″ (64″)</MenuItem>
                <MenuItem value=''>5′ 5″ (65″)</MenuItem>
                <MenuItem value=''>5′ 6″ (66″)</MenuItem>
                <MenuItem value=''>5′ 7″ (67″)</MenuItem>
                <MenuItem value=''>5′ 8″ (68″)</MenuItem>
                <MenuItem value=''>5′ 9″ (69″)</MenuItem>
                <MenuItem value=''>5′ 10″ (70″)</MenuItem>
                <MenuItem value=''>5′ 11″ (71″)</MenuItem>
                <MenuItem value=''>6′ (72″)</MenuItem>
                <MenuItem value=''>6′ 1″(73″)</MenuItem>
                <MenuItem value=''>6′ 2″(74″)</MenuItem>
                <MenuItem value=''>6′ 3″(75″)</MenuItem>
                <MenuItem value=''>6′ 4″(76″)</MenuItem>
                <MenuItem value=''>6′ 5″(77″)</MenuItem>
                <MenuItem value=''>6′ 6″(78″)</MenuItem>
                <MenuItem value=''>6′ 7″(79″)</MenuItem>
                <MenuItem value=''>6′ 8″(80″)</MenuItem>
                <MenuItem value=''>6′ 9″(81″)</MenuItem>
                <MenuItem value=''>7′ (82″)</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <center>
          <hr
            style={{ width: '60%', color: '#8F8EC3', border: '-0.5px solid', marginTop: '4rem' }}
          />
        </center>
      </section>
      <section className='d-flex flex-column mt-5 justify-content-center align-items-center'>
        <InfoHeading title='Caste Details' icon={casteIcon} />

        <div
          style={{ marginLeft: '-1rem', marginTop: '1.5rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ fontSize: '1.2rem' }}>Caste</h6>
          </div>
          <div className='d-flex col-md-9'>
            <FormControl style={{ width: '33rem', marginLeft: 9 }}>
              <InputLabel style={{ fontSize: 16, marginTop: -2 }} id='demo-simple-select-label'>
                Caste
              </InputLabel>
              <Select
                style={{ height: 50 }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='Religion'
                // onChange={handleChange}
              >
                <MenuItem value='' selected='selected' disabled='disabled'>
                  Enter Caste
                </MenuItem>
                <MenuItem value='notdefined1'>Ansari</MenuItem>
                <MenuItem value='notdefined1'>Arain</MenuItem>
                <MenuItem value='notdefined1'>Awan</MenuItem>
                <MenuItem value='notdefined1'>Bohra</MenuItem>
                <MenuItem value='notdefined1'>Hanafi</MenuItem>
                <MenuItem value='notdefined1'>Jat</MenuItem>
                <MenuItem value='notdefined1'>Khoja</MenuItem>
                <MenuItem value='notdefined1'>Lebbai</MenuItem>
                <MenuItem value='notdefined1'>Malik</MenuItem>
                <MenuItem value='notdefined1'>Arain</MenuItem>
                <MenuItem value='notdefined1'>Memon</MenuItem>
                <MenuItem value='notdefined1'>Mughal</MenuItem>
                <MenuItem value='notdefined1'>Qureshi</MenuItem>
                <MenuItem value='notdefined1'>Rajput</MenuItem>
                <MenuItem value='notdefined1'>Pathan</MenuItem>
                <MenuItem value='notdefined1'>Rowther</MenuItem>
                <MenuItem value='notdefined1'>Shafi</MenuItem>
                <MenuItem value='notdefined1'>Sheikh</MenuItem>
                <MenuItem value='notdefined1'>Siddiqui</MenuItem>
                <MenuItem value='notdefined1'>Syed</MenuItem>
                <MenuItem value='notdefined1'>Unsepecified</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div
          style={{ marginLeft: '-1rem', marginTop: '1rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ marginBottom: '-1.5rem', fontSize: '1.2rem' }}>Sub-Caste</h6>
          </div>
          <div className='d-flex col-md-9'>
            <Input type='text' width='35rem' title='Sub-Caste' />
          </div>
        </div>

        <center>
          <hr
            style={{ width: '60%', color: '#8F8EC3', border: '-0.5px solid', marginTop: '4rem' }}
          />
        </center>
      </section>
      <section className='d-flex flex-column mt-5 justify-content-center align-items-center'>
        <InfoHeading title='Professional Details' icon={professionIcon} />
        <div
          style={{ marginLeft: '-1rem', marginTop: '1.5rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ fontSize: '1.2rem' }}>Education</h6>
          </div>
          <div className='d-flex col-md-9'>
            <FormControl style={{ width: '33rem', marginLeft: 9 }}>
              <InputLabel style={{ fontSize: 16, marginTop: -2 }} id='demo-simple-select-label'>
                Education
              </InputLabel>
              <Select
                style={{ height: 50 }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='Religion'
                // onChange={handleChange}
              >
                <MenuItem value='' selected='selected' disabled='disabled'>
                  Select Education
                </MenuItem>
                <MenuItem value='No formal education'>No formal education</MenuItem>
                <MenuItem value='Primary education'>Primary education</MenuItem>
                <MenuItem value='Secondary education'>Secondary education or high school</MenuItem>
                <MenuItem value='GED'>GED</MenuItem>
                <MenuItem value='Vocational qualification'>Vocational qualification</MenuItem>
                <MenuItem value="Bachelor's degree">Bachelor&apos;s degree</MenuItem>
                <MenuItem value="Master's degree">Master&apos;s degree</MenuItem>
                <MenuItem value='Doctorate or higher'>Doctorate or higher</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div
          style={{ marginLeft: '-1rem', marginTop: '1.5rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ fontSize: '1.2rem' }}>Occupation</h6>
          </div>
          <div className='d-flex col-md-9'>
            <FormControl style={{ width: '33rem', marginLeft: 9 }}>
              <InputLabel style={{ fontSize: 16, marginTop: -2 }} id='demo-simple-select-label'>
                Education
              </InputLabel>
              <Select
                style={{ height: 50 }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='Religion'
                // onChange={handleChange}
              >
                <MenuItem value='1'>- Chiropractor</MenuItem>
                <MenuItem value='2'>- Dentist</MenuItem>
                <MenuItem value='3'>- Dietitian or Nutritionist</MenuItem>
                <MenuItem value='4'>- Optometrist</MenuItem>
                <MenuItem value='5'>- Pharmacist</MenuItem>
                <MenuItem value='6'>- Physician</MenuItem>
                <MenuItem value='7'>- Physician Assistant</MenuItem>
                <MenuItem value='8'>- Podiatrist</MenuItem>
                <MenuItem value='9'>- Registered Nurse</MenuItem>
                <MenuItem value='10'>- Therapist</MenuItem>
                <MenuItem value='11'>- Veterinarian</MenuItem>
                <MenuItem value='12'>- Health Technologist or Technician</MenuItem>
                <MenuItem value='13'>
                  - Other Healthcare Practitioners and Technical Occupation
                </MenuItem>
                <MenuItem value='14'>- Nursing, Psychiatric, or Home Health Aide</MenuItem>
                <MenuItem value='15'>
                  - Occupational and Physical Therapist Assistant or Aide
                </MenuItem>
                <MenuItem value='16'>- Other Healthcare Support Occupation</MenuItem>
                <MenuItem value='17'>- Chief Executive</MenuItem>
                <MenuItem value='18'>- General and Operations Manager</MenuItem>
                <MenuItem value='19'>
                  - Advertising, Marketing, Promotions, Public Relations, and Sales Manager
                </MenuItem>
                <MenuItem value='20'>
                  - Operations Specialties Manager (e.g., IT or HR Manager)
                </MenuItem>
                <MenuItem value='21'>- Construction Manager</MenuItem>
                <MenuItem value='22'>- Engineering Manager</MenuItem>
                <MenuItem value='23'>- Accountant, Auditor</MenuItem>
                <MenuItem value='24'>- Business Operations or Financial Specialist</MenuItem>
                <MenuItem value='25'>- Business Owner</MenuItem>
                <MenuItem value='26'>
                  - Other Business, Executive, Management, Financial Occupation
                </MenuItem>
                <MenuItem value='27'>- Architect, Surveyor, or Cartographer</MenuItem>
                <MenuItem value='28'>- Engineer</MenuItem>
                <MenuItem value='29'>- Other Architecture and Engineering Occupation</MenuItem>
                <MenuItem value='30'>- Postsecondary Teacher (e.g., College Professor)</MenuItem>
                <MenuItem value='31'>
                  - Primary, Secondary, or Special Education School Teacher
                </MenuItem>
                <MenuItem value='32'>- Other Teacher or Instructor</MenuItem>
                <MenuItem value='33'>- Other Education, Training, and Library Occupation</MenuItem>
                <MenuItem value='34'>
                  - Arts, Design, Entertainment, Sports, and Media Occupations
                </MenuItem>
                <MenuItem value='35'>- Computer Specialist, Mathematical Science</MenuItem>
                <MenuItem value='36'>
                  - Counselor, Social Worker, or Other Community and Social Service Specialist
                </MenuItem>
                <MenuItem value='37'>- Lawyer, Judge</MenuItem>
                <MenuItem value='38'>
                  - Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)
                </MenuItem>
                <MenuItem value='39'>
                  - Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)
                </MenuItem>
                <MenuItem value='40'>
                  - Religious Worker (e.g., Clergy, Director of Religious Activities or Education)
                </MenuItem>
                <MenuItem value='41'>- Social Scientist and Related Worker</MenuItem>
                <MenuItem value='42'>- Other Professional Occupation</MenuItem>
                <MenuItem value='43'>- Supervisor of Administrative Support Workers</MenuItem>
                <MenuItem value='44'>- Financial Clerk</MenuItem>
                <MenuItem value='45'>- Secretary or Administrative Assistant</MenuItem>
                <MenuItem value='46'>
                  - Material Recording, Scheduling, and Dispatching Worker
                </MenuItem>
                <MenuItem value='47'>- Other Office and Administrative Support Occupation</MenuItem>
                <MenuItem value='48'>
                  - Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)
                </MenuItem>
                <MenuItem value='49'>- Chef or Head Cook</MenuItem>
                <MenuItem value='50'>- Cook or Food Preparation Worker</MenuItem>
                <MenuItem value='51'>
                  - Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)
                </MenuItem>
                <MenuItem value='52'>- Building and Grounds Cleaning and Maintenance</MenuItem>
                <MenuItem value='53'>
                  - Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)
                </MenuItem>
                <MenuItem value='54'>- Sales Supervisor, Retail Sales</MenuItem>
                <MenuItem value='55'>- Retail Sales Worker</MenuItem>
                <MenuItem value='56'>- Insurance Sales Agent</MenuItem>
                <MenuItem value='57'>- Sales Representative</MenuItem>
                <MenuItem value='58'>- Real Estate Sales Agent</MenuItem>
                <MenuItem value='59'>- Other Services Occupation</MenuItem>
                <MenuItem value='60'>
                  - Construction and Extraction (e.g., Construction Laborer, Electrician)
                </MenuItem>
                <MenuItem value='61'>- Farming, Fishing, and Forestry</MenuItem>
                <MenuItem value='62'>- Installation, Maintenance, and Repair</MenuItem>
                <MenuItem value='63'>- Production Occupations</MenuItem>
                <MenuItem value='64'>
                  - Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation
                </MenuItem>
                <MenuItem value='65'>- Aircraft Pilot or Flight Engineer</MenuItem>
                <MenuItem value='66'>
                  - Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)
                </MenuItem>
                <MenuItem value='67'>- Other Transportation Occupation</MenuItem>
                <MenuItem value='68'>- Military</MenuItem>
                <MenuItem value='69'>- Homemaker</MenuItem>
                <MenuItem value='70'>- Other Occupation</MenuItem>
                <MenuItem value='71'>- Don&apos;t Know</MenuItem>
                <MenuItem value='72'>- Not Applicable</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div
          style={{ marginLeft: '-1rem', marginTop: '1.5rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ fontSize: '1.2rem' }}>Income</h6>
          </div>
          <div className='d-flex col-md-9'>
            <FormControl style={{ width: '33rem', marginLeft: 9 }}>
              <InputLabel style={{ fontSize: 16, marginTop: -2 }} id='demo-simple-select-label'>
                Income
              </InputLabel>
              <Select
                style={{ height: 50 }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='Religion'
                // onChange={handleChange}
              >
                <MenuItem value='' selected='selected' disabled='disabled'>
                  Enter Income (PKR)
                </MenuItem>
                <MenuItem value='notdefined2'>less than 20,000</MenuItem>
                <MenuItem value='notdefined2'>20,000-30,000</MenuItem>
                <MenuItem value='notdefined2'>30,000-40,000</MenuItem>
                <MenuItem value='notdefined2'>40,000-50,000</MenuItem>
                <MenuItem value='notdefined2'>50,000-60,000</MenuItem>
                <MenuItem value='notdefined2'>60,000-70,000</MenuItem>
                <MenuItem value='notdefined2'>70,000-80,000</MenuItem>
                <MenuItem value='notdefined2'>80,000-90,000</MenuItem>
                <MenuItem value='notdefined2'>90,000-1,00,000</MenuItem>
                <MenuItem value='notdefined2'>1,00,000-1,10,000</MenuItem>
                <MenuItem value='notdefined2'>1,00,000-1,10,000</MenuItem>
                <MenuItem value='notdefined2'>1,10,000-1,20,000</MenuItem>
                <MenuItem value='notdefined2'>1,20,000-1,30,000</MenuItem>
                <MenuItem value='notdefined2'>1,30,000-1,40,000</MenuItem>
                <MenuItem value='notdefined2'>1,40,000-1,50,000</MenuItem>
                <MenuItem value='notdefined2'>1,50,000-1,60,000</MenuItem>
                <MenuItem value='notdefined2'>1,60,000-1,70,000</MenuItem>
                <MenuItem value='notdefined2'>1,70,000-1,80,000</MenuItem>
                <MenuItem value='notdefined2'>1,80,000-1,90,000</MenuItem>
                <MenuItem value='notdefined2'>1,90,000-2,00,000</MenuItem>
                <MenuItem value='notdefined2'>more than 2,00,000</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <center>
          <hr
            style={{ width: '60%', color: '#8F8EC3', border: '-0.5px solid', marginTop: '4rem' }}
          />
        </center>
      </section>
      <section className='d-flex flex-column mt-5 justify-content-center align-items-center'>
        <InfoHeading title='Bio' icon={bioIcon} />

        <div
          style={{ marginLeft: '-1rem', marginTop: '1rem' }}
          className='d-flex col-md-5 flex-row align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ marginBottom: '-1.5rem', fontSize: '1.2rem' }}>About You</h6>
          </div>
          <div className='d-flex col-md-9'>
            <Input type='text' width='35rem' title='About You' />
          </div>
        </div>
      </section>
      <center style={{ marginBottom: '8rem', marginTop: '8rem' }}>
        <Button title='Submit' />
      </center>
    </>
  )
}

InfoHeading.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired
}

export default Form
