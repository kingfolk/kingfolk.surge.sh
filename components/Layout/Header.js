/**
 * kingfolk
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import s from './Header.css';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <header className={`mdl-layout__header mdl-layout__header--waterfall ${s['portfolio-header']}`} ref="root">
        <div className={`mdl-layout__header-row ${s['portfolio-logo-row']}`}>
          <span className={s["mdl-layout__title"]}>
            <div className={s["portfolio-logo"]}></div>
            <div className={s["mdl-layout__title"]}>
                I am watching U...
            </div>
          </span>
        </div>
        <div className={`mdl-layout__header-row ${s['portfolio-navigation-row']} mdl-layout--large-screen-only`}>
          <Navigation />
        </div>
      </header>
    );
  }

}

export default Header;
