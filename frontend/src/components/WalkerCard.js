import React from 'react'
import FlipCard from './FlipCard'

export default function WalkerCard({walker, updateWalker}) {

  
  return (
    <div>
      <FlipCard walker={walker} updateWalker={updateWalker}/>
    </div>
  )
}
