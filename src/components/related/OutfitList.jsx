import React from 'react';
import { useState, useMemo } from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';

const OutfitList = (props) => {

  const [renderedOutfits, setRenderedOutfits] = useState([0, 1, 2])
  const [productImage, setProductImage] = useState([])

  //function to add to this state from addProduct card click and adds the overview item (located in main index)

  // useEffect(() => {
  //   if (props.relatedProduct) {
  //     console.log(props.relatedProduct)
  //     axios.get (`${process.env.REACT_APP_BASE_URL}products/${props.relatedProduct.id}/styles`, {
  //       headers: {
  //         'Authorization': process.env.REACT_APP_API_KEY
  //       },
  //     })
  //     .then(data => {
  //       setProductImage(data.data.results[0].photos[0].thumbnail_url)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //   }
  // }, [props.allProducts, props.productId, props.relatedProduct])

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
    <div style={{display: 'flex', columnGap: '8px'}}>
      {renderedOutfits[0] === 0 ? null : <button onClick={previousCard}style={{height: '24px'}} >previous</button>}

      {renderedOutfits.map((displayIndex, index) => {
        if (displayIndex === 0) {
          return <AddOutfitCard addToOutfit={addToOutfit} productId={props.productId} outfitProducts={props.outfitProducts}/>
        }
        if (props.outfitProducts.length && props.outfitProducts[displayIndex - 1]) {
          return <OutfitCard
          product={props.outfitProducts[displayIndex - 1]}
          key={props.outfitProducts[displayIndex - 1].id}
          outfitProducts={props.outfitProducts}
          setOutfitProducts={props.setOutfitProducts}
          setProductId={props.setProductId}
          productId={props.productId} />
        }
        return null;
      })
      }

      {renderedOutfits[2] === props.outfitProducts.length || renderedOutfits[1] === props.outfitProducts.length || props.outfitProducts.length === 0 ? null : <button onClick={nextCard} style={{height: '24px'}}>next</button>}
    </div>
  )
}

export default OutfitList;

//push up outfitList up to the app component to not reset on rerender