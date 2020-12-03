import React from 'react'
import { useParams, Link } from 'react-router-dom'
import CharacterItem from '../../components/character/CharacterItem'
import { useAsyncStateContext } from '../../context/AsyncStateContext'
import { Row, Col, Card, Container } from 'react-bootstrap'

const GameDetails = ({ data }) => {
  const { characterState } = useAsyncStateContext()
  const { gameId } = useParams()
  const game = data?.find((g) => g.id === String(gameId))

  let gameData

  if (game) {
    gameData = (
      <>
        <div>
          <Link to='/games'>Back to games</Link>
        </div>
        <Card className="mt-4 no-hover">
          <Card.Body>
            <div className='game-details'>
              <Container>
                <Row xs={1}>
                  <Col xs={{ order: 2}} sm={{ order: 1, span: 6}}>
                    <div className='game-details-desc'>
                      <h2> {game.title} </h2>
                      <p>
                        <span className='desc-gray'>Genre: </span> {game.genre}
                      </p>
                      <p>
                        <span className='desc-gray'>Price: </span> {game.price},-
                      </p>
                      <p>
                        <span className='desc-gray'>Console: </span> {game.console}
                      </p>
                      <p>
                        <span className='desc-gray'>Characters: </span>
                      </p>
                    </div>
                  </Col>
                  <Col xs={{ order: 1, span: 6, offset: 3 }} sm={{ order: 2, span: 3 }}>
                    <div>
                      <img className='game-image' src={game.image} alt='Game cover' />
                    </div>
                  </Col>
                  <Col xs={{ order: 3 }}>
                    <Row className="mt-4">
                      {characterState.data
                        ?.filter((character) => character.gamesId.includes(gameId))
                        .map((char) => (
                          <Col xs={{ order: 3}}>
                            <CharacterItem
                              key={char.id}
                              character={char}
                              url={'/characters'}
                            />
                          </Col>
                        ))}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </Card.Body>
        </Card>
      </>
    )
  } else {
    gameData = <h2> Game doesnt exist </h2>
  }

  return (
    <div>
      <div> {gameData} </div>
    </div>
  )
}

export default GameDetails
