import React from 'react';
import { useHistory } from 'react-router-dom'

import './styles.css'

function Hero({ hero }) {
  const history = useHistory()

  function navigateToPageDetails(id) {
    history.push(`/details/${id}`)
  }

  return (
    <li onClick={() => navigateToPageDetails(hero.id)}>
      <span>{hero.name}</span>
    </li>
  )
}

export default Hero;