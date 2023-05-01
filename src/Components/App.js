// import React, { useState } from 'react'
// import CreateForm from './CreateForm'
// import FlowerList from './FlowerList'
// import FlowerCard from './FlowerCard'

// function App() {
  
//   return (
//     <div className='menu'>
//       <div className='logo'>
//         <h3>FLORA BY EMZ</h3>
//       </div>
//       <nav>
//         <ul className='navigation'>
//           <li id='link-home' className='nav-link'>
//             <a href='#Home'>Home</a>
//           </li>
//           <li className='nav-link'>
//             <a href='#Subscribe'>Subscribe</a>
//           </li>
//           <li className='nav-link'>
//             <a href='#Shop'>Shop</a>
//           </li>
//           <li className='nav-link'>
//             <a href='#Contact'>Contact</a>
//           </li>
//         </ul>
//       </nav>
//       <div className='search'>
//         <form>
//           <label htmlFor='search'></label>
//           <input
//             type='text'
//             className='input'
//             id='search-input'
//             name='search'
//             placeholder='.....search flowers...'
//           />
//         </form>
//       </div>
//     </div>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react'
import CreateForm from './CreateForm'
import FlowerList from './FlowerList'
import FlowerCard from './FlowerCard'

function App() {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    fetch( 'http://localhost:3000/flowers'
)
      .then((response) => response.json())
      .then((data) => setFlowers(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <CreateForm />
      <FlowerList>
        {flowers.map((flower) => (
          <FlowerCard key={flower.id} flower={flower} />
        ))}
      </FlowerList>
    </div>
  )
}

export default App





