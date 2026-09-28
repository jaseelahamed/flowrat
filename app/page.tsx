import Features from "../components/Features";
import FlowratFeatures from "../components/FlowratFeatures";
import WhyChooseUs from "../components/WhyChooseUs";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Newsletter from "../components/Newsletter";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div id="smooth-content">
          {/* Start Banner Area */}
          <div
            className="banner-style-three-area overflow-hidden bg-gray bg-cover"
            style={{ background: "url(assets/img/shape/banner-4.jpg)" }}
          >
            <div className="container">
              <div className="row align-center">
                <div className="col-lg-7 pr-60 pr-md-15 pr-xs-15">
                  <div className="banner-style-three-info">
                    <h2 className="wow fadeInUp">
                      Turn Every Conversation Into a <strong>Customer.</strong>
                    </h2>
                    <p className="fade-up-anim">
                      AI-powered customer retention & conversion. AI • Automation • CRM • Retention.
                    </p>
                    <div className="fade-up-anim">
                      <form action="#">
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          className="form-control"
                          name="email"
                        />
                        <button className="btn btn-style-one" type="submit">
                          {" "}
                          Try Now <i className="fa fa-arrow-right" />
                        </button>
                      </form>
                      <div className="notificaiton">
                        <p>
                          <i className="fas fa-bell" /> One platform for leads, conversations, automation and retention.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="chat-bot-thumb text-center">
                    <div
                      className="chat-item wow fadeInLeft"
                      data-wow-delay="600ms"
                    >
                      <p>Hello, How can i help you?</p>
                      <img
                        src="assets/img/illustration/3.png"
                        alt="Image Not Found"
                      />
                    </div>
                    <div
                      className="chat-item wow fadeInRight"
                      data-wow-delay="900ms"
                    >
                      <p>
                        I’m looking for a creative designer for my startup agncy
                      </p>
                      <img src="assets/img/team/2.jpg" alt="Image Not Found" />
                    </div>
                    <div className="illustration">
                      <img
                        className="wow fadeInUp"
                        data-wow-delay="300ms"
                        src="assets/img/illustration/2.png"
                        alt="Image Not Found"
                      />
                      <img src="assets/img/shape/2.png" alt="Image Not Found" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Main */}
          <Features />
          <FlowratFeatures />
          <WhyChooseUs />
          <Pricing />
          <Testimonial />
          <Faq />
          <Newsletter />
          <Blog />
          <Footer />
        </div>
      </div>
    </>
  );
}
