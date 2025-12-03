import IntroPage from "./IntroPage";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import MySkills from "./MySkills";
import ContactMe from "./ContactMe";
import Controls from "./Controls";

const HomePage = () => {
  return (
    <div>
      <IntroPage />
      <main>
        <AboutMe />
        <MyWork />
        <MySkills />
        <ContactMe />
      </main>
      <Controls />
      <div className="theme-btn">
        <i className="fas fa-adjust"></i>
      </div>
    </div>
  );
};
export default HomePage;
