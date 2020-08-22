import React from 'react'
import { Card } from 'react-bootstrap'

import AutocompleteEntry from '../AutocompleteEntry/AutocompleteEntry'

import './AutocompleteList.css'

const AutocompleteList = ({ suggestions, handleClick }) => {
  return (
    <Card className="autocompletelist">
      {suggestions.map(suggestion => <AutocompleteEntry key={suggestion[0]} suggestion={suggestion} handleClick={handleClick} />)}
    </Card>
  )
}

export default AutocompleteList
