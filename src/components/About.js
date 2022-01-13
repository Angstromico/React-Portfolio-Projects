import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import nodeJsIcon from '@iconify/icons-logos/nodejs';
import javaScriptIcon from '@iconify/icons-logos/javascript';
let textButton = 'My Work';
function checkButtonText(text) {
  if (
    text ===
    '👋 This portfolio is made to show my work in the JavaScript React library, to see all of my projects visit my main portfolio in the button below 💜'
  ) {
    return textButton;
  } else {
    return 'Mi Trabajo';
  }
}
class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = 'images/' + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: 'black' }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: 'auto' }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                  />
                  <Icon
                    icon={nodeJsIcon}
                    style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                  />
                  <Icon
                    icon={javaScriptIcon}
                    style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{' '}
                    &nbsp;{' '}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{' '}
                    &nbsp;{' '}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: 'auto',
                      fontSize: '132%',
                      lineHeight: '200%',
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                  <a
                    href="https://manuel-morales-react-portfolio.netlify.app/"
                    className="btn btn-brown text-uppercase py-2 my-2 font-weight-bold"
                  >
                    {checkButtonText(about)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
