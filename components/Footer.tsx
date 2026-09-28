export default function Footer() {
  return (
    <footer className="footer-style-one box-layout bg-gray">
    <div className="footer-shape">
      <img src="assets/img/shape/globe.png" alt="Image Not Found" />
    </div>
    <div className="container">
      <div className="f-items default-padding">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="f-item contact">
              <h4 className="widget-title"> Contact</h4>
              <p>
                128 Kuaram old Road, parkvenue, Greater London, <br /> NW18JR Puran, United Kingdom
              </p>
              <ul className="contact">
                <li>
                  <p>Phone Number</p>
                  <h4><a href="tel:+4733378901">+012-3455700</a></h4>
                </li>
                <li>
                  <p>Email</p>
                  <h4><a href="mailto:someone@example.com">info@robok.com</a></h4>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7">
            <div className="footer-style-one-items">
              {/* Single Item */}
              <div className="f-item link">
                <h4 className="widget-title">Company</h4>
                <ul>
                  <li>
                    <a href="about-us.html">About</a>
                  </li>
                  <li>
                    <a href="about-us-2.html">Expertise</a>
                  </li>
                  <li>
                    <a href="about-us.html">Sustainability</a>
                  </li>
                  <li>
                    <a href="blog-with-sidebar.html">News &amp; Media</a>
                  </li>
                  <li>
                    <a href="project.html">Case Studies</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact</a>
                  </li>
                </ul>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="f-item link">
                <h4 className="widget-title">Flowrat Features</h4>
                <ul>
                  <li>
                    <a href="services-details.html">Convert</a>
                  </li>
                  <li>
                    <a href="services-details.html">Capture</a>
                  </li>
                  <li>
                    <a href="services-details.html">Capture</a>
                  </li>
                  <li>
                    <a href="services-details.html">Engage</a>
                  </li>
                  <li>
                    <a href="services-details.html">Retain</a>
                  </li>
                  <li>
                    <a href="services-details.html">Convert</a>
                  </li>
                </ul>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="f-item link">
                <h4 className="widget-title">Resources</h4>
                <ul>
                  <li>
                    <a href="about-us.html">Events</a>
                  </li>
                  <li>
                    <a href="faq.html">Community</a>
                  </li>
                  <li>
                    <a href="about-us.html">Social Media</a>
                  </li>
                  <li>
                    <a href="pricing.html">Plans &amp; Pricing</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Newsletter</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Career</a>
                  </li>
                </ul>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Start Footer Bottom */}
    <div className="footer-bottom-one">
      <div className="container">
        <div className="content">
          <div className="row align-center">
            <div className="col-lg-6 col-md-6">
              <div className="logo">
                <a href="#"><img src="assets/img/logo.png" alt="Logo" /></a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul className="footer-item-social text-end">
                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#"><img src="assets/img/icon/twitter-x.png" alt="Image Not Found" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Footer Bottom */}
    {/* Start Footer Bottom */}
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>© <a href="#">validthemes</a> 2025. All Rights Reserved</p>
          </div>
          <div className="col-lg-6 text-end">
            <ul>
              <li>
                <a href="about-us.html">Terms</a>
              </li>
              <li>
                <a href="about-us.html">Privacy</a>
              </li>
              <li>
                <a href="contact-us.html">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* End Footer Bottom */}
  </footer>
  );
}