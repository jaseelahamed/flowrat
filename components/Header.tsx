export default function Header() {
  return (
    <header>
    {/* Start Navigation */}
    <nav className="navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs navbar-fixed no-background">
      <div className="container d-flex justify-content-between align-items-center">            
        {/* Start Header Navigation */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <i className="fa fa-bars" />
          </button>
          <a className="navbar-brand" href="index.html">
            <img src="assets/img/logo.png" className="logo" alt="Logo" />
          </a>
        </div>
        {/* End Header Navigation */}
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="navbar-menu">
          <img src="assets/img/logo.png" alt="Logo" />
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <i className="fa fa-times" />
          </button>
          <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
            <li className="dropdown megamenu-fw megamenu-style-two column-two">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Demos</a>
              <ul className="dropdown-menu megamenu-content" role="menu">
                <li>
                  <div className="col-menu-wrap">
                    <div className="menu-cal-items">
                      <div className="col-menu">
                        <h4>Homepage Dark</h4>
                        <ul className="menu-col">
                          <li><a href="index.html">Home Ai Agency</a></li>
                          <li><a href="ai-solution-dark.html">Home Ai Solution</a></li>
                          <li><a href="image-generator-dark.html">Image Generator</a></li>
                          <li><a href="ai-startup-dark.html">Ai Startup</a></li>
                          <li><a href="artificial-intelligence-dark.html">Artificial intelligence</a></li>
                          <li><a href="text-generator-dark.html">Text Generator</a></li>
                          <li><a href="chatbot-dark.html">Home Chatbot</a></li>
                        </ul>
                      </div>
                      <div className="col-menu">
                        <h4>Homepage Light</h4>
                        <ul className="menu-col">
                          <li><a href="ai-agency.html">Home Ai Agency</a></li>
                          <li><a href="ai-solution.html">Home Ai Solution</a></li>
                          <li><a href="image-generator.html">Image Generator</a></li>
                          <li><a href="ai-startup.html">Ai Startup</a></li>
                          <li><a href="artificial-intelligence.html">Artificial intelligence</a></li>
                          <li><a href="text-generator.html">Text Generator</a></li>
                          <li><a href="chatbot.html">Home Chatbot</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="megamenu-banner">
                      <div className="thumb">
                        <img src="assets/img/thumb/6.jpg" alt="Image Not Found" />
                        <a href="https://www.youtube.com/watch?v=iyARCQ7Ohd4" className="popup-youtube video-button"><i className="fas fa-play" /></a>
                      </div>
                      <h4>Intro Video</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages</a>
              <ul className="dropdown-menu">
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="about-us-2.html">About Us Two</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Team</a>
                  <ul className="dropdown-menu">
                    <li><a href="team.html">Team Style One</a></li>
                    <li><a href="team-2.html">Team Style Two</a></li>
                    <li><a href="team-details.html">Team Details</a></li>
                  </ul>
                </li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
                <li><a href="404.html">Error Page</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="project.html" className="dropdown-toggle" data-toggle="dropdown">Projects</a>
              <ul className="dropdown-menu">
                <li><a href="project.html">Project Style One</a></li>
                <li><a href="project-two.html">Project Style Two</a></li>
                <li><a href="project-details.html">Project Details</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Flowrat Features</a>
              <ul className="dropdown-menu">
                <li><a href="services.html">Flowrat Features Version One</a></li>
                <li><a href="services-2.html">Flowrat Features Version Two</a></li>
                <li><a href="services-3.html">Flowrat Features Version Three</a></li>
                <li><a href="services-4.html">Flowrat Features Version Four</a></li>
                <li><a href="services-5.html">Flowrat Features Version Five</a></li>
                <li><a href="services-details.html">Flowrat Features Details</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog</a>
              <ul className="dropdown-menu">
                <li><a href="blog-standard.html">Blog Standard</a></li>
                <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                <li><a href="blog-single.html">Blog Single</a></li>
                <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
              </ul>
            </li>
            <li><a href="contact-us.html">contact</a></li>
          </ul>
        </div>{/* /.navbar-collapse */}
        <div className="attr-right">
          {/* Start Atribute Navigation */}
          <div className="attr-nav">
            <ul>
              <li className="button">
                <a className="btn btn-style-one" href="contact-us.html">Get Started <i className="fas fa-arrow-right" /></a>
              </li>
            </ul>
          </div>
          {/* End Atribute Navigation */}
        </div>
        {/* Main Nav */}
      </div>  
      {/* Overlay screen for menu */}
      <div className="overlay-screen" />
      {/* End Overlay screen for menu */}
    </nav>
    {/* End Navigation */}
  </header>
  );
}