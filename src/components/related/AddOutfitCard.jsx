import React from 'react';
import index from '../../index.jsx';
import OutfitList from './OutfitList.jsx';
import { BsBookmarkPlus } from "react-icons/bs";
import Styles from './Styles.css';

const AddOutfitCard = (props) => {

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    width: '300px',
  }

  const handleClick = (e) => {
    props.addToOutfit(props.productId)
    props.updateRelated(props.productId)
  }

  return (
    <div style={componentStyle}>
      <div> <button className='cards test' style={{display: 'flex', justifyContent: 'center'}} onClick={handleClick} style={{height: '475px', width: '300px'}} ><BsBookmarkPlus size='75'/></button> </div>
    </div>
  )
}

export default AddOutfitCard;

//style to a particular size
