import React from 'react';
import jQuery from 'jQuery';
import s from './styles.css';
import Layout from '../../components/Layout';
import logoImage from '../../images/logo.png';
import Card from './card.js';
import Contact from './contact.js';
import Aboutme from './aboutme.js';
import Projects from './projects.js';
import Photos from './photos.js';
import SharedMatting from './sharedMatting';
// TODO Routing
import history from '../../core/history'

class HomePage extends React.Component {

  constructor(props) {
    super();
    this.state = {
      expands: {
        aboutme: false,
        projects: false,
        photos: false
      },
      topElementId: null,
      expandProject: null,
      updateTime: null
    }
  }

  // TODO Routing
  route(pattern, match) {
    switch (pattern) {
      case '/projects/:projectName':
        let projectName = match.projectName;

        this.setState({
          expandProject: projectName,
          topElementId: 'projectDemo',
        })

        break;
      default:
        this.setState({
          expandProject: null
        })
    }
  }

  componentWillMount() {
    this.route(this.props.route.path, this.props.match);
  }

  componentDidMount() {
    document.title = "A showcase";
  }

  componentDidUpdate(prevProps, prevState) {
    this.autoScroll();
  }

  autoScroll() {
    if (this.state.topElementId) {
      jQuery('html,body').animate({
        scrollTop: jQuery(`#${this.state.topElementId}`).offset().top
        // scrollTop: '0px'
      }, 800);

      this.setState({
        topElementId: null
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.route(nextProps.route.path, nextProps.match);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // this.analyzeHistory()
    // console.log('nextProps');
    // console.log(nextProps);
    // console.log('nextState');
    // console.log(nextState);

    if (nextState.expands != this.state.expands
      || nextState.topElementId
      || this.isRouteChanged(nextProps)
      || nextState.updateTime != this.state.updateTime)
      return true;

    return false;
  }

  isRouteChanged(nextProps) {
    // route path changed
    if (this.props.route.path != nextProps.route.path) return true;
    if (this.props.match != nextProps.match) return true;
    // TODO
    // if (this.props.query != nextProps.query) return true;

    return false;
  }

  // HACK to make child update
  onChildUpdate() {
    this.setState({
      updateTime: (new Date()).getTime()
    })
  }

  onAboutmeExpand() {
    let aboutme = this.state.expands.aboutme;
    this.setState({
      expands: {
        ...this.state.expands,
        aboutme: !aboutme
      },
      topElementId: !aboutme ? 'aboutmeExpand' : null
    });
  }

  onProjectsExpand() {
    let projects = this.state.expands.projects;
    this.setState({
      expands: {
        ...this.state.expands,
        projects: !projects
      },
      topElementId: !projects ? 'projectsExpand' : null
    });
  }

  // TODO: this is problematic. if complex routing. goBack will make a mess
  onProjectClose() {
    history.goBack();
  }

  onPhotosExpand() {
    let photos = this.state.expands.photos;
    this.setState({
      expands: {
        ...this.state.expands,
        photos: !photos
      },
      topElementId: !photos ? 'photosExpand' : null
    });
  }

  analyzeHistory() {
    let location = history.getCurrentLocation();
    console.log('analyzeHistory');
    console.log(location);
  }

  render() {
    console.log('rerender');
    console.log('props');
    console.log(this.props);
    console.log('state');
    console.log(this.state);

    let projectsExpand = this.state.expands.projects;

    return (
      <Layout>
        <div className={`${s['demo-blog']} mdl-layout mdl-js-layout has-drawer is-upgraded`}>
          <main className="mdl-layout__content">
            <div className={`${s['demo-blog__posts']} mdl-grid`}>

              <Card
                title="About me"
                cover="coffee-pic"
                desc="Me in a nutshell. My schools and professionals."
                cellCols="mdl-cell--8-col"
                onExpand={this.onAboutmeExpand.bind(this)}
              />

              <Contact />

              {
                this.state.expands.aboutme?
                (
                  <Aboutme
                    id="aboutmeExpand"
                    cover="coffee-pic"
                    onClose={this.onAboutmeExpand.bind(this)}
                  />
                )
                : null
              }

              <Card
                title="Projects"
                cover="on-the-road-again"
                desc="Projects of mine, only open-source allowed."
                cellCols="mdl-cell--12-col"
                onExpand={this.onProjectsExpand.bind(this)}
              />

              {
                projectsExpand?
                (
                  <Projects
                    id="projectsExpand"
                    cover="on-the-road-again"
                    onClose={this.onProjectsExpand.bind(this)}
                  />
                ) : null
              }

              { this.renderProject() }

              <Card
                title="Random Photography"
                cover="shopping"
                desc="Random photos toke by phone. From Lumia 830 to Xiaomi 5"
                cellCols="mdl-cell--12-col"
                onExpand={this.onPhotosExpand.bind(this)}
              />

              {
                this.state.expands.photos?
                (
                  <Photos
                    id="photosExpand"
                    cover="shopping"
                    onClose={this.onPhotosExpand.bind(this)}
                  />
                )
                : null
              }

              <nav className={`${s['demo-nav']} mdl-cell mdl-cell--12-col`}>
                <div className="section-spacer"></div>
                <a href="entry.html" className={`${s['demo-nav__button']}`} title="show more">
                  View Source
                  <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                    <i className="material-icons" role="presentation">arrow_forward</i>
                  </button>
                </a>
              </nav>
            </div>
          </main>
        </div>
      </Layout>
    );
  }

  renderProject() {
    if (this.state.expandProject == 'shared_matting_webgl') {
      return (
        <Projects
          id="projectDemo"
          cover="on-the-road-again"
          onClose={this.onProjectClose.bind(this)}
        >
          <SharedMatting
            onUpdate={this.onChildUpdate.bind(this)}
          />
        </Projects>);
    }
  }
}


export default HomePage;
