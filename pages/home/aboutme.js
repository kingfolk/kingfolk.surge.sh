import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import s from './styles.css';
import sl from './aboutme.css';
import Link from '../../components/Link';
import education from './education';
import works from './works';

class TimePiece extends React.Component {
  render() {
    return (
      <div className="mdl-cell mdl-cell--12-col mdl-grid mdl-grid--no-spacing">
        <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
          <div className="section__circle-container__circle">
            <img className={sl['logo-image']} src={require(this.props.logo)}/>
          </div>
        </div>
        <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
          <h5>{this.props.institution}</h5>
          <div>
            <span>{this.props.location}</span>
            <span className={sl['float-right']}>{this.props.from + ' - ' + this.props.to}</span>
          </div>
          <h5>{this.props.title}</h5>
        </div>
      </div>
    )
  }
}

TimePiece.propType = {
  institution: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired
};

export default class Aboutme extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        className={`mdl-card ${sl['demo-resume']} ${s[`${this.props.cover}`]} mdl-cell mdl-cell--12-col`}>
        <button
          className={`${s['max-button']} mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--accent`}
          onClick={this.props.onClose}
          >
          <i className="material-icons mdl-color-text--white" role="presentation">remove</i>
          <span className="visuallyhidden">remove</span>
        </button>
        <div className={`mdl-card__media ${s['media-cover']} mdl-color-text--grey-50`}>
          <h3><a href="entry.html">About me</a></h3>
        </div>


        <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div className="mdl-card mdl-cell mdl-cell--12-col">
            <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
              <h4 className="mdl-cell mdl-cell--12-col">Bio</h4>
              <div className="mdl-cell mdl-cell--12-col">
                My name is Jialei Jin, 金嘉磊. I am a life-long student, programmer and "chef". I love programing language-wise and algorithm-wise.
                My interests are in Programming Language, Computer Vision and Graphics.
              </div>
            </div>
            <div className="mdl-card__actions">
              <a href="#" className="mdl-button">Download PDF Resume</a>
            </div>
          </div>
        </section>
        <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div className="mdl-card mdl-cell mdl-cell--12-col">
            <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
              <h4 className="mdl-cell mdl-cell--12-col">Education</h4>
              {
                _.map(education, tp => {
                  return (<TimePiece
                      {...tp}
                    />);
                })
              }
            </div>
          </div>
        </section>
        <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div className="mdl-card mdl-cell mdl-cell--12-col">
            <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
              <h4 className="mdl-cell mdl-cell--12-col">Work Experience</h4>
              {
                _.map(works, tp => {
                  return (<TimePiece
                      {...tp}
                    />);
                })
              }
            </div>
          </div>
        </section>
        <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div className="mdl-card mdl-cell mdl-cell--12-col">
            <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
              <h4 className="mdl-cell mdl-cell--12-col">Skills</h4>
              <div className="section__text mdl-cell mdl-cell--12-col mdl-grid mdl-grid--no-spacing">
                <div className="mdl-cell mdl-cell--3-col mdl-cell--1-col-phone">
                  <b>Daily Driven</b>
                </div>
                <div className="mdl-cell mdl-cell--9-col-desktop mdl-cell--5-col-tablet mdl-cell--3-col-phone">
                  C/C++, Javascript/ES6
                </div>
              </div>
              <div className="section__text mdl-cell mdl-cell--12-col mdl-grid mdl-grid--no-spacing">
                <div className="mdl-cell mdl-cell--3-col mdl-cell--1-col-phone">
                  <b>Working Language</b>
                </div>
                <div className="mdl-cell mdl-cell--9-col-desktop mdl-cell--5-col-tablet mdl-cell--3-col-phone">
                  Ruby/Rails, Python, Apple/Swift, Scala, Java, Matlab, SQL
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }

}

Aboutme.propTypes = {
  cover: PropTypes.string.isRequired,
  onClose: PropTypes.func
}
