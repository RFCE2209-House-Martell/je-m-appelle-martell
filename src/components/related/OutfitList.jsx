import React from 'react';
import { useState } from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';

const OutfitList = (props) => {

  const [outfitProducts, setOutfitProducts] = useState([1, 2, 3, 4, 5])
  const [renderedOutfits, setRenderedOutfits] = useState([0, 1, 2])

  //function to add to this state from addProduct card click and adds the overview item (located in main index)

  const previousCard = (e) => {
    const newRenderedOutfits = renderedOutfits.map(product => {
      return product - 1
    });
    setRenderedOutfits(newRenderedOutfits)
  }

  const nextCard = (e) => {
    const newRenderedOutfits = renderedOutfits.map(product => {
      return product + 1
    });
    setRenderedOutfits(newRenderedOutfits)
  }

  return (
    <div style={{display: 'flex', columnGap: '8px'}}>
      {renderedOutfits[0] === 0 ? null : <button onClick={previousCard}style={{height: '24px'}} >previous</button>}

      {renderedOutfits[0] !== 0 ? null : <AddOutfitCard /> }

      {renderedOutfits.map(product => {
        return <OutfitCard product={product} />
      })}

      {renderedOutfits[2] === outfitProducts.length ? null : <button onClick={nextCard} style={{height: '24px'}}>next</button>}
    </div>
  )
}

export default OutfitList;