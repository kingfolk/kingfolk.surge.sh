import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import s from './styles.css';
import Link from '../../components/Link';

export default class Photos extends Component {
  render() {
    return (
      <div 
        id={this.props.id}
        className={`mdl-card ${s[`${this.props.cover}`]} mdl-cell mdl-cell--12-col`}>
        <button
          className={`${s['max-button']} mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--accent`}
          onClick={this.props.onClose}>
          <i className="material-icons mdl-color-text--white" role="presentation">remove</i>
          <span className="visuallyhidden">remove</span>
        </button>
        <div className={`mdl-card__media ${s['media-cover']} mdl-color-text--grey-50`}>
          <h3><a href="entry.html">Random Photos</a></h3>
        </div>
        <div className="mdl-color-text--grey-600 mdl-card__supporting-text">
          Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
        </div>
        <div className={`mdl-card__supporting-text ${s['meta']} mdl-color-text--grey-600`}>
          <div className={`${s['minilogo']}`}></div>
          <div>
            <strong>The Newist</strong>
            <span>2 days ago</span>
          </div>
        </div>
      </div>
    );
  }

}

Photos.propTypes = {
  cover: PropTypes.string.isRequired,
  onClose: PropTypes.func,
}
