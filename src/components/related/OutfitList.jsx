import React from 'react';
import { useState, useMemo } from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';

const OutfitList = (props) => {

  const [outfitProducts, setOutfitProducts] = useState([])

  const [renderedOutfits, setRenderedOutfits] = useState([0, 1, 2])

  //function to add to this state from addProduct card click and adds the overview item (located in main index)

  const addToOutfit = (productId) => {
    console.log(productId)
    const product = props.allProducts.find(({id}) => {
      return id === productId
    })
    console.log(product)

    const alreadyExists = outfitProducts.find(({id}) => {
      return id === product.id
    })

    if (!alreadyExists) {
      setOutfitProducts((prevState) => {
        return [...prevState, product]
      })
    }
  }

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

  console.log('OUTFITPRODUCTS', outfitProducts)
  return (
    <div style={{display: 'flex', columnGap: '8px'}}>
      {renderedOutfits[0] === 0 ? null : <button onClick={previousCard}style={{height: '24px'}} >previous</button>}

      {renderedOutfits.map((displayIndex, index) => {
        if (displayIndex === 0) {
          return <AddOutfitCard addToOutfit={addToOutfit} productId={props.productId} />
        }
        if (outfitProducts.length && outfitProducts[displayIndex - 1]) {
          return <OutfitCard product={outfitProducts[displayIndex - 1].item} key={index} />
        }
        return null;
      })
      }

      {renderedOutfits[2] === outfitProducts.length || renderedOutfits[1] === outfitProducts.length || outfitProducts.length === 0 ? null : <button onClick={nextCard} style={{height: '24px'}}>next</button>}
    </div>
  )
}

export default OutfitList;

//push up outfitList up to the app component to not reset on rerender