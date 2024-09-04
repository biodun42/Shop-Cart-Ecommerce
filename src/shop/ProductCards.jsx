import { Link } from "react-router-dom";
import Rating from "../components/Rating";

/* eslint-disable react/prop-types */
const ProductCards = ({ GridList, products }) => {
  console.log(products);
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        GridList ? "grid" : "list"
      }`}
    >
      {products.map((product, index) => {
        return (
          // Adding return statement here
          <div key={index} className="col-lg-4 col-md-6 col-12">
            <div className="product-item">
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.img} alt={product.name} />
                </div>

                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}>
                    <i className="icofont-eye"></i>
                  </Link>
                  <a href="#">
                    <i className="icofont-heart"></i>
                  </a>
                  <Link to="/cart-page">
                    <i className="icofont-cart-alt"></i>
                  </Link>
                </div>
              </div>

              <div className="product-content">
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <p>
                  <Rating />
                </p>
                <h4>${product.price}</h4>
              </div>
            </div>

            <div className="product-list-item">
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.img} alt={product.name} />
                </div>

                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}>
                    <i className="icofont-eye"></i>
                  </Link>
                  <a href="#">
                    <i className="icofont-heart"></i>
                  </a>
                  <Link to="/cart-page">
                    <i className="icofont-cart-alt"></i>
                  </Link>
                </div>
              </div>

              <div className="product-content">
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <p>
                  <Rating />
                </p>
                <h4>${product.price}</h4>
              </div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
