import React from 'react'
import CharacterList from '../components/character/CharacterList'
import { Container, Row } from 'react-bootstrap'
import { useAsyncStateContext } from '../context/AsyncStateContext'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import CharacterDetails from '../components/character/CharacterDetails'

const Characters = () => {
  const { characterState } = useAsyncStateContext()
  const { url } = useRouteMatch()

  return (
    <Container>
      <Switch>
        <Route exact path={url}>
          <h1 className='main-heading'>Characters</h1>
          <Row xs={1} md={2} lg={3}>
            <CharacterList url={url} />
          </Row>
        </Route>
        <Route path={`${url}/:characterId`}>
          <CharacterDetails data={characterState.data} />
        </Route>
      </Switch>
    </Container>
  )
}

export default Characters
