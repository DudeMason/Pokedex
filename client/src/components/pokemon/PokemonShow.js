import React, { Component } from 'react';
import {Button, Icon} from 'semantic-ui-react';
import PokeForm from './PokeForm'

class PokemonShow extends Component {
  state = {editing: false}

  toggleEdit = () => {
    this.setState({editing: !this.state.editing})
  }

 render() {

   const { name, pokemon_type, level, moves, weight, height } = this.props.location.state

   return(
     <>

      {
        this.state.editing
        ?
        <PokeForm {...this.props.location.state} />
        :
        <>
          <h1>{name}</h1>
          <p>Type:{pokemon_type}</p>
          <p>Level:{level}</p>
          <p>Moves:{moves}</p>
          <p>Weight:{weight}</p>
          <p>Height:{height}</p>
          <Button onClick={() => this.toggleEdit()}>
            <Icon name='pencil' />
          </Button>
        </>
      }

     </>

   )
 }


}

export default PokemonShow
