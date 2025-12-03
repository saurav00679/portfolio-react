import { useEffect } from "react";

const Controls = () => {
  useEffect(() => {
    const controlButtons = document.querySelectorAll(".control");

    controlButtons.forEach((button) => {
      button.addEventListener("click", function () {
        document.querySelector(".active-btn")?.classList.remove("active-btn");
        this.classList.add("active-btn");

        document.querySelector(".active")?.classList.remove("active");
        const section = document.getElementById(button.dataset.id);
        section?.classList.add("active");
      });
    });

    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });

    return () => {
      controlButtons.forEach((button) => {
        button.replaceWith(button.cloneNode(true));
      });
      themeBtn.replaceWith(themeBtn.cloneNode(true));
    };
  }, []);
  return (
    <div className="controls">
      <div className="control active-btn" data-id="home" title="Home">
        <i className="fas fa-home"></i>
      </div>
      <div className="control" data-id="about" title="Education & Experience">
        <i className="fas fa-briefcase"></i>
      </div>
      <div className="control" data-id="blogs" title="My Skills">
        <i className="fa fa-calculator"></i>
      </div>
      <div className="control" data-id="portfolio" title="My Projects">
        <i className="fas fa-user"></i>
      </div>
      <div className="control" data-id="contact" title="Contact Me">
        <i className="fas fa-envelope-open"></i>
      </div>
    </div>
  );
};
export default Controls;
