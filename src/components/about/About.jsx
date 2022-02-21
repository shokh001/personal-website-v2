import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Believe In Yourself
        </p>
        <p className="a-desc">
          Hello! My name is Shohjahon. I entered the Tashkent University of Information Technologies in 2019. I am currently a 3rd year student. My interest in web programming started in 2019. I completed a frontend course at the PDP IT Academy in Tashkent.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">PDP IT ACADEMY 2021</h4>
            <p className="a-award-desc">
              I have successfully graduated from PDP Academy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
