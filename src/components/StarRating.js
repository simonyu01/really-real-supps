const StarRating = ({ totalStars, onStarClick, rating, displayStars}) => {
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    let starClassName = i <= rating ? 'star filled' : 'star';
    if(displayStars) {
        starClassName = starClassName === 'star filled' ? 'filled' : '';
    }
    stars.push(
      <span
        key={i}
        className={starClassName}
        onClick={() => (displayStars && displayStars > 0 ? null : onStarClick(i))}
      >
        &#9733;
      </span>
    );
  }

  const starRatingStyle = {
    ...(displayStars ? {margin: 0} : {})
  }

  return (
    <div className="star-rating" style={starRatingStyle}>
      {stars}
    </div>
  );
};

export default StarRating;
