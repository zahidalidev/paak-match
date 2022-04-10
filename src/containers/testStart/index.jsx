import Button from 'components/button'

import testimg1 from 'assets/teststartimg.png'

import 'containers/testStart/styles.css'

const TestStart = () => {
  const { innerHeight } = window
  return (
    <div
      style={{ height: innerHeight - 150 }}
      className='d-flex container-fluid justify-content-center align-items-center'
    >
      <div className='d-flex test-start-wrapper col-md-6 justify-content-start align-items-start'>
        <img className='test-start-img' src={testimg1} />
        <div className='d-flex col-md-6 flex-column justify-content-center align-items-center'>
          <h4 className='test-start-h'>Do you know your personality?</h4>
          <p className='test-start-d test-start-d1'>
            Understanding personality science is the key to optimizing your behavior and getting to
            know others from there for matchmaking.
          </p>

          <p className='test-start-d'>
            Plus… your personality science might surprise you. Along with our free personality test,
            you can read the descriptions of each personality trait below.
          </p>

          <p className='test-start-d'>Take our official Test to find out your type:</p>
          <div className='test-start-bnt'>
            <Button width='20rem' title='Let’s Begin' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestStart
