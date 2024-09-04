import React, { useState } from "react";
import { Link } from "react-router-dom";

const desc =
  "Elevate your performance with innovative designs and unparalleled comfort. Our collection blends advanced technology with a modern, stylish look.";
const ProductDisplay = ({ item }) => {
  const { id,name, img, price, seller, ratingsCount, quantity } = item;

  const [prequantity, setPrequantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDecrement = () => {
    if (prequantity > 1) {
      setPrequantity(prequantity - 1);
    }
  };
  const handleIncrement = () => {
    setPrequantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Reset the form
    setPrequantity(quantity);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} reviews</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option value="Pink">Pink</option>
              <option value="Ash">Ash</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrement}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              value={prequantity}
              name="qtybutton"
              id="qtybutton"
              onChange={(e) => setPrequantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrement}>
              +
            </div>
          </div>

          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>

          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
