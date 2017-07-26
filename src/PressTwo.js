import React, { Component } from 'react';
import './PressTwo.css';
import './common.css';

class PressTwo extends Component {
  render() {
    return (
      <div className="PressTwo">
        <div className="wrap clear">
          <div className="news left">
            <div className="news_inner">
              <h4 className="news_date"></h4>
              <h4 className="news_title">奥美</h4>
              <h5>奥美</h5>
              <p>奥美</p>
            </div>
          </div>
          <div className="more left">
            <div className="more_inner">
              <h3>WHAT’S POPULAR</h3>
              <ul>
                <li>
                  <a>范德萨发电风扇费大幅度发</a>
                </li>
              </ul>
            </div>
          </div>    
        </div>
      </div>
    );
  }
}
export default PressTwo;
