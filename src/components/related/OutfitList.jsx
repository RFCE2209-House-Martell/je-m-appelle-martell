import React from 'react';
import { useState, useMemo } from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';
import Styles from './Styles.css';

const OutfitList = (props) => {

  const [renderedOutfits, setRenderedOutfits] = useState([0, 1, 2])
  const [productImage, setProductImage] = useState([])

  const addToOutfit = (aProductId) => {
    const product = props.allProducts.find(({id}) => {
      return id === aProductId
    })

    const alreadyExists = props.outfitProducts.find(({id}) => {
      return id === product.id
    })

    if (!alreadyExists) {
      props.setOutfitProducts((prevState) => {
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

  return (
    <div style={{display: 'flex', columnGap: '50px', justifyContent: 'center'}}>
      {renderedOutfits[0] === 0 ? null : <button onClick={previousCard}style={{height: '475px', color: '#e49b34' }} className='arrow'>{'<'}</button>}

      {renderedOutfits.map((displayIndex, index) => {
        if (displayIndex === 0) {
          return <AddOutfitCard addToOutfit={addToOutfit} productId={props.productId} outfitProducts={props.outfitProducts} key={index}
          updateRelated={props.updateRelated}
          setProductId={props.setProductId}/>
        }
        if (props.outfitProducts.length && props.outfitProducts[displayIndex - 1]) {
          return <OutfitCard
          relatedProducts={props.relatedProducts}
          product={props.outfitProducts[displayIndex - 1]}
          key={props.outfitProducts[displayIndex - 1].id}
          outfitProducts={props.outfitProducts}
          setOutfitProducts={props.setOutfitProducts}
          setProductId={props.setProductId}
          productId={props.productId}
          />
        }
        return null;
      })
      }

      {renderedOutfits[2] === props.outfitProducts.length || renderedOutfits[1] === props.outfitProducts.length || props.outfitProducts.length === 0 ? null : <button onClick={nextCard} style={{height: '475px', color: '#e49b34' }} className='arrow' >{'>'}</button>}
    </div>
  )
}

export default OutfitList;

//push up outfitList up to the app component to not reset on rerender