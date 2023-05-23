import React, {useEffect} from "react";
import { Link } from "react-router-dom";

function Demopage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section
        className="demosection herosection mt-0 background parallax shadow-dark d-flex align-items-center padding"
        style={{ backgroundImage: "url(/images/1656966109144.jpg)" }}
      >
        <div className="container">
          <div className="demo-content">
            <h1>Portfolio</h1>
            <h4>React Portfolio - Filipe</h4>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
      <div className="demoitems">
        <div className="container">
          <h2>Demos</h2>
          <div className="row -mb-50">
            <div className="col-md-6 mt-50">
              <Link to="/" className="demoitem shadow-dark">
                <div className="demoimage">
                  <img src="demo/singlepage.png" alt="" />
                  <h4>Single Page</h4>
                </div>
              </Link>
            </div>
            <div className="col-md-6 mt-50">
              <Link to="/multipage" className="demoitem shadow-dark">
                <div className="demoimage">
                  <img src="demo/multipage.png" alt="" />
                  <h4>Multi Page</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section
        className="mb-0 demosection mt-0 background parallax shadow-dark d-flex align-items-center"
        style={{ backgroundImage: "url(/images/1656966109144.jpg)" }}
      >
        <div className="container">
          <div className="demo-content">
            <p>&copy; {new Date().gtFullYear} Filipe Portfolio Template</p>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    </>
  );
}

export default Demopage;
