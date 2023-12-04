function ProdReview(props) {
    const {name, rating, rev} = props;
    return (
        <div className = "product-review-card">
            <h2 className = "section-text" style={{margin: 0}}>{name}</h2>
            <h2 className = "section-text" style={{margin: 0}}>{rating}</h2>
            <h2 className = "section-text" style={{margin: 0}}>{rev}</h2>
            <span className="divider" />
        </div>
    )
}

export default ProdReview;