import React, { useState, useEffect } from 'react'
import FlowerCard from './FlowerCard'

function FlowerList() {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/flowers')
      .then((response) => response.json())
      .then((flowers) => setFlowers(flowers))
  }, [])

  return (
    <div id='flower-list'>
      {flowers.map((flower) => (
        <FlowerCard key={flower.id} flower={flower} />
      ))}
    </div>
  )
}

export default FlowerList
