import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import blogList from "../utilis/blogdata";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];
const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const navigate = useNavigate();
  const result = blog.filter((b) => b.id === Number(id));

  const currentIndex = blog.findIndex((b) => b.id === Number(id));

  const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
  const nextIndex = currentIndex < blog.length - 1 ? currentIndex + 1 : null;

  const prevBlog = prevIndex !== null ? blog[prevIndex] : null;
  const nextBlog = nextIndex !== null ? blog[nextIndex] : null;
  return (
    <div>
      <PageHeader title="Single Blog Page" curPage="blog / blog Details" />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((blog) => (
                            <div key={blog.id}>
                              <div className="post-thumb">
                                <img
                                  src={blog.imgUrl}
                                  alt={blog.imgAlt}
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{blog.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {blog.metaList.map((meta, index) => (
                                      <li key={index}>
                                        <i className={meta.iconName}></i>
                                        {meta.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>{blog.desc}</p>
                                <blockquote>
                                  <p>{blog.blogQuote.text}</p>
                                  <cite>
                                    <a href="#">...{blog.blogQuote.author}</a>
                                  </cite>
                                </blockquote>

                                <p>{blog.detailedDesc.text}</p>

                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />

                                <p>{blog.detailedDescTwo.textTwo}</p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/ZKOL-rZ79gs?si=a5b_ft0oBG7v9Eq5"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>{blog.detailedDescThree.textThree}</p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((social, index) => (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          className={social.className}
                                        >
                                          <i className={social.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="navigations-part">
                      <div className="left">
                        {prevBlog ? (
                          <Link to={`/blog/${prevBlog.id}`} className="prev">
                            <i className="icofont-double-left"></i>Previous Blog
                          </Link>
                        ) : (
                          <span className="prev">
                            <i className="icofont-double-left"></i>Previous Blog
                          </span>
                        )}

                        <a href="#">
                          <span>{prevBlog?.title}</span>
                        </a>
                      </div>
                      <div className="right">
                        {nextBlog ? (
                          <Link to={`/blog/${nextBlog.id}`} className="next">
                            Next Blog<i className="icofont-double-right"></i>
                          </Link>
                        ) : (
                          <span className="next">
                            Next Blog<i className="icofont-double-right"></i>
                          </span>
                        )}

                        <a href="#">
                          <span>{nextBlog?.title}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
