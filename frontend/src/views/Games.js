import React from 'react'
import GameList from '../components/game/GameList'
import { Row, Container } from 'react-bootstrap'
import { useAsyncStateContext } from '../context/AsyncStateContext'
import { Route, useRouteMatch, Switch } from 'react-router-dom'
import GameDetails from '../components/game/GameDetails'

const Games = () => {
  const { gameState } = useAsyncStateContext()
  const { url } = useRouteMatch()

  return (
    <Container>
      <Switch>
        <Route exact path={url}>
          <h1 className='main-heading'>Games</h1>
          <Row xs={1} md={2} lg={3}>
            <GameList url={url} />
          </Row>
        </Route>
        <Route path={`${url}/:gameId`}>
          <GameDetails data={gameState.data} />
        </Route>
      </Switch>
    </Container>
  )
}

export default Games
