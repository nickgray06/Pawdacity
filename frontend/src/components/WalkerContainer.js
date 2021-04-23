import React from 'react'
import WalkerCard from './WalkerCard'

export default function WalkerContainer(props) {

  const displayWalkers = () => props.walkers.map(walker => {
    return <WalkerCard walker={walker} key={walker.id} updateWalker={props.updateWalker} />
  })
  return (
    <div className="container">
      {displayWalkers()}
    </div>
  )
}
