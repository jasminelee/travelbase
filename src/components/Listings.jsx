import React from 'react';

const Listings = () => {
  // Sample data for listings
  const listings = [
    { id: 1, title: 'Scenic Mountain Hike', price: '0.05 ETH' },
    { id: 2, title: 'City Food Tour', price: '0.03 ETH' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Experiences</h1>
      <ul>
        {listings.map(listing => (
          <li key={listing.id} className="mb-2">
            <div className="border p-4 rounded">
              <h2 className="text-xl">{listing.title}</h2>
              <p>Price: {listing.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Pay with Crypto
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings; 