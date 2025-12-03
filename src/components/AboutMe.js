const AboutMe = () => {
  return (
    <section className="container about" id="about">
      <div className="main-title">
        <h2>
          Education & <span>Experience</span>
          <span className="bg-text">Education Experience</span>
        </h2>
      </div>
      <div className="timeline" style={{ marginTop: "6rem" }}>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Jan 2024 - Aug 2025</p>
          <h5>
            Software Engineer<span> - QuikChex, Mumbai</span>
          </h5>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Jun 2022 - Aug 2023</p>
          <h5>
            Associate Software Engineer<span> - Cogoport, Gurugram</span>
          </h5>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <p className="tl-duration">2018 - 2022</p>
          <h5>
            BTech - CSE<span>, NIT Hamirpur, India</span>
          </h5>
          <p>9.03 CGPA</p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <p className="tl-duration">2016-2017</p>
          <h5>
            Class XII<span> - St. Thomas School, Shimla</span>
          </h5>
          <p>
            Percentage: 83.6 %<br />
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <p className="tl-duration">2014 - 2015</p>
          <h5>
            Class X<span> - Bhuvneshwary Public School, Arsu</span>
          </h5>
          <p>
            Percentage: 97 % <br />
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
