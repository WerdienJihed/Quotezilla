import { SocialIcon } from "react-social-icons";
import "./../styles/about.css";
function About() {
  return (
    <div className="wrapper">
      <h1 className="title">About Quotezilla</h1>
      <h2 className="subtitle">Short description</h2>
      <p>
        An application that generates random quotes from 3 different categories
        with the possibility of sharing the content directly to Facebook
      </p>
      <h2 className="subtitle">Detailed description</h2>
      <div>
        A simple react application created with create-react-app tool.<br></br>
        <h4>APIs used</h4>
        <ul>
          <li>
            <a href="https://rapidapi.com/ipworld/api/quotes-inspirational-quotes-motivational-quotes/">
              https://rapidapi.com/ipworld/api/quotes-inspirational-quotes-motivational-quotes/
            </a>
          </li>
          <li>
            <a href="https://rapidapi.com/martin.svoboda/api/quotes15/">
              https://rapidapi.com/martin.svoboda/api/quotes15/
            </a>
          </li>
          <li>
            <a href="https://github.com/F4R4N/movie-quote">
              https://github.com/F4R4N/movie-quote
            </a>
          </li>
        </ul>
        <h4>libraries used</h4>
        <ul>
          <li>
            <a href="https://getbootstrap.com/">bootsrap</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-bootstrap">
              react-bootstrap
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-router-dom">
              react-router-dom
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-router-bootstrap">
              react-router-bootstrap
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/axios">axios</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-share">react-share</a>
          </li>
        </ul>
      </div>
      <div className="created-by">
        <div>
          Created By <span className="name">Werdien jihed</span>
        </div>
        <div className="social-icons">
          <SocialIcon url="https://www.linkedin.com/in/werdien-jihed/" />
          <SocialIcon url="https://www.facebook.com/werdien.jihed/" />
          <SocialIcon url="https://github.com/WerdienJihed" />
        </div>
      </div>
    </div>
  );
}

export default About;
