import PropTypes from 'prop-types'
import { MenuItem } from '@material-ui/core'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const WeightageSelect = ({ handleChange, value, type }) => {
  return (
    <FormControl style={{ width: '7rem', marginLeft: 2 }}>
      <InputLabel style={{ fontSize: 15, marginTop: -2 }} id='demo-simple-select-label'>
        Weightage
      </InputLabel>
      <Select
        style={{ height: 50 }}
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        label='Weightage'
        onChange={e => handleChange(e.target.value, type)}
        value={value}
      >
        <MenuItem value={0.1}>10%</MenuItem>
        <MenuItem value={0.2}>20%</MenuItem>
        <MenuItem value={0.3}>30%</MenuItem>
        <MenuItem value={0.4}>40%</MenuItem>
        <MenuItem value={0.5}>50%</MenuItem>
        <MenuItem value={0.6}>60%</MenuItem>
        <MenuItem value={0.7}>70%</MenuItem>
        <MenuItem value={0.8}>80%</MenuItem>
        <MenuItem value={0.9}>90%</MenuItem>
        <MenuItem value={1}>100%</MenuItem>
      </Select>
    </FormControl>
  )
}

WeightageSelect.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string
}

export default WeightageSelect
