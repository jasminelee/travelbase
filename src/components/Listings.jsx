import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const querySnapshot = await getDocs(collection(db, "listings"));
      const listingsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setListings(listingsData);
    };

    fetchListings();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Experiences</h1>
      <ul>
        {listings.map(listing => (
          <li key={listing.id} className="mb-2">
            <div className="border p-4 rounded">
              <h2 className="text-xl">{listing.title}</h2>
              <p>{listing.description}</p>
              <p>Price: {listing.price} USDC</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Pay with Crypto
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings; 