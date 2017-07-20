import React, { Component } from 'react';
import './Points.css';
import './common.css';

class Points extends Component {
  render() {
    return (
      <div className="points wrap">
        <div>
          <h3>奥美观点</h3>
          <div className="views">
            <ul>
              <li className="clear">
                <div className="views_text left">
                  <div>
                    <h4>
                      <a>奥美</a> 
                    </h4>
                    <h5>奥美</h5>
                    <p>奥美</p>
                  </div>
                </div>
                <div className="views_date left">
                  <div>
                    <h4></h4> 
                    <div className="views_more">
                      <a>
                        <button>继续阅读</button>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul> 
          </div>
        </div>
      </div>
    );
  }
}
export default Points;
