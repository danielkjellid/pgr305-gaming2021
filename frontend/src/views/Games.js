import React from 'react'
import GameList from '../components/game/GameList'
import { Row, Container } from 'react-bootstrap'
import { useAsyncStateContext } from '../context/AsyncStateContext'
import { Route, useRouteMatch, Switch } from 'react-router-dom'
import GameDetails from '../components/game/GameDetails'
import SubPageHero from '../components/SubPageHero'

const Games = () => {
  const { gameState } = useAsyncStateContext()
  const { url } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={url}>
        <SubPageHero heading='Games' page={true} />
        <Container>
          <Row xs={1} md={2} lg={3}>
            <GameList url={url} />
          </Row>
        </Container>
      </Route>
      <Route path={`${url}/:gameId`}>
        <Container>
          <GameDetails data={gameState.data} />
        </Container>
      </Route>
    </Switch>
  )
}

export default Games
