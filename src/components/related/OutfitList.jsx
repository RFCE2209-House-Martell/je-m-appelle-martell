import React from 'react';
import { useState, useMemo } from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';

const OutfitList = (props) => {

  const [outfitProducts, setOutfitProducts] = useState([{ id: 684, item: 'shirt'}, { id: 651, item: 'shoe'}, { id: 9841565, item: 'service'}, { id: 9841565, item: 'problem'}, { id: 9841565, item: 'apple'}, { id: 9841565, item: 'concieurge'}])

  const [renderedOutfits, setRenderedOutfits] = useState([0, 1, 2])

  //function to add to this state from addProduct card click and adds the overview item (located in main index)

  const previousCard = (e) => {
    const newRenderedOutfits = renderedOutfits.map(productIndex => {
      return productIndex - 1
    });
    setRenderedOutfits(newRenderedOutfits)
  }

  const nextCard = (e) => {
    const newRenderedOutfits = renderedOutfits.map(productIndex => {
      return productIndex + 1
    });
    setRenderedOutfits(newRenderedOutfits)
  }

  return (
    <div style={{display: 'flex', columnGap: '8px'}}>
      {renderedOutfits[0] === 0 ? null : <button onClick={previousCard}style={{height: '24px'}} >previous</button>}

      {renderedOutfits.map((displayIndex, index) => {
        if (displayIndex === 0) {
          return <AddOutfitCard />
        }
        return <OutfitCard product={outfitProducts[displayIndex - 1].item} key={index} />
      })}

      {renderedOutfits[2] === outfitProducts.length ? null : <button onClick={nextCard} style={{height: '24px'}}>next</button>}
    </div>
  )
}

export default OutfitList;