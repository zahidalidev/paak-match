import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import PropTypes from 'prop-types'

const Input = ({
  title,
  width = '21rem',
  height = 50,
  icon,
  multiline = false,
  type = 'text',
  handleChange,
  value,
  onEnter
}) => {
  return (
    <FormControl sx={{ m: 1, width, height: 10 }} variant='outlined'>
      <InputLabel
        style={{ fontSize: height && 15, marginTop: height && -3 }}
        htmlFor='outlined-adornment-password'
      >
        {title}
      </InputLabel>
      <OutlinedInput
        onKeyPress={e => {
          if (e.key === 'Enter') {
            onEnter()
          }
        }}
        multiline={multiline}
        style={{ height }}
        type={type}
        id='outlined-adornment-password'
        value={value}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton aria-label='toggle password visibility' edge='end'>
              {icon}
            </IconButton>
          </InputAdornment>
        }
        label='Password'
      />
    </FormControl>
  )
}

Input.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.any,
  multiline: PropTypes.bool,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  onEnter: PropTypes.func
}

export default Input
