import React from 'react';
import './styles.css'

function Hero({ hero }) {
  return (
    <li>
      <span>{hero.name}</span>
    </li>
  )
}

export default Hero;