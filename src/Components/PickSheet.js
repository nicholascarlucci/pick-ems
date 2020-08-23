/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PickMatchup from './PickMatchup';

export default class PickSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchups: [],
    };
  }

  render() {
    return (
      <div>
        <div id="pickSheetHeader">
          <div>
            <h2>Home</h2>
          </div>
          <div>
            <h2>Away</h2>
          </div>
        </div>
        <div>
          <PickMatchup />
          <PickMatchup />
          <PickMatchup />
          <PickMatchup />
        </div>
      </div>
    );
  }
}
