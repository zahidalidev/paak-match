import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Pagination as MuiPagination, PaginationItem, Stack } from '@mui/material'
import PropTypes from 'prop-types'

import 'components/pagination/styles.css'

const Pagination = ({ pageCount, handlePageClick }) => (
  <div className='pagination-wrapper'>
    <Stack spacing={2}>
      <MuiPagination
        count={pageCount}
        onChange={handlePageClick}
        renderItem={item => (
          <PaginationItem components={{ previous: ArrowBack, next: ArrowForward }} {...item} />
        )}
      />
    </Stack>
  </div>
)

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired
}

export default Pagination
