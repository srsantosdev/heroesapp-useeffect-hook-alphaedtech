import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'

import './styles.css'

function Details() {
  const { hero_id } = useParams()
  const history = useHistory()

  const [hero, setHero] = useState({})

  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  
  useEffect(() => {
    async function loadData() {
      try {
        if(hero_id) {
          const response = await fetch(`https://my-json-server.typicode.com/srsantosdev/heroesfakeapi/avengers/${hero_id}`)
          const data = await response.json()
          
          setHero(data)
        }
      } catch (error) {
        setErrorMessage("Heroi não encontrado.")
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [hero_id])

  if(loading) {
    return (
      <div className="container">
        <p>Carregando...</p>
      </div>
    )
  }

  if(!hero_id || !hero?.id) {
    return (
      <div className="container">
        <p>{errorMessage}</p>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="info">
        <button 
          type="button" 
          className="go-back-button"
          onClick={() => history.goBack()}
        >
          Voltar
        </button>

        <h1>{hero.name}</h1>
        <span>{hero.actor}</span>

        <p>{hero.description}</p>
      </div>

      <div>
        <img src={hero.image} alt={`Foto do ${hero.name}`} />
      </div>
    </div>
  )
}

export default Details;