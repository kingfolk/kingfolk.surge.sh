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
import Header from './Header.js';
import Footer from '../Footer';
import s from './Layout.css';

class Layout extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" ref="root">
        <div className="mdl-layout__inner-container">
          <Header />
          <main className="mdl-layout__content">
            <div className={s.content} {...this.props} />
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
