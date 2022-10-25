import React, { useState, useEffect } from 'react';
import CharacteristicsCreator from './characteristicsCreator.jsx'
import StarComponent from '../sharedFolder/starComponent.jsx'

const RatingsSection = (props) => {
  // console.log(props.sampleMetaData.ratings)
  if (Object.keys(props.metaData).length < 1) {
    return (
      <div>
        No ratings yet
      </div>
    )
  }

  const [starsObj, setStarsObj] = useState(props.metaData.ratings)
  const [totalRatings, setTotalRatings] = useState(0);

  const findAvgStars = () => {
    var addRatings = 0;
    var addStars = 0;
    for (var key in starsObj) {
      addRatings = (addRatings + Number(starsObj[key]))
      addStars = (addStars + (key * starsObj[key]))
    }
    var avg = (Math.round((addStars / addRatings) * 4) / 4).toFixed(2);
    props.setAvgStars(avg);
    setTotalRatings(addRatings)
  }

  const starReviewSet = (num) => {
    props.setReviewStar(num)
  }

  useEffect(() => {
    findAvgStars();
  }, [])

  return (
    <div className='ratingsSection'>
      <div className='ratings-stars'>
        <div className='total-stars'>
          {Math.round(props.avgStars * 10) /10}
        </div>
        <div className='stars-component'>
          <StarComponent stars={props.avgStars} />
        </div>
      </div>
      <section className='rec-stars'>
        {Math.floor((Number(props.metaData.recommended.true) / Object.values(props.metaData.recommended).reduce((accumulator, value) => {
          return accumulator + Number(value);
        }, 0)) * 100) + '%'} of reviews recommend this product
      </section>
      <section>
        <div>
          <button className='progress-buttons' onClick={e => starReviewSet(5)}>5 stars</button>
          <progress className='progress-bars' id='fiveStarProgress' value={starsObj['5'] || 0} max={totalRatings}></progress>
        </div>
        <div>
          <button className='progress-buttons' onClick={e => starReviewSet(4)}>4 stars</button>
          <progress className='progress-bars' id='fourStarProgress' value={starsObj['4'] || 0} max={totalRatings}></progress>
        </div>
        <div>
          <button className='progress-buttons' onClick={e => starReviewSet(3)}>3 stars</button>
          <progress className='progress-bars' id='threeStarProgress' value={starsObj['3'] || 0} max={totalRatings}></progress>
        </div>
        <div>
          <button className='progress-buttons' onClick={e => starReviewSet(2)}>2 stars</button>
          <progress className='progress-bars' id='twoStarProgress' value={starsObj['2'] || 0} max={totalRatings}></progress>
        </div>
        <div>
          <button className='progress-buttons' onClick={e => starReviewSet(1)}>1 stars</button>
          <progress className='progress-bars' id='oneStarProgress' value={starsObj['1'] || 0} max={totalRatings}></progress>
        </div>
      </section>
      <section>
        {Object.keys(props.metaData.characteristics).map((charKey, index) => {
          return(<CharacteristicsCreator charKey={charKey} obj={props.metaData.characteristics[charKey]} key={index}/>)
        })}

      </section>
    </div>
    );
}

export default RatingsSection;