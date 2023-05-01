import React from 'react'

function FlowerCard({ flower }) {
  const { name, image, price, likes } = flower

  const handleBuy = () => {
    console.log(`You bought ${name}`)
  }

  const handleLike = () => {
    console.log(`You liked ${name}`)
  }

  const handleDelete = () => {
    console.log(`You deleted ${name}`)
  }

  const handleEdit = () => {
    console.log(`You edited ${name}`)
  }

  return (
    <div className='card'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>KES {price}</p>
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleLike}>Like ({likes})</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  )
}

export default FlowerCard
