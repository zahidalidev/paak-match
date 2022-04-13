import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Input from 'components/common/Input'
import 'containers/preferences/styles.css'
import Button from 'components/button'

const Preferences = () => {
  return (
    <div className='d-flex preferences-wrapper container-fluid justify-content-center align-items-center'>
      <div className='d-flex col-md-6 flex-column preferences-container justify-content-end align-items-end'>
        <div className='d-flex col-md-12 flex-column'>
          <p className='pref-h'>Partner Preferences</p>
          <p className='pref-d'>
            Matches recommended by us are based on{' '}
            <span style={{ fontWeight: 'bold' }}>Acceptable matches*</span> criteria and at times
            might go slightly beyond your preferences. <br />
            Turn on &quot;Compulsory&quot; to get matches exactly as per your preferences.
          </p>
        </div>

        <div className='d-flex col-md-11 basic-pref-container'>
          <p className='pref-h'>Basic Partner Preferences</p>
        </div>

        <div className='d-flex d-flex col-md-11 flex-column mt-3 align-items-center '>
          <div className='d-flex col-md-12 mb-4 flex-row mt-2 align-items-center '>
            <div className='d-flex col-md-3'>
              <h6 style={{ marginBottom: '-2rem', fontSize: '1rem' }}>Age Range</h6>
            </div>
            <div className='d-flex col-md-9'>
              <Input width='35rem' height='45px' title='20-25' />
            </div>
          </div>
          <div className='d-flex col-md-11 range-pref-b'></div>
          <div className='d-flex col-md-12 mb-4 flex-row mt-2 align-items-center '>
            <div className='d-flex col-md-3'>
              <h6 style={{ marginBottom: '-2rem', fontSize: '1rem' }}>Height Range</h6>
            </div>
            <div className='d-flex col-md-9'>
              <Input width='35rem' height='45px' title='50-55 in inch' />
            </div>
          </div>
          <div className='d-flex col-md-11 range-pref-b'></div>
          <div className='d-flex col-md-12 mt-3 flex-row align-items-center'>
            <div className='d-flex col-md-3'>
              <h6 style={{ fontSize: '1rem' }}>Marital Status</h6>
            </div>
            <div className='d-flex col-md-9'>
              <FormControl style={{ width: '33rem', marginLeft: 9 }}>
                <InputLabel style={{ fontSize: 15, marginTop: -2 }} id='demo-simple-select-label'>
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
          <div className='d-flex col-md-11 range-pref-b'></div>
          <div className='d-flex col-md-12 mt-3 flex-row align-items-center'>
            <div className='d-flex col-md-3'>
              <h6 style={{ fontSize: '1rem' }}>Mother Tongue</h6>
            </div>
            <div className='d-flex col-md-9'>
              <FormControl style={{ width: '33rem', marginLeft: 9 }}>
                <InputLabel style={{ fontSize: 15, marginTop: -2 }} id='demo-simple-select-label'>
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
          <div className='d-flex col-md-11 range-pref-b'></div>
          <div className='d-flex col-md-12 mt-3 flex-row align-items-center'>
            <div className='d-flex col-md-3'>
              <h6 style={{ fontSize: '1rem' }}>Religion</h6>
            </div>
            <div className='d-flex col-md-9'>
              <FormControl style={{ width: '33rem', marginLeft: 9 }}>
                <InputLabel style={{ fontSize: 15, marginTop: -2 }} id='demo-simple-select-label'>
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
          <div className='d-flex col-md-11 range-pref-b'></div>
          <div className='d-flex col-md-12 mt-3 flex-row align-items-center'>
            <div className='d-flex col-md-3'>
              <h6 style={{ fontSize: '1rem' }}>Income</h6>
            </div>
            <div className='d-flex col-md-9'>
              <FormControl style={{ width: '33rem', marginLeft: 9 }}>
                <InputLabel style={{ fontSize: 15, marginTop: -2 }} id='demo-simple-select-label'>
                  Income
                </InputLabel>
                <Select
                  style={{ height: 50 }}
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  // value={age}
                  label='Income'
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
          <div className='d-flex col-md-11 range-pref-b'></div>
          <div className='d-flex col-md-12 mt-3 flex-row align-items-center'>
            <div className='d-flex col-md-3'>
              <h6 style={{ fontSize: '1rem' }}>Occupation</h6>
            </div>
            <div className='d-flex col-md-9'>
              <FormControl style={{ width: '33rem', marginLeft: 9 }}>
                <InputLabel style={{ fontSize: 15, marginTop: -2 }} id='demo-simple-select-label'>
                  Occupation
                </InputLabel>
                <Select
                  style={{ height: 50 }}
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  // value={age}
                  label='Occupation'
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
                  <MenuItem value='33'>
                    - Other Education, Training, and Library Occupation
                  </MenuItem>
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
                  <MenuItem value='47'>
                    - Other Office and Administrative Support Occupation
                  </MenuItem>
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
          <div className='d-flex col-md-11 range-pref-b'></div>
          <div className='d-flex col-md-12 mb-4 flex-row mt-2 align-items-center '>
            <div className='d-flex col-md-3'>
              <h6 style={{ marginBottom: '-2rem', fontSize: '1rem' }}>City</h6>
            </div>
            <div className='d-flex col-md-9'>
              <Input width='35rem' height='45px' title='City Name' />
            </div>
          </div>
          <div className='d-flex col-md-11 range-pref-b'></div>

          <div className='d-flex col-md-12 mt-3 flex-row align-items-center'>
            <div className='d-flex col-md-3'>
              <h6 style={{ fontSize: '1rem' }}>Education</h6>
            </div>
            <div className='d-flex col-md-9'>
              <FormControl style={{ width: '33rem', marginLeft: 9 }}>
                <InputLabel style={{ fontSize: 15, marginTop: -2 }} id='demo-simple-select-label'>
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
                  <MenuItem value='Secondary education'>
                    Secondary education or high school
                  </MenuItem>
                  <MenuItem value='GED'>GED</MenuItem>
                  <MenuItem value='Vocational qualification'>Vocational qualification</MenuItem>
                  <MenuItem value="Bachelor's degree">Bachelor&apos;s degree</MenuItem>
                  <MenuItem value="Master's degree">Master&apos;s degree</MenuItem>
                  <MenuItem value='Doctorate or higher'>Doctorate or higher</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <center style={{ marginBottom: '2rem', marginTop: '2.5rem' }}>
            <Button title='Submit' />
          </center>
        </div>
      </div>
    </div>
  )
}

export default Preferences
