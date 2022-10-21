import React from 'react';
import star from './star.png'


const StarComponent = (props) => {
  let rating = props.stars;
  let stars = [];
  while (stars.length < 5) {
    if (rating > 1) {
      stars.push(1);
    } else if (rating > 0) {
      let empty = Math.abs(0 - rating);
      let quarter = Math.abs(0.25 - rating);
      let half = Math.abs(0.5 - rating);
      let threeQuarter = Math.abs(0.75 - rating);
      let full = Math.abs(1 - rating);
      let closest = Math.min(empty, quarter, half, threeQuarter, full);
      if (closest === empty) {
        stars.push(0);
      } else if (closest === quarter) {
        stars.push(0.25);
      } else if (closest === half) {
        stars.push(0.5);
      } else if (closest === threeQuarter) {
        stars.push(0.75);
      } else if (closest === full) {
        stars.push(1);
      } else {
        stars.push(0)
      }
    } else {
      stars.push(0);
    }
    rating = rating - 1;
  }

  return (
    <div>
      {stars.map((star, index) => {
        // console.log(star, index)
        return (
          <div className='single-star-container' key={index}>
            <div className='single-star-fill' style={{'width': `${parseInt(star*16)}px`}}>
              <img className='single-star-outline' src={require('./star.png').default}></img>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default StarComponent;