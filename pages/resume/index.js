/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {PropTypes} from 'react';
import Layout from '../../components/Layout';
import { title, html } from './index.md';
import s from './styles.css';
import education from './education';
import works from './works'
import _ from 'lodash';

class TimePiece extends React.Component {
  render() {
    return (
      <div className="mdl-cell mdl-cell--12-col mdl-grid mdl-grid--no-spacing">
        <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
          <div className="section__circle-container__circle">
            <img className={s['logo-image']} src={require(this.props.logo)}/>
          </div>
        </div>
        <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
          <h5>{this.props.institution}</h5>
          <div>
            <span>{this.props.location}</span>
            <span className={s['float-right']}>{this.props.from + ' - ' + this.props.to}</span>
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
}

class ResumePage extends React.Component {

  componentDidMount() {
    document.title = 'Resume';
  }

  render() {
    console.log(s);
    return (
      <Layout>
      {/*<div className="mdl-layout__content">*/}
        <div className={`${s['mdl-resume']} mdl-layout__tab-panel is-active`} id="overview">
          <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div className="mdl-card mdl-cell mdl-cell--12-col">
              <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                <h4 className="mdl-cell mdl-cell--12-col">Bio</h4>
                <div className="mdl-cell mdl-cell--12-col">
                  My name is Jialei Jin, 金嘉磊. I am a life-long student, programmer and "chef". I love programing language-wise and algorithm-wise.
                  My interests are in Programming Language, Computer Vision and Graphics.
                </div>
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
              <div className="mdl-card__actions">
                <a href="#" className="mdl-button">Read our features</a>
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
              <div className="mdl-card__actions">
                <a href="#" className="mdl-button">Read our features</a>
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
              <div className="mdl-card__actions">
                <a href="#" className="mdl-button">Read our features</a>
              </div>
            </div>
          </section>
          <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div className="mdl-card mdl-cell mdl-cell--12-col">
              <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                <h4 className="mdl-cell mdl-cell--12-col">Language</h4>
                <div className="section__text mdl-cell mdl-cell--12-col mdl-grid mdl-grid--no-spacing">
                  <div className="mdl-cell mdl-cell--3-col mdl-cell--1-col-phone">
                    <b>Chinese</b>
                  </div>
                  <div className="mdl-cell mdl-cell--9-col-desktop mdl-cell--5-col-tablet mdl-cell--3-col-phone">
                    Mother Language
                  </div>
                </div>
                <div className="section__text mdl-cell mdl-cell--12-col mdl-grid mdl-grid--no-spacing">
                  <div className="mdl-cell mdl-cell--3-col mdl-cell--1-col-phone">
                    <b>English</b>
                  </div>
                  <div className="mdl-cell mdl-cell--9-col-desktop mdl-cell--5-col-tablet mdl-cell--3-col-phone">
                    Proficient
                  </div>
                </div>
              </div>
              <div className="mdl-card__actions">
                <a href="#" className="mdl-button">Read our features</a>
              </div>
            </div>
          </section>
        </div>
      {/*</div>*/}
      </Layout>
    );
  }

}

export default ResumePage;
