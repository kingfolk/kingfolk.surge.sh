import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import s from './styles.css';
import Link from '../../components/Link';
import logoImage from '../../images/logo.png';

export default class Contact extends Component {
  onMail() {
    let address = "jjlfolk@gmail.com";
    window.location.href = 'mailto:' + address;
  }
  render() {
    return (
      <div className={`mdl-card mdl-cell mdl-cell--8-col mdl-cell--3-col-desktop ${s['something-else']}`}>
        <div
          onClick={this.onMail}
          className={`mdl-card__media ${s['media-cover']} mdl-color--white mdl-color-text--grey-600`}>
          {/*<a href="mailto:example@example.com">*/}
            <img src={logoImage}/>
          {/*</a>*/}
          +1
        </div>
        <div className={`mdl-card__supporting-text ${s['meta']} ${s['meta--fill']} mdl-color-text--grey-600`}>
          <div>
            <strong>Contact me</strong>
          </div>
          <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" htmlFor="menubtn">
            <li className="mdl-menu__item">About</li>
            <li className="mdl-menu__item">Message</li>
            <li className="mdl-menu__item">Favorite</li>
            <li className="mdl-menu__item">Search</li>
          </ul>
          <button id="menubtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
            <i className="material-icons" role="presentation">more_vert</i>
            <span className="visuallyhidden">show menu</span>
          </button>
        </div>
      </div>
    );
  }

}

// Contact.propTypes = {
//   cover: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
//   cellCols: PropTypes.string,
// }
