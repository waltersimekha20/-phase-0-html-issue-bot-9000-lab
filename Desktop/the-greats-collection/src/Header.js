import React, { useState } from 'react';
import data from './db.json';



function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(data);
  const [tshirts, setTshirts] = useState([
    
  
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
console.log(searchTerm);
    const filteredTshirts = data(tshirt => console.log(tshirt.type));
    setTshirts(filteredTshirts);
    console.log(filteredTshirts);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search T-Shirts" />
        <button type="submit">Search</button>
      </form>
      <div className="tshirt-list">
        {tshirts.map(tshirt => (
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
    </div>
  );
}

export default Header;
