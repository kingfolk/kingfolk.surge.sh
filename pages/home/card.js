import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import s from './styles.css';
import Link from '../../components/Link';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      opened: false
    }
  }
  componentWillMount() {
    if (this.props.type == 'removable') {
      this.setState({
        opened: true
      });
    }
  }
  onCardToggle() {
    this.setState({
      opened: !this.state.opened
    });
  }
  render() {
    let cls = this.props.cellCols + ' ', btn, onClick;
    if (this.props.type == 'removable') {
      cls += s['card-open'];
      btn = 'remove';
      onClick = this.props.onClose;
    }
    else {
      if (this.state.opened) {
        cls += s['card-ableopen'] + ' ' + s['card-open'];
        btn = 'remove';
      }
      else {
        cls += s['card-ableopen'];
        btn = 'add';
      }
      onClick = this.onCardToggle.bind(this);
    }

    return (
      <div
        id={this.props.id}
        className={`mdl-card ${s[`${this.props.cover}`]} mdl-cell ${cls}`}>
        <button
          className={`${s['max-button']} mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--accent`}
          onClick={onClick}>
          <i className="material-icons mdl-color-text--white" role="presentation">{btn}</i>
          <span className="visuallyhidden">{btn}</span>
        </button>
        <div className={`mdl-card__media ${s['media-cover']} mdl-color-text--grey-50`}>
          <h3><a href="entry.html">{this.props.title}</a></h3>
        </div>
        <div className="mdl-color-text--grey-600 mdl-card__supporting-text">
          {
            this.props.children ?
            this.props.children
            : this.props.desc
          }
        </div>
        <div className={`mdl-card__supporting-text ${s['meta']} mdl-color-text--grey-600`}>
          <div className={`${s['minilogo']}`}></div>
          <div>
            <strong>Last Update</strong>
            <span>{this.props.lastUpdate}</span>
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
  type: PropTypes.string,
  onClose: PropTypes.func,
  lastUpdate: PropTypes.string.isRequired,
}
