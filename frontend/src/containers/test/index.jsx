import { useState, useEffect } from 'react'
import { ArrowForward } from '@material-ui/icons'

import Pagination from 'components/pagination'
import questionsData from 'utils/testQuestions'

import 'containers/test/styles.css'

const Test = () => {
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  const itemsPerPage = 12

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(questionsData.slice(itemOffset, endOffset))
    setPageCount(Math.floor(questionsData.length / itemsPerPage))
  }, [itemOffset, questionsData])

  const handlePageClick = (event, pageNumber) => {
    const newOffset = (pageNumber * itemsPerPage) % questionsData.length
    setItemOffset(newOffset)
  }
  return (
    <div className='d-flex test-question-contaienr container-fluid flex-column justify-content-center align-items-center'>
      {currentItems.map(item => (
        <div key={item.id} className='d-flex flex-column col-md-8 questions-wrapper'>
          <div className='d-flex flex-row mt-3'>
            <div className='d-flex col-md-11 flex-row mt-3 range-pref-b'>
              <div className='d-flex col-md-2'>
                <ArrowForward className='arrow-f-question' />
              </div>
              <div className='d-flex col-md-10 justify-content-center align-items-center'>
                <h5>At a social event I:</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  )
}

export default Test
