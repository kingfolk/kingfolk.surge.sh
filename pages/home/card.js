import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import s from './styles.css';
import Link from '../../components/Link';

export default class Card extends Component {
  componentDidMount() {
    // document.getElementById(this.props.id).style.backgroundImage = 'url(buttons/' + imagePrefix + '.png)';
  }
  render() {
    return (
      <div className={`mdl-card ${s[`${this.props.cover}`]} mdl-cell ${this.props.cellCols}`}>
        <button
          className={`${s['max-button']} mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--accent`}
          onClick={this.props.onExpand}>
          <i className="material-icons mdl-color-text--white" role="presentation">add</i>
          <span className="visuallyhidden">add</span>
        </button>
        <div className={`mdl-card__media ${s['media-cover']} mdl-color-text--grey-50`}>
          <h3><a href="entry.html">{this.props.title}</a></h3>
        </div>
        <div className="mdl-color-text--grey-600 mdl-card__supporting-text">
          {this.props.desc}
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

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  cellCols: PropTypes.string,
  onExpand: PropTypes.func,
}
