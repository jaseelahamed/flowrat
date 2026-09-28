export default function Blog() {
  return (
    <>

    <div className="home-blog-three-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Latest Blog</h4>
              <h2 className="title split-text-right split-text-in-right">News &amp; Update</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="blog-style-three inc-thumb fade-up-anim">
              <div className="thumb">
                <a href="blog-single-with-sidebar.html"><img src="assets/img/blog/4.jpg" alt="Thumb" /></a>
              </div>
              <div className="info">
                <div className="blog-one-meta">
                  <ul>
                    <li>
                      <a href="#">Technolgoy</a>
                    </li>
                    <li>
                      06 December, 2025
                    </li>
                  </ul>
                </div>
                <h3 className="blog-title">
                  <a href="blog-single-with-sidebar.html">Discovery incommode earnestly commanded if perform good.</a>
                </h3>
                <a href="blog-single-with-sidebar.html" className="btn-regular">
                  Read more <img src="assets/img/icon/arrow-right-three.png" alt="Image Not Found" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* Single Item */}
            <div className="blog-style-three fade-up-anim">
              <div className="info">
                <div className="blog-one-meta">
                  <ul>
                    <li>
                      <a href="#">Artificial</a>
                    </li>
                    <li>
                      14 August, 2025
                    </li>
                  </ul>
                </div>
                <h3 className="blog-title">
                  <a href="blog-single-with-sidebar.html">Expression acceptance imprudence.</a>
                </h3>
                <p>
                  Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing always know now.
                </p>
                <a href="blog-single-with-sidebar.html" className="btn-regular">
                  Read more <img src="assets/img/icon/arrow-right-three.png" alt="Image Not Found" />
                </a>
              </div>
            </div>
            {/* End Single Item */}
            {/* Single Item */}
            <div className="blog-style-three fade-up-anim">
              <div className="info">
                <div className="blog-one-meta">
                  <ul>
                    <li>
                      <a href="#">Integration</a>
                    </li>
                    <li>
                      12 July, 2025
                    </li>
                  </ul>
                </div>
                <h3 className="blog-title">
                  <a href="blog-single-with-sidebar.html">Considered imprudence of technical.</a>
                </h3>
                <p>
                  Agency upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing always.
                </p>
                <a href="blog-single-with-sidebar.html" className="btn-regular">
                  Read more <img src="assets/img/icon/arrow-right-three.png" alt="Image Not Found" />
                </a>
              </div>
            </div>
            {/* End Single Item */}
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
