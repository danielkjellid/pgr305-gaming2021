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

  const [dummyData] = useState([{ id: 1, image: 'https://www.elkjop.no/primaryimage/193479', title: 'Fifa 21', category: 'Sport', price: 599}, { id: 2, title: 'Bloodborne', image: 'https://www.elkjop.no/image/dv_web_D180001002318523/PS4HITS6/bloodborne-ps4.jpg?$prod_all4one$', category: 'Fantasy', price: 199}])
  const [key, setKey] = useState('games')
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)

  const handleConfirmDeleteClose = () => setShowConfirmDelete(false)
  const handleConfirmDeleteShow = () => setShowConfirmDelete(true)

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
                  {dummyData.map((data => 
                    <tr key={data.id}>
                      <td><Image className="product-image-container" src={data.image} rounded /></td>
                      <td>{data.id}</td>
                      <td>{data.title}</td>
                      <td>{data.category}</td>
                      <td>{data.price}</td>
                      <td>
                        <ButtonGroup>
                          <Button variant="secondary">
                            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </Button>
                          <Button variant="secondary">
                            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </Button>
                          <Button variant="danger" onClick={handleConfirmDeleteShow}>
                            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="characters" title="Characters">
              <p>2</p>
            </Tab>
          </Tabs>
        </Container>
        <Modal animation={false} show={showConfirmDelete} onHide={handleConfirmDeleteClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete instance</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure yout want to delete name? This action cannot be undone.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleConfirmDeleteClose}>
              No
            </Button>
            <Button variant="danger" onClick={handleConfirmDeleteClose}>
              Delete instance
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Admin
