export default function Features() {
  return (
    <>

    <div className="feature-style-two-area default-padding-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="feature-style-two-items">
              <div className="api-intigration-items fade-up-anim bg-dark-secondary text-light">
                <h4>Build Automation Without Code</h4>
                <p>
                  Drag, drop and automate customer journeys in minutes with our No-Code Flow Builder.
                </p>
                <div className="api-list-items">
                  <div className="infinit-carousel swiper">
                    {/* Additional required wrapper */}
                    <div className="swiper-wrapper">
                      {/* Single item */}
                      <div className="swiper-slide">
                        <div className="api-list-item">
                          <img src="assets/img/icon/messenger.png" alt="Image Not Found" />
                        </div>
                      </div>
                      {/* Single item */}
                      {/* Single item */}
                      <div className="swiper-slide">
                        <div className="api-list-item">
                          <img src="assets/img/icon/discord.png" alt="Image Not Found" />
                        </div>
                      </div>
                      {/* Single item */}
                      {/* Single item */}
                      <div className="swiper-slide">
                        <div className="api-list-item">
                          <img src="assets/img/icon/teams.png" alt="Image Not Found" />
                        </div>
                      </div>
                      {/* Single item */}
                      {/* Single item */}
                      <div className="swiper-slide">
                        <div className="api-list-item">
                          <img src="assets/img/icon/telegram.png" alt="Image Not Found" />
                        </div>
                      </div>
                      {/* Single item */}
                      {/* Single item */}
                      <div className="swiper-slide">
                        <div className="api-list-item">
                          <img src="assets/img/icon/slack.png" alt="Image Not Found" />
                        </div>
                      </div>
                      {/* Single item */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-style-two-item bg-gradient text-light fade-up-anim">
                <h4>Meta Ecosystem Integration</h4>
                <ul className="list-style-two">
                  <li>WhatsApp Broadcasting</li>
                  <li>Social Media Conversion</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="dashboard-info bg-cover fade-up-anim align-center" style={{backgroundImage: 'url(assets/img/shape/banner-11.jpg)'}}>
              <div className="info">
                <h2>Every Lead. One CRM.</h2>
                <a className="btn btn-style-one mt-10" href="about-us.html">Explore More <i className="fas fa-arrow-right" /></a>
                <div className="user-card-style-two">
                  <div className="multi-users">
                    <img src="assets/img/team/11.jpg" alt="Image Not Found" />
                    <img src="assets/img/team/12.jpg" alt="Image Not Found" />
                    <img src="assets/img/team/13.jpg" alt="Image Not Found" />
                    <img src="assets/img/team/3.jpg" alt="Image Not Found" />
                    <i className="fas fa-plus" />
                  </div>
                  <div className="contents">
                    <div className="ratings">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>(4.9/5.0)</span>
                    </div>
                    <h4>Highly rated by millions of thrusted users!</h4>
                  </div>
                </div>
              </div>
              <div className="thumb">
                <img className="fade-up-anim" src="assets/img/illustration/10.png" alt="Image Not Found" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
