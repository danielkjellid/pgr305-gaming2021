import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useAsyncStateContext } from '../context/AsyncStateContext'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import CharacterList from '../components/character/CharacterList'
import CharacterDetails from '../components/character/CharacterDetails'
import SubPageHero from '../components/SubPageHero'
import SearchBar from '../components/SearchBar'

const Characters = () => {
  const { characterState } = useAsyncStateContext()
  const { url } = useRouteMatch()
  const [query, setQuery] = useState('')

  return (
    <Switch>
      <Route exact path={url}>
        <SubPageHero heading='Characters' page={false} />
        <Container>
          <SearchBar
            placeholder='Search for characters'
            onChange={(e) => setQuery(e.target.value)}
          />
          <Row xs={1} md={2} lg={3}>
            <CharacterList url={url} query={query} />
          </Row>
        </Container>
      </Route>
      <Route path={`${url}/:characterId`}>
        <Container>
          <CharacterDetails data={characterState.data} />
        </Container>
      </Route>
    </Switch>
  )
}

export default Characters
