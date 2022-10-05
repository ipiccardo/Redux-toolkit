import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getPokemons, isLoading } from './store/slices/pokemon'

export const PokemonApp = () => {

  const { pokemons, page, isLoading } = useSelector( state => state.pokemons)
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch( getPokemons() );
      }, [])


  return (
    <>
        <h1>PokemonApp</h1>
        <hr/>
        <span>Loading: {isLoading ? 'true': 'false'}</span>

        <ul>
        {
          pokemons.map((pokemon, index) => {
            return (
            <li key={index} style={{listStyle: 'none'}}>{pokemon.name}</li>
            )
          })
        }
        </ul>
        <button disabled={isLoading}
        onClick={() => dispatch(
          getPokemons(page))
        }>
            Next
        </button>
    </>
  )
}
