import React, { useState } from 'react'
import {
  Container,
  Table,
  Tabs,
  Tab,
  Button,
  ButtonGroup,
  Modal,
  Image,
  Form,
  InputGroup,
} from 'react-bootstrap'

const Admin = () => {
  // data for the time being
  const [dummyData] = useState([
    {
      id: 1,
      image: 'https://www.elkjop.no/primaryimage/193479',
      title: 'Fifa 21',
      category: 'Sport',
      price: 599,
    },
    {
      id: 2,
      title: 'Bloodborne',
      image:
        'https://www.elkjop.no/image/dv_web_D180001002318523/PS4HITS6/bloodborne-ps4.jpg?$prod_all4one$',
      category: 'Fantasy',
      price: 199,
    },
  ])
  const [clickedItem, setClickedItem] = useState({})

  // state controlling tabs
  const [key, setKey] = useState('games')

  // delete instance states and handlers
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)

  const handleConfirmDeleteModalClose = () => setShowConfirmDeleteModal(false)
  const handleConfirmDeleteModalShow = (id) => {
    // save clickedItem in variable
    const clickedItem = dummyData.filter((instance) => instance.id === id)

    // set states
    setClickedItem(clickedItem[0])
    setShowConfirmDeleteModal(true)
  }

  const handleDeleteItem = (id) => {
    const itemIndex = dummyData.findIndex((item) => item.id === clickedItem.id)

    // TODO: handle delete at api endpoint
    dummyData.splice(itemIndex, 1)
    setShowConfirmDeleteModal(false)
  }

  // edit instance states and handlers
  const [showEditModal, setShowEditModal] = useState(false)
  const [EditModalValidated, setEditModalValidated] = useState(false)

  const handleEditModalClose = () => setShowEditModal(false)
  const handleEditModalShow = (id) => {
    // save clickedItem in variable
    const clickedItem = dummyData.filter((instance) => instance.id === id)

    // set states
    setClickedItem(clickedItem[0])
    setShowEditModal(true)
  }

  const handleEditModalSubmit = (event) => {
    const form = event.target

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      event.stopPropagation()
      setEditModalValidated(true)

      console.log(clickedItem)

      // TODO: handle patch to api
    }
  }

  return (
    <div>
      <div className='admin-title-container'>
        <Container>
          <h1>Admin panel</h1>
        </Container>
      </div>
      <div className='admin-overview-container'>
        <Container>
          <Tabs
            id='games-overview'
            activeKey={key}
            onSelect={(k) => setKey(k)}
            transition={false}
            variant='tabs'
          >
            <Tab eventKey='games' title='Games'>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyData.map((data) => (
                    <tr key={data.id}>
                      <td>
                        <Image
                          className='product-image'
                          src={data.image}
                          rounded
                        />
                      </td>
                      <td>{data.title}</td>
                      <td>{data.category}</td>
                      <td>{data.price}</td>
                      <td>
                        <ButtonGroup>
                          <Button
                            variant='secondary'
                            onClick={() => handleEditModalShow(data.id)}
                          >
                            <svg
                              className='btn-icon'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                              />
                            </svg>
                          </Button>
                          <Button
                            variant='danger'
                            onClick={() =>
                              handleConfirmDeleteModalShow(data.id)
                            }
                          >
                            <svg
                              className='btn-icon'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                              />
                            </svg>
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey='characters' title='Characters'>
              <p>2</p>
            </Tab>
          </Tabs>
        </Container>
        <Modal
          animation={false}
          show={showConfirmDeleteModal}
          onHide={handleConfirmDeleteModalClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete instance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete {clickedItem.title}? This action
            cannot be undone.
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleConfirmDeleteModalClose}>
              No
            </Button>
            <Button
              variant='danger'
              onClick={() => handleDeleteItem(clickedItem.id)}
            >
              Delete instance
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          animation={false}
          show={showEditModal}
          onHide={handleEditModalClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit {clickedItem.title}</Modal.Title>
          </Modal.Header>
          <Form
            noValidate
            validated={EditModalValidated}
            onSubmit={handleEditModalSubmit}
          >
            <Modal.Body>
              <Form.Group controlId='id_item_title'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type='text'
                  defaultValue={clickedItem.title}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  You have to specify a title!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='id_item_file'>
                <Form.Label>Image</Form.Label>
                <Form.File label={clickedItem.image} custom />
                <Image
                  className='product-image mt-2'
                  src={clickedItem.image}
                  rounded
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  You have to upload an image!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='id_item_category'>
                <Form.Label>Category</Form.Label>
                <Form.Control required as='select' custom>
                  <option value='0'>Fantasy</option>
                  <option value='1'>Sport</option>
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='id_item_price'>
                <Form.Label>Price</Form.Label>
                <InputGroup>
                  <Form.Control
                    required
                    type='text'
                    defaultValue={clickedItem.price}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id='inputGroupPrepend'>kr</InputGroup.Text>
                  </InputGroup.Append>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type='invalid'>
                    You have to specify a price!
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleEditModalClose}>
                Cancel
              </Button>
              <Button variant='success' type='submit'>
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </div>
  )
}

export default Admin
