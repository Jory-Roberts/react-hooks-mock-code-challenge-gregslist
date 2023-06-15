import React from 'react';
import ListingCard from './ListingCard';

function ListingsContainer({ listings }) {
  const listingsMap = listings.map((listing) => (
    <ListingCard
      key={listing.id}
      listing={listing}
    />
  ));
  return (
    <main>
      <ul className='cards'>{listingsMap}</ul>
    </main>
  );
}

export default ListingsContainer;
