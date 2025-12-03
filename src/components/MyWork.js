const MyWork = () => {
  return (
    <section className="container" id="portfolio">
      <div className="main-title">
        <h2>
          My <span>Projects</span>
          <span className="bg-text">My Projects</span>
        </h2>
      </div>
      <div className="portfolios" style={{ marginTop: "6rem" }}>
        <div className="portfolio-item">
          <div className="image">
            <img src="/img/note_making.jpeg" alt="Note Making Project" />
          </div>
          <div className="hover-items">
            <h3>Keeper-Note Making Web App</h3>
            <div className="icons">
              <a
                href="https://github.com/saurav00679/keeper_app_merge"
                target="_blank"
                className="icon"
                rel="noreferrer"
                title="Project Link"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src="/img/blog_writing.jpg" alt="Blog Writing" />
          </div>
          <div className="hover-items">
            <h3>Blog Writing Web App</h3>
            <div className="icons">
              <a
                href="https://github.com/sauravsharma-00679cogo/Blog-Front-End/"
                target="_blank= "
                className="icon"
                title="FrontEnd Link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://github.com/sauravsharma-00679cogo/Blog-back_end_final"
                target="_blank= "
                className="icon"
                title="Backend Link"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src="/img/movie-search.jpg" alt="Movie Search" />
          </div>
          <div className="hover-items">
            <h3>Movie Search</h3>
            <div className="icons">
              <a
                href="https://github.com/sauravsharma-00679cogo/Movie-Search"
                className="icon"
                title="Project Link"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src="/img/quine-mc.jpg" alt="Quine-Mccluskey-implementation" />
          </div>
          <div className="hover-items">
            <h3>Quine Mccluskey implementation</h3>
            <div className="icons">
              <a
                href="https://github.com/Qeubd-Bsjso/Quine-Mccluskey-implementation.git"
                className="icon"
                title="Project Link"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img
              src="/img/graphic_editor.webp"
              alt="Graphics Editor Software"
            />
          </div>
          <div className="hover-items">
            <h3>Graphics Editor Software</h3>
            <div className="icons">
              <a
                href="https://github.com/Qeubd-Bsjso/GraphicsEditor.git"
                className="icon"
                title="Project Link"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyWork;
