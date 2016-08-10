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
import Layout from '../../components/Layout';
import { title, html } from './index.md';
import s from './styles.css';
import Card from './card';
import projects from './projects'

class HomePage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <div className="content-grid mdl-grid">
          {
            _.map(projects, function(p) {
              return (<Card
                {...p}
              />);
            })
          }

        </div>
      </Layout>
    );
  }

}

export default HomePage;
