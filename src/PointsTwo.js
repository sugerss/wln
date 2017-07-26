import React, { Component } from 'react';
import './PointsTwo.css';
import './common.css';

class PointsTwo extends Component {
  render() {
    return (
      <div className="PointsTwo">
        <div className="wrap clear">
          <div className="views left">
            <div className="views_inner">
              <h4 className="views_date"></h4>
              <h4 className="views_title">奥美</h4>
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
export default PointsTwo;
