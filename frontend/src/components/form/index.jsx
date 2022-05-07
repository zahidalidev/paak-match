import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { updateUserProfile } from 'services/user'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from 'components/button'
import Input from 'components/common/Input'
import Loader from 'components/loader'
import { useNavigate, useParams } from 'react-router-dom'

import prof1Icon from 'assets/basic.png'
import casteIcon from 'assets/caste.png'
import professionIcon from 'assets/prof.png'
import bioIcon from 'assets/bio.png'

import 'components/form/styles.css'
import { getProfileDetails } from 'services/profile'

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
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const params = useParams()

  const [profData, setProfData] = useState({
    city: '',
    DOB: '',
    religion: '',
    motherTongue: '',
    gender: '',
    maritalStatus: '',
    height: '',
    caste: '',
    subCaste: '',
    education: '',
    occupation: '',
    income: '',
    about: ''
  })

  const getUserDetails = async () => {
    if (params.id) {
      const { data } = await getProfileDetails(params.id)
      console.log(data)
      setProfData({
        city: data.city,
        DOB: data.DOB,
        religion: data.religion,
        motherTongue: data.mother_tongue,
        gender: data.gender,
        maritalStatus: data.marital_status,
        height: data.height,
        caste: data.caste,
        subCaste: data.sub_caste,
        education: data.education,
        occupation: data.occupation,
        income: data.income,
        about: data.about
      })
    } else {
      setProfData({
        city: '',
        DOB: '',
        religion: '',
        motherTongue: '',
        gender: '',
        maritalStatus: '',
        height: '',
        caste: '',
        subCaste: '',
        education: '',
        occupation: '',
        income: '',
        about: ''
      })
    }
  }

  useEffect(() => {
    getUserDetails()
  }, [params.id])

  const handleChange = (value, key) => {
    const tempFeilds = { ...profData }
    tempFeilds[key] = value
    setProfData(tempFeilds)
  }

  const handleSubmit = async () => {
    setLoading(true)
    const tempObj = { ...profData }
    tempObj.userID = user.id
    try {
      await updateUserProfile(tempObj)
      setLoading(false)
      if (params.id) {
        navigate('/matches')
      } else {
        navigate('/preferences')
      }
    } catch (error) {
      console.log('Create Profile error: ', error)
      toast.error(error.response.data.message)
    }
    setLoading(false)
  }

  return (
    <>
      <section className='d-flex flex-column mt-5 justify-content-center align-items-center'>
        <Loader show={loading} />
        <InfoHeading title='Basic Information' icon={prof1Icon} />

        <div
          style={{ marginLeft: '-1rem' }}
          className='d-flex col-md-5 flex-row mt-3 align-items-center'
        >
          <div className='d-flex col-md-3'>
            <h6 style={{ marginBottom: '-1.5rem', fontSize: '1.2rem' }}>City</h6>
          </div>
          <div className='d-flex col-md-9'>
            <Input
              width='35rem'
              handleChange={e => handleChange(e.target.value, 'city')}
              value={profData.city}
              title='City'
            />
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
            <Input
              handleChange={e => handleChange(e.target.value, 'DOB')}
              value={profData.DOB}
              type='date'
              width='35rem'
            />
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
                onChange={e => handleChange(e.target.value, 'religion')}
                value={profData.religion}
                style={{ height: 50 }}
                label='Religion'
              >
                <MenuItem value='' selected='selected' disabled={true}>
                  Select Religion
                </MenuItem>
                <MenuItem value='Sunnis(Muslim)'>Sunnis(Muslim)</MenuItem>
                <MenuItem value='Shia(Muslim)'>Shia(Muslim)</MenuItem>
                <MenuItem value='Wahabi(Muslim)'>Wahabi(Muslim)</MenuItem>
                <MenuItem value='Brailvi(Muslim)'>Brailvi(Muslim)</MenuItem>
                <MenuItem value='bbasi(Muslim)'>Abbasi(Muslim)</MenuItem>
                <MenuItem value='Deobandi(Muslim)'>Deobandi(Muslim)</MenuItem>
                <MenuItem value='Christian(Non-Muslim)'>Christian(Non-Muslim)</MenuItem>
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
                label='Mother Tongue'
                onChange={e => handleChange(e.target.value, 'motherTongue')}
                value={profData.motherTongue}
              >
                <MenuItem value='' selected='selected' disabled={true}>
                  Select Mother Tongue
                </MenuItem>
                <MenuItem value='Urdu'>Urdu</MenuItem>
                <MenuItem value='Hindi'>Hindi</MenuItem>
                <MenuItem value='Punjabi'>Punjabi</MenuItem>
                <MenuItem value='Sindhi'>Sindhi</MenuItem>
                <MenuItem value='Balochi'>Balochi</MenuItem>
                <MenuItem value='Saraiki'>Saraiki</MenuItem>
                <MenuItem value='English'>English</MenuItem>
                <MenuItem value='Other'>Other</MenuItem>
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
                onChange={e => handleChange(e.target.value, 'gender')}
                value={profData.gender}
                style={{ height: 50 }}
                label='Gender'
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
                onChange={e => handleChange(e.target.value, 'maritalStatus')}
                value={profData.maritalStatus}
                label='Marital Status'
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
                onChange={e => handleChange(e.target.value, 'height')}
                value={profData.height}
                label='Height'
              >
                <MenuItem value='' selected='selected' disabled={true}>
                  Enter Height feet(inch)
                </MenuItem>
                <MenuItem value='54'>4′ 6″ (54″)</MenuItem>
                <MenuItem value='55'>4′ 7″ (55″)</MenuItem>
                <MenuItem value='56'>4′ 8″ (56″)</MenuItem>
                <MenuItem value='57'>4′ 9″ (57″)</MenuItem>
                <MenuItem value='58'>4′ 10″ (58″)</MenuItem>
                <MenuItem value='59'>4′ 11″ (59″)</MenuItem>
                <MenuItem value='60'>5′ (60″)</MenuItem>
                <MenuItem value='61'>5′ 1″ (61″)</MenuItem>
                <MenuItem value='62'>5′ 2″ (62″)</MenuItem>
                <MenuItem value='63'>5′ 3″ (63″)</MenuItem>
                <MenuItem value='64'>5′ 4″ (64″)</MenuItem>
                <MenuItem value='65'>5′ 5″ (65″)</MenuItem>
                <MenuItem value='66'>5′ 6″ (66″)</MenuItem>
                <MenuItem value='67'>5′ 7″ (67″)</MenuItem>
                <MenuItem value='68'>5′ 8″ (68″)</MenuItem>
                <MenuItem value='69'>5′ 9″ (69″)</MenuItem>
                <MenuItem value='70'>5′ 10″ (70″)</MenuItem>
                <MenuItem value='71'>5′ 11″ (71″)</MenuItem>
                <MenuItem value='72'>6′ (72″)</MenuItem>
                <MenuItem value='73'>6′ 1″(73″)</MenuItem>
                <MenuItem value='74'>6′ 2″(74″)</MenuItem>
                <MenuItem value='75'>6′ 3″(75″)</MenuItem>
                <MenuItem value='76'>6′ 4″(76″)</MenuItem>
                <MenuItem value='77'>6′ 5″(77″)</MenuItem>
                <MenuItem value='78'>6′ 6″(78″)</MenuItem>
                <MenuItem value='79'>6′ 7″(79″)</MenuItem>
                <MenuItem value='80'>6′ 8″(80″)</MenuItem>
                <MenuItem value='81'>6′ 9″(81″)</MenuItem>
                <MenuItem value='82'>7′ (82″)</MenuItem>
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
                onChange={e => handleChange(e.target.value, 'caste')}
                value={profData.caste}
                label='Caste'
              >
                <MenuItem value='' selected='selected' disabled={true}>
                  Enter Caste
                </MenuItem>
                <MenuItem value='Ansari'>Ansari</MenuItem>
                <MenuItem value='Arain'>Arain</MenuItem>
                <MenuItem value='Awan'>Awan</MenuItem>
                <MenuItem value='Bohra'>Bohra</MenuItem>
                <MenuItem value='Hanafi'>Hanafi</MenuItem>
                <MenuItem value='Jat'>Jat</MenuItem>
                <MenuItem value='Khoja'>Khoja</MenuItem>
                <MenuItem value='Lebbai'>Lebbai</MenuItem>
                <MenuItem value='Malik'>Malik</MenuItem>
                <MenuItem value='Arain'>Arain</MenuItem>
                <MenuItem value='Memon'>Memon</MenuItem>
                <MenuItem value='Mughal'>Mughal</MenuItem>
                <MenuItem value='Qureshi'>Qureshi</MenuItem>
                <MenuItem value='Rajput'>Rajput</MenuItem>
                <MenuItem value='Pathan'>Pathan</MenuItem>
                <MenuItem value='Rowther'>Rowther</MenuItem>
                <MenuItem value='Shafi'>Shafi</MenuItem>
                <MenuItem value='Sheikh'>Sheikh</MenuItem>
                <MenuItem value='Siddiqui'>Siddiqui</MenuItem>
                <MenuItem value='Syed'>Syed</MenuItem>
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
            <h6 style={{ marginBottom: '-1.5rem', fontSize: '1.2rem' }}>Sub-Caste</h6>
          </div>
          <div className='d-flex col-md-9'>
            <Input
              handleChange={e => handleChange(e.target.value, 'subCaste')}
              value={profData.subCaste}
              type='text'
              width='35rem'
              title='Sub-Caste'
            />
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
                onChange={e => handleChange(e.target.value, 'education')}
                value={profData.education}
                label='Education'
              >
                <MenuItem value='' selected='selected' disabled={true}>
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
                onChange={e => handleChange(e.target.value, 'occupation')}
                value={profData.occupation}
                label='Occupation'
              >
                <MenuItem value='Chiropractor'>- Chiropractor</MenuItem>
                <MenuItem value='Dentist'>- Dentist</MenuItem>
                <MenuItem value='Dietitian or Nutritionist'>- Dietitian or Nutritionist</MenuItem>
                <MenuItem value='Optometrist'>- Optometrist</MenuItem>
                <MenuItem value='Pharmacist'>- Pharmacist</MenuItem>
                <MenuItem value='Physician'>- Physician</MenuItem>
                <MenuItem value='Physician Assistant'>- Physician Assistant</MenuItem>
                <MenuItem value=''>- Podiatrist</MenuItem>
                <MenuItem value=''>- Registered Nurse</MenuItem>
                <MenuItem value=''>- Therapist</MenuItem>
                <MenuItem value=''>- Veterinarian</MenuItem>
                <MenuItem value=''>- Health Technologist or Technician</MenuItem>
                <MenuItem value=''>
                  - Other Healthcare Practitioners and Technical Occupation
                </MenuItem>
                <MenuItem value=''>- Nursing, Psychiatric, or Home Health Aide</MenuItem>
                <MenuItem value=''>
                  - Occupational and Physical Therapist Assistant or Aide
                </MenuItem>
                <MenuItem value=''>- Other Healthcare Support Occupation</MenuItem>
                <MenuItem value=''>- Chief Executive</MenuItem>
                <MenuItem value=''>- General and Operations Manager</MenuItem>
                <MenuItem value=''>
                  - Advertising, Marketing, Promotions, Public Relations, and Sales Manager
                </MenuItem>
                <MenuItem value=''>
                  - Operations Specialties Manager (e.g., IT or HR Manager)
                </MenuItem>
                <MenuItem value=''>- Construction Manager</MenuItem>
                <MenuItem value=''>- Engineering Manager</MenuItem>
                <MenuItem value=''>- Accountant, Auditor</MenuItem>
                <MenuItem value=''>- Business Operations or Financial Specialist</MenuItem>
                <MenuItem value=''>- Business Owner</MenuItem>
                <MenuItem value=''>
                  - Other Business, Executive, Management, Financial Occupation
                </MenuItem>
                <MenuItem value=''>- Architect, Surveyor, or Cartographer</MenuItem>
                <MenuItem value=''>- Engineer</MenuItem>
                <MenuItem value=''>- Other Architecture and Engineering Occupation</MenuItem>
                <MenuItem value=''>- Postsecondary Teacher (e.g., College Professor)</MenuItem>
                <MenuItem value=''>
                  - Primary, Secondary, or Special Education School Teacher
                </MenuItem>
                <MenuItem value=''>- Other Teacher or Instructor</MenuItem>
                <MenuItem value=''>- Other Education, Training, and Library Occupation</MenuItem>
                <MenuItem value=''>
                  - Arts, Design, Entertainment, Sports, and Media Occupations
                </MenuItem>
                <MenuItem value=''>- Computer Specialist, Mathematical Science</MenuItem>
                <MenuItem value=''>
                  - Counselor, Social Worker, or Other Community and Social Service Specialist
                </MenuItem>
                <MenuItem value=''>- Lawyer, Judge</MenuItem>
                <MenuItem value=''>
                  - Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)
                </MenuItem>
                <MenuItem value=''>
                  - Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)
                </MenuItem>
                <MenuItem value=''>
                  - Religious Worker (e.g., Clergy, Director of Religious Activities or Education)
                </MenuItem>
                <MenuItem value=''>- Social Scientist and Related Worker</MenuItem>
                <MenuItem value=''>- Other Professional Occupation</MenuItem>
                <MenuItem value=''>- Supervisor of Administrative Support Workers</MenuItem>
                <MenuItem value=''>- Financial Clerk</MenuItem>
                <MenuItem value=''>- Secretary or Administrative Assistant</MenuItem>
                <MenuItem value=''>
                  - Material Recording, Scheduling, and Dispatching Worker
                </MenuItem>
                <MenuItem value=''>- Other Office and Administrative Support Occupation</MenuItem>
                <MenuItem value=''>
                  - Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)
                </MenuItem>
                <MenuItem value=''>- Chef or Head Cook</MenuItem>
                <MenuItem value=''>- Cook or Food Preparation Worker</MenuItem>
                <MenuItem value=''>
                  - Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)
                </MenuItem>
                <MenuItem value=''>- Building and Grounds Cleaning and Maintenance</MenuItem>
                <MenuItem value=''>
                  - Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)
                </MenuItem>
                <MenuItem value=''>- Sales Supervisor, Retail Sales</MenuItem>
                <MenuItem value=''>- Retail Sales Worker</MenuItem>
                <MenuItem value=''>- Insurance Sales Agent</MenuItem>
                <MenuItem value=''>- Sales Representative</MenuItem>
                <MenuItem value=''>- Real Estate Sales Agent</MenuItem>
                <MenuItem value=''>- Other Services Occupation</MenuItem>
                <MenuItem value=''>
                  - Construction and Extraction (e.g., Construction Laborer, Electrician)
                </MenuItem>
                <MenuItem value=''>- Farming, Fishing, and Forestry</MenuItem>
                <MenuItem value=''>- Installation, Maintenance, and Repair</MenuItem>
                <MenuItem value=''>- Production Occupations</MenuItem>
                <MenuItem value=''>
                  - Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation
                </MenuItem>
                <MenuItem value=''>- Aircraft Pilot or Flight Engineer</MenuItem>
                <MenuItem value=''>
                  - Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)
                </MenuItem>
                <MenuItem value=''>- Other Transportation Occupation</MenuItem>
                <MenuItem value=''>- Military</MenuItem>
                <MenuItem value=''>- Homemaker</MenuItem>
                <MenuItem value=''>- Other Occupation</MenuItem>
                <MenuItem value=''>- Don&apos;t Know</MenuItem>
                <MenuItem value=''>- Not Applicable</MenuItem>
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
                onChange={e => handleChange(e.target.value, 'income')}
                value={profData.income}
                label='Income'
                // onChange={handleChange}
              >
                <MenuItem value='' selected='selected' disabled={true}>
                  Enter Income (PKR)
                </MenuItem>
                <MenuItem value='20,000-30,000'>20,000-30,000</MenuItem>
                <MenuItem value='30,000-40,000'>30,000-40,000</MenuItem>
                <MenuItem value='40,000-50,000'>40,000-50,000</MenuItem>
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
                <MenuItem value='notdefined2'>2,00,000-3,00,000</MenuItem>
                <MenuItem value='notdefined2'>3,00,000-4,00,000</MenuItem>
                <MenuItem value='notdefined2'>4,00,000-5,00,000</MenuItem>
                <MenuItem value='notdefined2'>5,00,000-10,00,000</MenuItem>
                <MenuItem value='notdefined2'>10,00,000-20,00,000</MenuItem>
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
            <Input
              handleChange={e => handleChange(e.target.value, 'about')}
              value={profData.about}
              type='text'
              width='35rem'
              title='About You'
            />
          </div>
        </div>
      </section>
      <center className='text-white' style={{ marginBottom: '8rem', marginTop: '8rem' }}>
        <Button onClick={handleSubmit} title={params.id ? 'Update' : 'Submit'} />
      </center>
    </>
  )
}

InfoHeading.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired
}

export default Form
