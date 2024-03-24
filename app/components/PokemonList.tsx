import React from 'react'
import { Task } from '../types'
import Todo from './Todo';

interface PokemonListProps{
  todos: Task[];
}

const PokemonList = ({ todos }:PokemonListProps) => {
  return (
    <ul className='space-y-3'>
      {todos.map((todo) => (
      <Todo key={todo.id} todo={todo}/>
      ))}
    </ul>
  )
}

export default PokemonList

