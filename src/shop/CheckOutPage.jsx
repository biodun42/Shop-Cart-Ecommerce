import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../components/modal.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLocation, useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activetab, setActivetab] = useState("visa");

  const handleTabChange = (tabId) => {
    setActivetab(tabId);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  // direct to home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleOrderConfirm = () => {
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Order is placed successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      localStorage.removeItem("cart");
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activetab === "visa" ? "active" : ""
                      }`}
                      href="#visa"
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activetab === "visa"}
                      onClick={() => handleTabChange("visa")}
                    >
                      <img
                        src="https://i.imgur.com/sB4jftM.png"
                        alt="visa"
                        width="80"
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activetab === "paypal" ? "active" : ""
                      }`}
                      href="#paypal"
                      id="paypal-tab"
                      data-toggle="paypal"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activetab === "visa"}
                      onClick={() => handleTabChange("paypal")}
                    >
                      <img
                        src="https://i.imgur.com/yK7EDD1.png"
                        alt="visa"
                        width="80"
                      />
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="mytabContent">
                  <div
                    className={`tab-pane fade ${
                      activetab === "visa" ? "show active" : ""
                    } id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                    `}
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Cardholder Name</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control"
                            required
                            min="1"
                            max="999"
                          />
                          <span>Card Number</span>
                          <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control"
                              required
                              min="1"
                              max="999"
                            />
                            <span>Expiration Date</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control"
                              required
                              min="1"
                              max="999"
                            />
                            <span>CVV</span>
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button
                            className="btn btn-success btn-block"
                            onClick={handleOrderConfirm}
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activetab === "paypal" ? "show active" : ""
                    } id="paypal"
                    role="tabpanel"
                    aria-labelledby="paypal-tab"
                    `}
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Paypal Account Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Enter your email</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control"
                            required
                            min="1"
                            max="999"
                          />
                          <span>Your Name</span>
                          <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control"
                              required
                              min="1"
                              max="999"
                            />
                            <span>Extra info</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control"
                              required
                              min="1"
                              max="999"
                            />
                            <span></span>
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button className="btn btn-success btn-block"
                          onClick={handleOrderConfirm}
                          >
                            Add paypal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-3 px-4 p-Disclaimer">
                  <em>Payment Disclaimer:</em> Full or partial payment by the
                  Owner does not indicate acceptance of products or services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
