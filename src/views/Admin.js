import React, { useState } from 'react'
import { 
  Container, 
  Table, 
  Tabs, 
  Tab, 
  Button, 
  ButtonGroup, 
  Image } from 'react-bootstrap'
import InstanceDeleteModal from '../components/InstanceDeleteModal'
import GameEditModal from '../components/GameEditModal'
import InstanceAddModal from '../components/InstanceAddModal'

const Admin = () => {
  // data for the time being
  const [dummyGames] = useState([
    {
      id: 1,
      image: 'https://www.elkjop.no/primaryimage/193479',
      title: 'Fifa 21',
      genre: 'Sport',
      price: 599,
      console: 'ps5',
    },
    {
      id: 2,
      title: 'Bloodborne',
      image:
        'https://www.elkjop.no/image/dv_web_D180001002318523/PS4HITS6/bloodborne-ps4.jpg?$prod_all4one$',
      genre: 'Fantasy',
      price: 199,
      console: 'ps5',
    },
  ])
  const [clickedItem, setClickedItem] = useState({})

  // state controlling tabs
  const [key, setKey] = useState('games')

  // edit game instance states and handlers
  const [showEditGameModal, setShowEditGameModal] = useState(false)
  const handleEditGameModalClose = () => setShowEditGameModal(false)
  const handleEditGameModalShow = (id) => {
    // save clickedItem in variable
    const clickedItem = dummyGames.filter((instance) => instance.id === id)

    // set states
    setClickedItem(clickedItem[0])
    setShowEditGameModal(true)
  }

  const handleEditModalSubmit = (item) => {
    // TODO: handle patch to api and update local state
    // item edited can be accessed by the item var
    // example: console.log(item)

    setShowEditGameModal(false)
  }

  // delete instance states and handlers
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const handleDeleteModalClose = () => setShowDeleteModal(false)
  const handleDeleteModalShow = (id) => {
    //save clickedItem in variable
    const clickedItem = dummyGames.filter(instance => instance.id === id)

    // set states
    setClickedItem(clickedItem[0])
    setShowDeleteModal(true)
  }

  const handleDeleteInstance = () => {
    const itemIndex = dummyGames.findIndex(item => item.id === clickedItem.id)

    // TODO: handle delete at api endpoint
    dummyGames.splice(itemIndex, 1)
    setShowDeleteModal(false)
  }

  // add instance and handlers
  const [showAddModal, setShowAddModal] = useState(false)
  const handleAddModalShow = () => setShowAddModal(true)
  const handleAddModalClose = () => setShowAddModal(false)

  const handleAddInstance = (tabKey, item) => {
    if (tabKey === 'games') {
      dummyGames.push(item)
      console.log('pushed')
    } else if (tabKey === 'characters') {
      
    } else if (tabKey === 'categories') {

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
          <div className="flex items-center justify-between">
            <h2>Overview</h2>
            <Button onClick={() => handleAddModalShow()}>Add new {key === 'games' ? 'game' : 'character'}</Button>
          </div>
          <Tabs
            id='games-overview'
            activeKey={key}
            onSelect={(k) => setKey(k)}
            transition={false}
            variant="tabs"
            className="mt-4"
          >
            <Tab eventKey="games" title="Games">
              <Table className="mt-4" responsive striped bordered>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Price</th>
                    <th>Console</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyGames.map((data) => (
                    <tr key={data.id}>
                      <td>
                        <Image
                          className='product-image'
                          src={data.image}
                          rounded
                        />
                      </td>
                      <td>{data.title}</td>
                      <td>{data.genre}</td>
                      <td>{data.price}</td>
                      <td>{data.console}</td>
                      <td>
                        <ButtonGroup>
                          <Button variant="secondary" onClick={() => handleEditGameModalShow(data.id)}>
                            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </Button>
                          <Button variant="danger" onClick={() => handleDeleteModalShow(data.id)}>
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
            <Tab eventKey='characters' title='Characters'>
              <p>2</p>
            </Tab>
            <Tab eventKey="categories" title="Categories">
              <p>3</p>
            </Tab>
          </Tabs>
        </Container>

        <InstanceDeleteModal
          show={showDeleteModal} 
          onHide={handleDeleteModalClose}
          confirmDelete={handleDeleteInstance}
          title={clickedItem.title}
        />

        <InstanceAddModal 
          show={showAddModal}
          onHide={handleAddModalClose}
          tab={key}
          submitAdd={handleAddInstance}
        />

        <GameEditModal
          show={showEditGameModal}
          onHide={handleEditGameModalClose}
          submitEdit={handleEditModalSubmit}
          game={clickedItem}
        />
      </div>
    </div>
  )
}

export default Admin