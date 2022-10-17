import React from 'react';
import { useState, useEffect } from 'react';
import OutfitList from './OutfitList.jsx';
import RelatedList from './RelatedList.jsx';



const RelatedApp = (props) => {
  return (
    <div>
      <h1>Related Products</h1>
      <RelatedList />
      <h1>Your Outfit</h1>
      <OutfitList />
    </div>
  );
}

export default RelatedApp;