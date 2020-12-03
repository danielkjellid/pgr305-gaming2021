import React from 'react'
import { Form } from 'react-bootstrap'

const SearchBar = ({ onChange, placeholder }) => {
  return (
    <Form className='mb-4 mt-4'>
      <Form.Group>
        <Form.Label>Search</Form.Label>
        <Form.Control
          type='text'
          placeholder={placeholder}
          onChange={onChange}
        ></Form.Control>
      </Form.Group>
    </Form>
  )
}

export default SearchBar
