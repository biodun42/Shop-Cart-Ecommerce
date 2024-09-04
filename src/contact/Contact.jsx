import React from "react";
import PageHeader from "../components/PageHeader";
import GoogleMaps from "../components/GoogleMaps";

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
  "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
  {
    imgUrl: "../../public/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: "../../public/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+234 704 843 6377",
  },
  {
    imgUrl: "../../public/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "muhammedabiodun42@gmail.com",
  },
  {
    imgUrl: "../../public/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
  },
];
const Contact = () => {
  return (
    <div>
      <PageHeader title="Get In Touch With Us" curPage="Contact us" />

      <div className="map-address-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>

          <div className="section-wrapper">
            <div className="row flex-row-reverse">
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                  {contactList.map((contact, index) => (
                    <div key={index} className="contact-item">
                      <div className="contact-thumb">
                        <img src={contact.imgUrl} alt={contact.imgAlt} />
                      </div>
                      <div className="contact-content">
                        <h6 className="title">{contact.title}</h6>
                        <p>{contact.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-xl-8 col-lg-7 col-12">
                <GoogleMaps />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section padding-tb">
        <div className="section-header text-center">
          <span className="subtitle">{conSubTitle}</span>
          <h2 className="title">{conTitle}</h2>
        </div>

        <div className="section-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Phone Number"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="form-group w-100">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                rows={8}
              ></textarea>
            </div>
            <div className="form-group w-100 text-center">
              <button type="submit" className="lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
