import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

import './AutocompleteEntry.css'

const AutocompleteEntry = ({ suggestion, handleClick }) => {
  return (
    <ListGroup data-testid='autocomplete-entry' className="list-group-flush">
      <ListGroupItem onClick={() => handleClick(suggestion)}> {
        suggestion[1]
          ? suggestion[0] + ", " + suggestion[1]
          : suggestion[0]
      }
      </ListGroupItem>
    </ListGroup>
  )
}
export default AutocompleteEntry
