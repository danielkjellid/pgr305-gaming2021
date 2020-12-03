import React, { useState } from 'react'
import { 
  Container, 
  Table, 
  Tabs, 
  Tab, 
  Button, 
  ButtonGroup, 
  Image, 
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
  Form } from 'react-bootstrap'

import InstanceDeleteModal from '../components/InstanceDeleteModal'
import InstanceAddModal from '../components/InstanceAddModal'
import InstanceEditModal from '../components/InstanceEditModal'
import { useAsyncStateContext } from '../context/AsyncStateContext'

const Admin = () => {
  // data for the time being
  const [dummyGames] = useState([
    {
      id: 1,
      image: 'https://www.elkjop.no/primaryimage/193479',
      title: 'Fifa 21',
      genre: 'Sport',
      price: 599,
      console: 'PlayStation 5',
    },
    {
      id: 2,
      title: 'Bloodborne',
      image:
        'https://www.elkjop.no/image/dv_web_D180001002318523/PS4HITS6/bloodborne-ps4.jpg?$prod_all4one$',
      genre: 'Fantasy',
      price: 199,
      console: 'PlayStation 5',
    },
  ])
  const [dummyCharacters] = useState([
    {
      id: 1,
      name: 'Mario',
      image: 'https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png',
      gender: 'Male',
      homeWorld: 'Mushroom Kingdom',
      gamesId: [1]
    },
    {
      id: 2,
      name: 'Luigi',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/73/Luigi_NSMBUDX.png',
      gender: 'Male',
      homeWorld: 'Mushroom Kingdom',
      gamesId: [1, 2]
    },
  ])
  const { gameState } = useAsyncStateContext()
  const { characterState } = useAsyncStateContext()

  // empty state to store item which is to be edited or deleted
  const [clickedItem, setClickedItem] = useState({})

  // state that controls query and displays queried instances
  const [gamesQuery, setGamesQuery] = useState('')
  const [characterQuery, setCharacterQuery] = useState('')

  // state controlling tabs
  const [key, setKey] = useState('games')

  const findAndSplice = (arr) => {
    const itemIndex = arr.findIndex(item => item.id === clickedItem.id)
    return arr.splice(itemIndex, 1)
  }

  const findAndReplace = (arr, obj) => {
    const itemIndex = arr.findIndex(item => item.id === clickedItem.id)
    return arr.splice(itemIndex, 1, obj)
  }

  const [showEditModal, setShowEditModal] = useState(false)
  const handleEditModalClose = () => setShowEditModal(false)
  const handleEditModalShow = (id) => {

    // set local clickedItem variable
    let clickedItem = null

     // populate clickedItem variable
    if (key === 'games') {
      clickedItem = dummyGames.filter((instance) => instance.id === id)
    } else if (key === 'characters') {
      clickedItem = dummyCharacters.filter((instance) => instance.id === id)
    }

    // set states
    setClickedItem(clickedItem[0])
    setShowEditModal(true)
  }

  const handleEditInstance = (key, item) => {
    if (key === 'games') {
      findAndReplace(dummyGames, item)
    } else if (key === 'characters') {
      findAndReplace(dummyCharacters, item)
    }
    setShowEditModal(false)
  }

  // delete instance states and handlers
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const handleDeleteModalClose = () => setShowDeleteModal(false)
  const handleDeleteModalShow = (id) => {
    //save clickedItem in variable

    let clickedItem = null

    if (key === 'games') {
      clickedItem = dummyGames.filter(instance => instance.id === id)
    } else if (key === 'characters') {
      clickedItem = dummyCharacters.filter(instance => instance.id === id)
    }

    // set states
    setClickedItem(clickedItem[0])
    setShowDeleteModal(true)
  }

  const handleDeleteInstance = () => {

    if (key === 'games') {
      findAndSplice(dummyGames)
    } else if (key === 'characters') {
      findAndSplice(dummyCharacters)
    }

    // TODO: handle delete at api endpoint
    setShowDeleteModal(false)
  }

  // add instance state and handlers
  const [showAddModal, setShowAddModal] = useState(false)
  const handleAddModalShow = () => setShowAddModal(true)
  const handleAddModalClose = () => setShowAddModal(false)

  const handleAddInstance = (tabKey, item) => {
    if (tabKey === 'games') {
      // handle new games 
      dummyGames.push(item)
    } else if (tabKey === 'characters') {
      // handle new characters
      dummyCharacters.push(item)
    }

    setShowAddModal(false)
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
          <Row>
            <Col><h2>Overview</h2></Col>
            <Col className="flex justify-end">
              <Button onClick={() => handleAddModalShow()}>Add new</Button>
            </Col>
          </Row>
          <Tabs
            id='games-overview'
            activeKey={key}
            onSelect={(k) => setKey(k)}
            transition={false}
            variant="tabs"
            className="mt-4"
          >
            <Tab eventKey="games" title="Games">
              <Form className="mt-4">
                <Form.Group>
                  <Form.Label>Search</Form.Label>
                  <Form.Control type="text" placeholder="Search for games" onChange={e => setGamesQuery(e.target.value)} />
                </Form.Group>
              </Form>
              <Table responsive striped bordered>
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
                  {gameState.data.filter(game => game.title.includes(gamesQuery)).map((data) => (
                    <tr key={data.id}>
                      <td>
                        <OverlayTrigger
                          key={data.id}
                          placement="top"
                          overlay={
                            <Tooltip id={`tooltip-image-${data.id}`}>
                              <Image
                                className="product-image-tooltip"
                                src={data.image}
                                rounded
                              />
                            </Tooltip>
                          }
                        >
                          <Image
                            className='product-image'
                            src={data.image}
                            rounded
                          />
                        </OverlayTrigger>
                      </td>
                      <td>{data.title}</td>
                      <td>{data.genre}</td>
                      <td>{data.price}</td>
                      <td>{data.console}</td>
                      <td>
                        <ButtonGroup>
                          <Button variant="secondary" onClick={() => handleEditModalShow(data.id)}>
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
              <Form className="mt-4">
                <Form.Group>
                  <Form.Label>Search</Form.Label>
                  <Form.Control type="text" placeholder="Search for characters" onChange={e => setCharacterQuery(e.target.value)} />
                </Form.Group>
              </Form>
              <Table responsive striped bordered>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Home world</th>
                    <th>Games</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {characterState.data.filter(character => character.name.includes(characterQuery)).map((data) => (
                    <tr key={data.id}>
                      <td>
                        <OverlayTrigger
                          key={data.id}
                          placement="top"
                          overlay={
                            <Tooltip id={`tooltip-character-image-${data.id}`}>
                              <Image
                                className="product-image-tooltip"
                                src={data.image}
                                rounded
                              />
                            </Tooltip>
                          }
                        >
                          <Image
                            className='product-image'
                            src={data.image}
                            rounded
                          />
                        </OverlayTrigger>
                      </td>
                      <td>{data.name}</td>
                      <td>{data.gender}</td>
                      <td>{data.homeWorld}</td>
                      <td>
                        <ul>
                        {data.gamesId.map(id => (
                          dummyGames.filter(game => game.id === parseInt(id)).map(filteredGame => (
                            <li key={filteredGame.id}>{filteredGame.title}</li>
                          ))
                        ))}
                        </ul>
                      </td>
                      <td>
                        <ButtonGroup>
                          <Button variant="secondary" onClick={() => handleEditModalShow(data.id)}>
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
          </Tabs>
        </Container>

        <InstanceDeleteModal
          show={showDeleteModal} 
          onHide={handleDeleteModalClose}
          confirmDelete={handleDeleteInstance}
          title={clickedItem.name !== undefined ? clickedItem.name : clickedItem.title}
        />

        <InstanceAddModal 
          show={showAddModal}
          onHide={handleAddModalClose}
          tab={key}
          submitAdd={handleAddInstance}
          games={dummyGames}
        />
        
        <InstanceEditModal
          show={showEditModal}
          onHide={handleEditModalClose}
          tab={key}
          item={clickedItem}
          submitEdit={handleEditInstance}
          games={dummyGames}
        />
      </div>
    </div>
  )
}

export default Admin