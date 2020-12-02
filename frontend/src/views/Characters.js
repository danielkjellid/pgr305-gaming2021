import React from 'react'
import CharacterList from '../components/character/CharacterList'
import { Container, Row } from 'react-bootstrap'
import { useAsyncStateContext } from '../context/AsyncStateContext'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import CharacterDetails from '../components/character/CharacterDetails'
import SubPageHero from '../components/SubPageHero'

const Characters = () => {
  const { characterState } = useAsyncStateContext()
  const { url } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={url}>
        <SubPageHero heading='Characters' page={false} />
        <Container>
          <Row xs={1} md={2} lg={3}>
            <CharacterList url={url} />
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
