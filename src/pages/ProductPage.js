import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProdReview from "../components/ProdReview";
import Counter from "../components/Counter";
import {useCart} from "../components/CartContext";
import { Form } from "react-bootstrap";
import StarRating from "../components/StarRating";


function ProductPage() {
  const [selected, setSelected] = useState("");
  const [id, setId] = useState(0);
  const { product } = useParams();
  const [productData, setProductData] = useState(null);
  const [reviewsData, setReviewsData] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewName, setReviewName] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [reviewSubmit, setReviewSubmit] = useState(false);
  const [count, setCount] = useState(1);

  const {addToCart} = useCart();

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const tempId = product.charAt(product.length - 1);
    if (!isNaN(tempId)) {
      setId(tempId % 8);
    } else {
      setId(1);
    }

    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/products/${product}`
        );
        if (!response.ok) {
          throw new Error("not ok");
        }
        const data = await response.json();
        if (!productData) {
          setProductData(data);
          return data;
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchReviewData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/products/reviews/${product}`
        );
        if (!response.ok) {
          throw new Error("not ok");
        }
        const data = await response.json();
        setReviewsData(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchData = async () => {
      try {
        fetchProductData();
        fetchReviewData();
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [product]);

  const handleFlavorChange = (e) => {
    setSelected(e.target.value);
  };

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setReviewSubmit(true);
      const response = await fetch("http://localhost:5000/createReview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: reviewName,
          prodId: id,
          rating: rating,
          rev: reviewContent,
        }),
      });
      if (!response.ok) {
        console.log("error");
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleReviewNameChange = (e) => {
    setReviewName(e.target.value);
  };

  const handleReviewContentChange = (e) => {
    setReviewContent(e.target.value);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: productData.id,
      name: productData.name,
      price: productData.price,
      flavor: selected,
      quantity: count,
    };

    addToCart(cartItem);
  }

  if (!productData || !reviewsData) {
    return (
      <div className="account" style={{ height: "100vh" }}>
        <h1 className="account-title">Loading ...</h1>
      </div>
    );
  } else {
    return (
      <div className="product">
        <div className="product-info">
          <div className="product-container">
            <ProductCard id={id} className="big-svg" />
          </div>
          <div style={{ margin: "0 0 0 4em" }}>
            <h2 className="product-title" style={{ margin: "0" }}>
              {productData.name}
            </h2>
            <h2 className="product-text">★★★★★</h2>
            <p className="product-text">{productData.desc}</p>
            <h2 className="product-text" style={{ fontWeight: "600" }}>
              {`$${productData.price}`}
            </h2>
            {productData.flavors && productData.flavors.length > 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label>Flavor</label>
                <select
                  id="dropdown"
                  value={selected}
                  onChange={handleFlavorChange}
                >
                  <option value="">-- Select an option --</option>
                  {productData.flavors.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "1em 0",
              }}
            >
              <Counter count = {count} setCount={setCount}/>
              <button className="add-to-cart" onClick={handleAddToCart}>ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="supplement-info">
            <h2 className="section-title">Supplement Info</h2>
          </div>
        </div>
        <div className="section-container" style={{ backgroundColor: "white" }}>
          <div className="product-review">
            <div className="review-header-container">
              <h2 className="section-title">Reviews</h2>
              <button
                style={{ position: "absolute", right: 0 }}
                onClick={toggleForm}
              >
                Write a review
              </button>
            </div>
            <div>
              { !reviewSubmit ? (
                <div
                  className={`review-form ${
                    formVisible ? "review-form-visible" : ""
                  }`}
                >
                  <Form>
                    <StarRating
                      totalStars={5}
                      rating={rating}
                      onStarClick={handleStarClick}
                    />
                    <Form.Group className="form-group">
                      <Form.Control
                        className="input-fields"
                        placeholder="Name"
                        onChange={handleReviewNameChange}
                        value={reviewName}
                      />
                    </Form.Group>

                    <Form.Group className="form-group">
                      <Form.Control
                        className="input-fields review-field"
                        placeholder="Review"
                        as="textarea"
                        style={{ resize: "vertical" }}
                        onChange={handleReviewContentChange}
                        value={reviewContent}
                      />
                    </Form.Group>
                    <button className="submit-button" onClick={handleSubmit}>
                      Submit
                    </button>
                  </Form>
                </div>) : (<div>
                  <h1 className="section-text">Thank You For The Review</h1>
                </div>)
              }
            </div>
            {reviewsData && reviewsData.length > 0 ? (
              <div style={{ width: "100%" }}>
                {reviewsData.map((review) => (
                  <ProdReview
                    name={review.name}
                    rating={
                      <StarRating
                        totalStars={5}
                        rating={review.rating}
                        displayStars={review.rating}
                      />
                    }
                    rev={review.rev}
                  />
                ))}
              </div>
            ) : (
              <div>
                <h1 className="section-text">No reviews</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
