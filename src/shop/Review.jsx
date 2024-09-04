import React, { useState } from "react";
import Rating from "../components/Rating";

const reviwtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Sept 10, 2024 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Sept 14, 2024 at 10:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Sept 19, 2024 at 2:57 pm",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Sept 28, 2024 at 7:57 pm",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];
const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(false)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(true)}>
          Reviews 4
        </li>
      </ul>

      <div
        className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt={review.imgAlt} />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>
              <form action="" className="row">
                <div className="col-md-4 col-12">
                  <input type="text" name="name" placeholder="Full Name" />
                </div>
                <div className="col-md-4 col-12">
                  <input type="text" name="email" placeholder="Your Email" />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-1">Your Rating </span>
                    <Rating />
                  </div>
                </div>

                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="Type Here Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button ">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, est velit aliquam non autem recusandae debitis minus provident suscipit deserunt dolor tempore harum unde sed eveniet, officiis quod aperiam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, est velit aliquam non autem recusandae debitis minus provident suscipit deserunt dolor tempore harum unde sed eveniet, officiis quod aperiam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, est velit aliquam non autem recusandae debitis minus provident suscipit deserunt dolor tempore harum unde sed eveniet, officiis quod aperiam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, est velit aliquam non autem recusandae debitis minus provident.</p>

          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="Post thumb" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, soluta.</li>
                <li>amet consectetur adipisicing elit. Velit, soluta.</li>
                <li>amet consectetur adipisicing elit. Velit, soluta.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, soluta.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, soluta.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, soluta.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, soluta.</li>
              </ul>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, est velit aliquam non autem recusandae debitis minus provident suscipit deserunt dolor tempore harum unde sed eveniet, officiis quod aperiam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, est velit aliquam non autem recusandae debitis minus provident suscipit deserunt dolor tempore harum unde sed eveniet, officiis quod aperiam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, est velit aliquam non autem recusandae debitis minus provident suscipit deserunt dolor tempore harum unde sed eveniet, officiis quod aperiam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, est velit aliquam non autem recusandae debitis minus provident.</p>
        </div>
      </div>
    </>
  );
};

export default Review;
