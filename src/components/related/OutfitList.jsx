import React from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx'

const OutfitList = (props) => {


  return (
    <div>
      <button>previos</button>
      <span>
        <AddOutfitCard />
      </span>
      <span>
        <OutfitCard />
      </span>
      <button>Next</button>
    </div>
  )
}

export default OutfitList;