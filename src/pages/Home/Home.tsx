import React from "react";
import {
  TfiLightBulb,
  TfiPanel,
  TfiHeadphoneAlt,
  TfiSearch,
  TfiRocket,
  TfiLink,
  TfiAngleRight,
} from "react-icons/tfi";
import { Link } from "react-router-dom";

import Portfolio1 from "../../images/portfolio/1.jpg";
import Portfolio2 from "../../images/portfolio/2.jpg";
import Portfolio3 from "../../images/portfolio/3.jpg";

const Home = () => {
  const faculty = [
    {
      icon: <TfiLightBulb />,
      h4: "Custom Effective Software development",
      p: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    },
    {
      icon: <TfiPanel />,
      h4: "Analyse Your Expensees On Every Device",
      p: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    },
    {
      icon: <TfiHeadphoneAlt />,
      h4: "Creating a dedicated IT business growth",
      p: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    },
  ];

  const speciality = [
    {
      icon: <TfiLightBulb />,
      h5: "Data analysis",
      p: "A complete web app solution for business",
    },
    {
      icon: <TfiPanel />,
      h5: "Web Development",
      p: "A complete web app solution for business",
    },
    {
      icon: <TfiSearch />,
      h5: "Content Mangement",
      p: "A complete web app solution for business",
    },
    {
      icon: <TfiRocket />,
      h5: "Mobility",
      p: "A complete web app solution for business",
    },
  ];

  const projectItem = [
    {
      image: Portfolio1,
      icon: <TfiLink />,
      h3: "School Management",
      p: "Web Development",
    },
    {
      image: Portfolio2,
      icon: <TfiLink />,
      h3: "Computer Service Management",
      p: "Web Development",
    },
    {
      image: Portfolio3,
      icon: <TfiLink />,
      h3: "Fantasy App",
      p: "Web Development",
    },
  ];

  return (
    <>
      <section className="banner d-flex align-items-center">
        <div className="banner-img-part"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 col-xl-8">
              <div className="block">
                <span className="text-uppercase text-sm letter-spacing ">
                  The most powerful Solution
                </span>
                <h1 className="mb-3 mt-3">Digital experience with Orbitor</h1>
                <p className="mb-5">
                  Veritatis earum aliquid doloribus molestias, eveniet molestiae
                  aperiam ratione. Facilis velit voluptatibus impedit eligendi
                  delectus illo earum voluptatum, laudantium molestiae!
                </p>
                <Link className="btn btn-main" to="/about">
                  Learn more about Digicon
                  <i className="ml-2">
                    <TfiAngleRight />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section about">
        <div className="container">
          <div className="row">
            {faculty.map((items, index) => {
              return (
                <div className="col-lg-4 col-md-6 ">
                  <div className="about-item mb-5 mb-lg-5">
                    <div className="icon">
                      <i>{items.icon}</i>
                    </div>
                    <div className="content">
                      <h4 className="mt-3 mb-3">{items.h4}</h4>
                      <p className="mb-4">{items.p}</p>
                      {/* <Link to='/' >Read More</Link> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section process">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="process-block pl-4">
                <span className="text-uppercase text-sm letter-spacing">
                  Why choose us
                </span>
                <h2 className="mb-4 mt-3">We help you to make work easy</h2>
                <p className="mb-4">
                  We understand what your business means to you,your
                  requirements considering trends.Smet nemo excepturi voluptas
                  eligendi .
                </p>
              </div>
            </div>

            <div className="col-lg-7 col-xs-12 col-md-12">
              <div className="row">
                {speciality.map((items, index) => {
                  return (
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="icon-block text-center mb-4 mb-lg-0">
                        <i className="ti-light-bulb">{items.icon}</i>
                        <h5>{items.h5}</h5>
                        <p>{items.p}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="cta-content bg-white p-5 rounded">
                <h3 className="mb-4">
                  Assurance Service In Software
                  <span className="text-color-primary"> Testing</span>{" "}
                </h3>
                <p className="mb-30">
                  An Independent Validation and Testing services from SISAR.
                  Helps to reduce software development efforts
                </p>
                <Link className="btn btn-main" to="/portfolio">
                  Portfolio
                  <i className="ml-2 fa">
                    <TfiAngleRight />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section portfolio start  */}
      <section className="section portfolio pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="heading">
                <h2 className="mb-4">
                  We’ve Done Lot’s of Work, Let’s Check Some From Here
                </h2>
                <p>
                  We have the best experts to elevate your business to the next
                  level, try is and you will see! We have the best experts to
                  elevate your{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row portfolio-gallery">
            {projectItem.map((items, index) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="portflio-item position-relative mb-4">
                    <a href="project-details.html">
                      <img
                        key={index}
                        src={items.image}
                        alt=""
                        className="img-fluid w-100"
                      />
                      <div className="overlay-item">
                        <i className="ti-link">{items.icon}</i>
                      </div>
                      <div className="portfolio-item-content">
                        <h3 className="mb-0 text-white">{items.h3}</h3>
                        <p className="text-white-50">{items.p}</p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/*  section portfolio END  */}
      {/* section Counter Start  */}
      <section className="section counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-4	 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-7 mb-lg-0">
                <h2 className="mb-0">
                  <span className="counter-stat font-weight-bold">10</span> +
                </h2>
                <p>Project Done</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-7 mb-lg-0">
                <h2 className="mb-0">
                  <span className="counter-stat font-weight-bold">10 </span>K{" "}
                </h2>
                <p>User Worldwide</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-7 mb-lg-0">
                <h2 className="mb-0">
                  <span className="counter-stat font-weight-bold">2</span>
                </h2>
                <p>Availble Country</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section Counter End   */}
    </>
  );
};

export default Home;
