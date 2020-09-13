import React, { Component } from "react";
import Img from "gatsby-image"
import Typical from 'react-typical'

export default class Banner extends Component{
  
  render() {
    const { data } = this.props;
    return (
      <div className="banner">
        <Img
          fixed={data.bannerImage.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="container">
          <div className="banner-details">
            <div class="animation">
              <h3>We are{' '}
                <Typical className= "actual"
                loop={Infinity} 
                wrapper= "span"
                steps={[
                  'a Community',
                  1000,
                  'a Team', 
                  1000,
                  'Learning',
                  1000,
                  'Designing',
                  1000,
                  'Creating',
                  1000,
                  'Innovating',
                  1000
                ]}
                />
                </h3>
            </div>
            {/* <span>We are {data.designation}.</span> */}
            <h1>UTM Robotics</h1>
            {/* <ul className="sub-data">
              {data.bannerList.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul> */} 
            
            {/* The sub banner commented out for now */}
            <ul className="social">
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
    );
  }
}

