import React from "react";

const Header = ({ data }) => (
  <div className="about section" id="About">
    <div className="container">
      <div className="about-main row">
        {/* WE CAN PUT  A PHOT OF ALL OF US HERE :))) */}
        {/* <div className="left col-md-5 col-lg-4 mb-3">
          <Img
            fixed={data.photo.fluid}
            objectFit="cover"
            objectPosition="top center"
          />
        </div> */}
        <div className="left col-md-7 col-lg-8">
          <div className="about-details">
            {/* <span className="name">We are {data.name}.</span> */}
            <h2 className="sub-position">
              We are {data.name}.
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html
              }}
            />
            {/* <ul className="details">
              <li>
                <strong>Full Name</strong>
                <p>{data.name}</p>
              </li>
              <li>
                <strong>Age</strong>
                <p>{data.age} Years</p>
              </li>
              <li>
                <strong>Location</strong>
                <p>{data.location}</p>
              </li>
              <li>
                <strong>Email</strong>
                <p>
                  <a href={`mailto:${data.gmail}`}>{data.gmail}</a>
                </p>
              </li>
            </ul> */}
            <div className="socials">
              <ul>
                <li>
                  <a
                    className="fab fa-facebook-f"
                    href={data.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-twitter"
                    href={data.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-instagram"
                    href={data.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                {/* TO CREATE A DISCORD BUTTON */}
                <li>
                  <a
                    className="fab fa-discord"
                    href={data.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                {/* <li>
                  <a
                    className="fab fa-linkedin-in"
                    href={data.linkdin}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-github"
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
