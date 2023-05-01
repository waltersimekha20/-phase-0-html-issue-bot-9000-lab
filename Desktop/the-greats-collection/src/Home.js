import React, { useState } from 'react';
import data from './db.json';

function Home() {
  const [tshirts, setTshirts] = useState(data.TSHIRTS);

  return (
    <div>
      {tshirts.map((tshirt) => (
        <div key={tshirt.id}>
          <img src={tshirt.img} alt={tshirt.type} />
          <h2>{tshirt.type}</h2>
          <p>Brand: {tshirt.brand}</p>
          <p>Size: {tshirt.size}</p>
          <p>Color: {tshirt.color}</p>
          <p>Price: ${tshirt.price}</p>
        </div>
      ))}
    
    </div>
  );
}

export default Home;
