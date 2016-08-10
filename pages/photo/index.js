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
import Gallery from 'react-photo-gallery';
import { title, html } from './index.md';

class PhotoPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <div>
         Comming up soon...
         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </Layout>
    );
  }

}

export default PhotoPage;
