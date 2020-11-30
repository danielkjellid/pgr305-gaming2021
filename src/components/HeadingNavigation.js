import React from 'react'
import { Link } from 'react-router-dom'

const HeadingNavigation = (props) => {
  return (
    <div className='section-heading'>
      <h2 className='section-text'> {props.headingText} </h2>
      <Link to='/games' className='chevron-btn'>
        <span className='btn-text'>{props.btnText}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          style={{ width: '1rem' }}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </Link>
    </div>
  )
}

export default HeadingNavigation
