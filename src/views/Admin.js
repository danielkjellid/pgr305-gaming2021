import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'


const Admin = () => {

  // data for the time being
  const [dummyData] = useState([{ id: 1, image: 'https://www.elkjop.no/primaryimage/193479', title: 'Fifa 21', category: 'Sport', price: 599}, { id: 2, title: 'Bloodborne', image: 'https://www.elkjop.no/image/dv_web_D180001002318523/PS4HITS6/bloodborne-ps4.jpg?$prod_all4one$', category: 'Fantasy', price: 199}])
  const [clickedItem, setClickedItem] = useState([])

  // state controlling tabs
  const [key, setKey] = useState('games')

  // delete instance states and handlers
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)

  const handleConfirmDeleteModalClose = () => setShowConfirmDeleteModal(false)
  const handleConfirmDeleteModalShow = (id) => {
    // save clickedItem in variable
    const clickedItem = dummyData.filter(instance => instance.id === id)
    
    // set states
    setClickedItem(clickedItem)
    setShowConfirmDeleteModal(true)
  }

  const handleDeleteItem = (id) => {
    const itemIndex = clickedItem.findIndex((element) => element.id === id)
    dummyData.splice(itemIndex, 1)
    setShowConfirmDeleteModal(false)
  }

  // edit instance states and handlers
  const [showEditModal, setShowEditModal] = useState(false)

  const handleEditModalClose = () => setShowEditModal(false)
  const handleEditModalShow = (id) => {
    // save clickedItem in variable
    const clickedItem = dummyData.filter(instance => instance.id === id)

    // set states
    setClickedItem(clickedItem)
    setShowEditModal(true)
  }


  return (
    <div>
      <div className="admin-title-container">
        <Container>
          <h1>Admin panel</h1>
        </Container>
      </div>
      <div className="admin-overview-container">
        <Container>
          <Tabs
            id="games-overview"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            transition={false}
          >
            <Tab eventKey="games" title="Games">
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
                  {dummyData.map(data => 
                    <tr key={data.id}>
                      <td><Image className="product-image-container" src={data.image} rounded /></td>
                      <td>{data.id}</td>
                      <td>{data.title}</td>
                      <td>{data.category}</td>
                      <td>{data.price}</td>
                      <td>
                        <ButtonGroup>
                          <Button variant="secondary" onClick={() => handleEditModalShow(data.id)}>
                            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </Button>
                          <Button variant="danger" onClick={() => handleConfirmDeleteModalShow(data.id)}>
                            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="characters" title="Characters">
              <p>2</p>
            </Tab>
          </Tabs>
        </Container>
        {clickedItem.map((item) =>
          <div key={item.id}>
            <Modal
              animation={false} 
              show={showConfirmDeleteModal} 
              onHide={handleConfirmDeleteModalClose}
            >
                <Modal.Header closeButton>
                  <Modal.Title>Delete instance</Modal.Title>
                </Modal.Header>
                  <Modal.Body>Are you sure you want to delete {item.title}? This action cannot be undone.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleConfirmDeleteModalClose}>
                    No
                  </Button>
                  <Button variant="danger" onClick={() => handleDeleteItem(item.id)}>
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
                  <Modal.Title>Edit {item.title}</Modal.Title>
                </Modal.Header>
                  <Modal.Body>X</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleEditModalClose}>
                    Cancel
                  </Button>
                  <Button variant="success" onClick={() => handleDeleteItem(item.id)}>
                    Save
                  </Button>
                </Modal.Footer>
            </Modal>
          </div> 
        )}
      </div>
    </div>
  )
}

export default Admin
