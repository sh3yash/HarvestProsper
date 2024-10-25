import React, { useState } from 'react';

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
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Our Farmers' Market</h1>
      
      {/* Toggle Switch */}
      <div className="flex justify-center space-x-4 mb-8">
        <button 
          onClick={() => handleCategoryChange('vegetables')} 
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${category === 'vegetables' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        >
          Vegetables
        </button>
        <button 
          onClick={() => handleCategoryChange('fruits')} 
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${category === 'fruits' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        >
          Fruits
        </button>
        <button 
          onClick={() => handleCategoryChange('seeds')} 
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${category === 'seeds' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        >
          Seeds
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {products[category].map((product, index) => (
          <div 
            key={index} 
            className="bg-black rounded-lg p-4 shadow-[0_4px_24px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_36px_rgba(255,255,255,0.3)] transition-shadow duration-300"
          >
            <img 
              src={`../assets/images/${product.image}`} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-400 mb-2">{product.description}</p>
            <p className="text-blue-400 font-bold mb-4">{product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Join Market Place Section */}
      <div className="bg-black p-6 rounded-lg shadow-[0_4px_24px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_36px_rgba(255,255,255,0.3)] transition-shadow duration-300 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Marketplace</h2>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            required 
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TradingPlatform;
