import React, { useState, useEffect } from 'react';
import CharacteristicsCreator from './characteristicsCreator.jsx'

const RatingsSection = (props) => {
  // console.log(props.sampleMetaData.ratings)
  const [starsObj, setStarsObj] = useState(props.sampleMetaData.ratings)
  var totalRatings = 0;
  var totalStars = 0;

  const findAvgStars = () => {
    for (var key in starsObj) {
      totalRatings = (totalRatings + starsObj[key])
      totalStars = (totalStars + (key * starsObj[key]))
    }
    props.setAvgStars(totalStars / totalRatings);
  }

  useEffect(() => {
    findAvgStars();

  }, [])

  return (
    <div>
      <section>
        Total Stars: {props.avgStars}
      </section>
      <section>
        Stars
      </section>
      <section>
        Recommended: {props.sampleMetaData.recommend}
      </section>
      <section> Total stars:
        <div>1: {starsObj['1'] || 0}</div>
        <div>2: {starsObj['2'] || 0}</div>
        <div>3: {starsObj['3'] || 0}</div>
        <div>4: {starsObj['4'] || 0}</div>
        <div>5: {starsObj['5'] || 0}</div>
      </section>
      <section>
        characteristics:
        {Object.keys(props.sampleMetaData.characteristics).map((charKey, index) => {
          return(<CharacteristicsCreator charKey={charKey} obj={props.sampleMetaData.characteristics[charKey]} key={index}/>)
        })}

      </section>
    </div>
    );
}

export default RatingsSection;