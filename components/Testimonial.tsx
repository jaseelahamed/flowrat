export default function Testimonial() {
  return (
    <>

    <div className="testimonial-style-three-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-style-three-items bg-gray blurry-shape-right-bottom" style={{backgroundImage: 'url(assets/img/shape/3.png)'}}>
              <div className="testimonial-style-three-carousel swiper">
                {/* Additional required wrapper */}
                <div className="swiper-wrapper">
                  {/* Single item */}
                  <div className="swiper-slide">
                    <div className="testimonial-style-three">
                      <div className="left">
                        <img src="assets/img/shape/12.png" alt="Image Not Found" />
                        <img src="assets/img/icon/quote-two.png" alt="Image Not Found" />
                      </div>
                      <div className="right">
                        <div className="top">
                          <img src="assets/img/icon/21.png" alt="Image Not Found" />
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <p>
                          Consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering the performance.
                        </p>
                        <div className="provider">
                          <div className="icon">
                            <img src="assets/img/team/11.jpg" alt="Image Not Found" />
                          </div>
                          <div className="info">
                            <h4>Aleesha Brown</h4>
                            <span>Tech Engineer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single item */}
                  {/* Single item */}
                  <div className="swiper-slide">
                    <div className="testimonial-style-three">
                      <div className="left">
                        <img src="assets/img/shape/12.png" alt="Image Not Found" />
                        <img src="assets/img/icon/quote-two.png" alt="Image Not Found" />
                      </div>
                      <div className="right">
                        <div className="top">
                          <img src="assets/img/icon/21.png" alt="Image Not Found" />
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <p>
                          Regulations discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering the performance.
                        </p>
                        <div className="provider">
                          <div className="icon">
                            <img src="assets/img/team/12.jpg" alt="Image Not Found" />
                          </div>
                          <div className="info">
                            <h4>Kevin Martin</h4>
                            <span>roduct Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single item */}
                </div>
                {/* Navigation */}
                <div className="project-swiper-nav">
                  {/* Pagination */}
                  <div className="testimonial-three-prev"><i className="fas fa-angle-left" /></div>
                  <div className="testimonial-three-next"><i className="fas fa-angle-right" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
