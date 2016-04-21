require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

export default class AppComponent extends React.Component {
  test() {
    return 'foo';
  }

  render() {
    return (
      <div className="index">
        <p>{this.test()}</p>
      </div>
    );
  }
}
