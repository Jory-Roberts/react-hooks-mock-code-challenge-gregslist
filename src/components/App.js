import React, { useEffect, useState } from 'react';
import Header from './Header';
import ListingsContainer from './ListingsContainer';

const API = ' http://localhost:6001/listings ';

function App() {
  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
    const response = await fetch(API).then((response) => response.json());
    console.log(response);
    setListings(response);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div className='app'>
      <Header />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
