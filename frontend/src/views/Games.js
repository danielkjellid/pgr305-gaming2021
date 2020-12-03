import React, { useState } from 'react'
import { Row, Container } from 'react-bootstrap'
import { useAsyncStateContext } from '../context/AsyncStateContext'
import { Route, useRouteMatch, Switch } from 'react-router-dom'
import GameList from '../components/game/GameList'
import GameDetails from '../components/game/GameDetails'
import SubPageHero from '../components/common/SubPageHero'
import SearchBar from '../components/common/SearchBar'

const Games = () => {
  const { gameState } = useAsyncStateContext()
  const { url } = useRouteMatch()
  const [query, setQuery] = useState('')

  return (
    <Switch>
      <Route exact path={url}>
        <SubPageHero heading='Games' page={true} />
        <Container>
          <SearchBar
            placeholder='Search for games'
            onChange={(e) => setQuery(e.target.value)}
          />
          <Row xs={1} md={2} lg={3}>
            <GameList url={url} query={query} />
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
