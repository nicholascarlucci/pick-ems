/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PickMatchup from './PickMatchup';
import { useBlockLayout } from 'react-table';



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
        {/*this creates the monday night total score tiebreaker input box and submit button*/}
        <div className="tiebreaker">
          <div className="tiebreaker-box">
            <div 
              style={{
                width: '50px',
                height: '50px',
                float: 'left',
                display: useBlockLayout,
              }}
              >
                <form action="/submit-pick">
                  <input type="text" placeholder="Monday-Night-Tiebreaker"></input>
                </form>
            </div>
              <button className="tiebreaker-btn" type="submit">submit</button>
          </div>
        </div>
      </div>
      );
    };
  }

  const rootElement = document.getElementById("root");

