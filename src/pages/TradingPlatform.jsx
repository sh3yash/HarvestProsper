import React, { useState } from 'react';
import './TradingPlatform.css';

const products = {
  vegetables: [
    { name: 'Carrot', description: 'Fresh and organic carrots.', image: 'carrot.jpg', price: '$3.50/kg' },
    { name: 'Potato', description: 'High-quality potatoes.', image: 'potato.jpg', price: '$1.20/kg' },
  ],
  fruits: [
    { name: 'Apple', description: 'Juicy and delicious apples.', image: 'apple.jpg', price: '$2.00/kg' },
    { name: 'Banana', description: 'Ripe bananas full of energy.', image: 'banana.jpg', price: '$1.50/kg' },
  ],
  seeds: [
    { name: 'Sunflower Seeds', description: 'Perfect for snacking.', image: 'sunflower-seeds.jpg', price: '$5.00/kg' },
    { name: 'Pumpkin Seeds', description: 'Rich in nutrients.', image: 'pumpkin-seeds.jpg', price: '$4.00/kg' },
  ]
};

const TradingPlatform = () => {
  const [category, setCategory] = useState('vegetables');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="marketplace">
      <h1 id="trader-heading">Welcome to Our Farmers' Market</h1>
      
      {/* Toggle Switch */}
      <div className="category-switch">
        <button onClick={() => handleCategoryChange('vegetables')} className={category === 'vegetables' ? 'active' : ''}>Vegetables</button>
        <button onClick={() => handleCategoryChange('fruits')} className={category === 'fruits' ? 'active' : ''}>Fruits</button>
        <button onClick={() => handleCategoryChange('seeds')} className={category === 'seeds' ? 'active' : ''}>Seeds</button>
      </div>

      {/* Product Cards */}
      <div className="product-grid">
        {products[category].map((product, index) => (
          <div className="product-card" key={index}>
            <img src={`../assets/images/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>

      {/* Join Market Place Section */}
      <div className="join-marketplace">
        <h2>Join Our Marketplace</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TradingPlatform;
