/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';
import classNames from 'classnames';

class Navigation extends React.Component {

  constructor() {
    super();
    // this.links = {
    //   'Home': '/',
    //   'Resume': '/resume',
    //   'About': '/about',
    //   'Not Found': '/not-found'
    // }
    this.links = new Map()
      .set('Home', '/')
      .set('Resume', '/resume')
      .set('Random Photo', '/photo')
      .set('Contact', '/contact');

  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font" ref="root">
        {
          this.navLinks()
        }
      </nav>
    );
  }

  navLinks() {
    let activeTab = this.props.activeTab;
    var arr = [];
    for (let [tab, to] of this.links) {
      let cn = classNames('mdl-navigation__link', {'is-active': tab == activeTab});
      let row = <Link className={cn} to={to}>{tab}</Link>;
      arr.push(row)
    }
    return arr;
  }

}

export default Navigation;
