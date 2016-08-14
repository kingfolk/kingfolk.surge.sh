import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import s from './styles.css';
import Link from '../../components/Link';
import logoImage from '../../images/logo.png';

export default class Contact extends Component {
  render() {
    return (
      <div className={`mdl-card ${s['something-else']} mdl-cell mdl-cell--8-col mdl-cell--4-col-desktop`}>
        <button className="max-button mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--accent">
          <i className="material-icons mdl-color-text--white" role="presentation">add</i>
          <span className="visuallyhidden">add</span>
        </button>
        <div className={`mdl-card__media ${s['media-cover']} mdl-color--white mdl-color-text--grey-600`}>
          <img src={logoImage}/>
          +1,337
        </div>
        <div className={`mdl-card__supporting-text ${s['meta']} ${s['meta--fill']} mdl-color-text--grey-600`}>
          <div>
            <strong>The Newist</strong>
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
