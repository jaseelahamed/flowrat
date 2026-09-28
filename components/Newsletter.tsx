export default function Newsletter() {
  return (
    <>

    <div className="newsletter-area default-padding bg-gray blurry-shape-right-bottom">
      <div className="newsletter-thumb">
        <img src="assets/img/thumb/2.jpg" alt="Image Not Found" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="newsletter-style-two">
              <h4 className="sub-title">Newsletter</h4>
              <h2 className="title split-text-right split-text-in-right">Real-time discussions &amp; regular updatess</h2>
              <div className="fade-up-anim">
                <form action="#">
                  <input type="email" placeholder="Enter your email" className="form-control" name="your-email" />
                  <button type="submit"><i className="fa fa-paper-plane" /> Subscribe</button>  
                </form>
                <fieldset>
                  <input type="checkbox" id="privacy" name="privacy" />
                  <label htmlFor="privacy">I agree to the <a href="#">Privacy Policy</a></label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
