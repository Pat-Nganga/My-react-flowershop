// import React from 'react'

// function CreateForm() {
//   return (
//     <div className='create-form'>
//       <h2>Add a new flower post</h2>
//       <form id='flower-form'>
//         <label htmlFor='name'>Name:</label>
//         <input
//           type='text'
//           id='flower-name'
//           className='input'
//           name='flower-name'
//         />
//         <br />
//         <label className='label' htmlFor='price'>
//           Price:
//         </label>
//         <input type='text' id='price' className='input' name='price' />

//         <label className='label' htmlFor='image'>
//           Image:
//         </label>
//         <input type='url' id='image' className='input' name='image' />
//       </form>
//       <button id='form-btn' type='submit'>
//         Add{' '}
//       </button>
//     </div>
//   )
// }

// export default CreateForm


import React, { useState } from 'react'

function CreateForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price,setPrice] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/api/flowers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description ,price}),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
    setName('')
    setDescription('')
    setPrice('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        id='name'
        name='name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor='description'>Description</label>
      <textarea
        id='description'
        name='description'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label htmlFor='price'>Price</label>
      <textarea
        id='price'
        name='price'
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <button type='submit'>Create Flower</button>
    </form>
  )
}

export default CreateForm

