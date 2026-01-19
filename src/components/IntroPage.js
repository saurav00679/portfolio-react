const IntroPage = () => {
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src="/img/my_pic.jpg" alt="Saurav's pic" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">Hey there... </h1>
          <h2 className="nameTitle">
            I'm <span>Saurav Sharma.</span>
          </h2>
          <p>
            A Software Engineer specializing in Ruby on Rails and front-end
            development. I build scalable applications, integrate intuitive UIs,
            and work efficiently with databases like PostgreSQL and MongoDB.
            <br />
          </p>
          <p>
            I enjoy optimizing performance and contributing to impactful
            products while continuously learning and growing in the evolving
            software world.
          </p>
          <div className="btn-con">
            <a
              href="https://drive.google.com/file/d/1mZiv6aLpxf4-K_NSavc_7zgmn5uhjL45/view?usp=sharing"
              target="_blank"
              className="main-btn"
              rel="noreferrer"
            >
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default IntroPage;
