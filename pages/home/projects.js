import React, {PropTypes} from 'react';
import Layout from '../../components/Layout';
import { title, html } from './index.md';
import s from './styles.css';
import projects from './projects.json'
import Link from '../../components/Link';

class Card extends React.Component {
  render() {
    return (
      <div className="content-column mdl-cell mdl-card mdl-shadow--4dp portfolio-card mdl-cell--4-col mdl-cell--6-col-tablet mdl-cell--12-col-phone">

        <div className="mdl-card__media">
            <img className={"article-image " + s['cover-image']} src={require(this.props.cover)} border="0" alt=""/>
        </div>
        <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">{this.props.title}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {this.props.desc}
        </div>
        <div className="mdl-card__actions mdl-card--border">
            { this.renderLinks() }
        </div>
      </div>
    );
  }

  renderLinks() {
    let links = ['github', 'demo', 'blog'];
    var res = [];
    _.each(links, (link) => {
      let to = this.props.links[link];
      if (to) {
        let row;
        if (link == 'github') {
          row = (<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
            href={to}>{_.capitalize(link)}</a>);
        }
        else {
          row = (<Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
            to={to}>{_.capitalize(link)}</Link>);
        }
        res.push(row);
      }
    })

    return res;
  }
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  links: PropTypes.shape({
    blog: PropTypes.string,
    github: PropTypes.string,
    demo: PropTypes.string
  })
}

export default class Projects extends React.Component {

  render() {
    return (
      <div>

        {
          this.props.children ?
          this.props.children
          : (<div className="content-grid mdl-grid">
            {
              _.map(projects, function(p) {
                return (<Card
                  {...p}
                />);
              })
            }
            </div>)
        }
      </div>
    );
  }

}
