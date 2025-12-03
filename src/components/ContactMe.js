const ContactMe = () => {
  return (
    <section className="container contact" id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>
            Contact <span>Me</span>
            <span className="bg-text">Contact</span>
          </h2>
        </div>
        <div className="contact-content-con">
          <div className="right-contact">
            <div className="contact-icons">
              <div className="contact-icon">
                <a
                  href="mailto:sauravsharma.00679@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-envelope"></i>
                </a>
                <a href="tel:+918278874126" target="_blank" rel="noreferrer">
                  <i className="fa fa-phone"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/saurav-sharma-software-engineer-ror"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/saurav00679"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <form
              action="https://formspree.io/f/mgejngbb"
              className="contact-form"
              method="post"
            >
              <div className="mb-3 input-control">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-3 input-control">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="input-control">
                <textarea
                  name=""
                  id=""
                  cols="15"
                  rows="8"
                  placeholder="Message Here..."
                ></textarea>
              </div>
              <div className="submit-btn">
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactMe;
