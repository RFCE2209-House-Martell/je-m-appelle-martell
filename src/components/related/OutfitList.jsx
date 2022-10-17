import React from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx'

const OutfitList = (props) => {


  return (
    <div className='content'>
        <AddOutfitCard />
        <OutfitCard />
    </div>
  )
}

export default OutfitList;