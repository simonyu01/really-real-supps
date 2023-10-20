function ReviewCard({ title, stars, description, img, name}) {
  const renderStars = (count) => {
    const emptyStars = 5 - count;
    return "★".repeat(count) + "☆".repeat(emptyStars);
  };

  return (
    <div className="review-card">
      <div className="review-img-container">{img}</div>
      <div>
        <h3 className = "review-title">{title}</h3>
        <div className ="review-stars">{renderStars(stars)}</div>
        <div className = "section-text" style={{margin: 0, fontWeight: 700}}>{name}</div>
        <p className = "section-text">{description}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
