import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , HashRouter , Match , Route , Link ,IndexLink } from 'react-router-dom';
import $ from 'jquery';
import createHistory from 'history/createBrowserHistory';
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
                    <h4 className="views_date"></h4>
                    <h4 className="views_title">
                      <Link to="/pointsTwo">奥美</Link> 
                    </h4>
                    <h5>奥美</h5>
                    <p>奥美</p>
                  </div>
                </div>
                <div className="views_detail left">
                  <div>
                    <h4 className="views_date"></h4> 
                    <div className="views_more">
                      <a>
                        <button><Link to="/pointsTwo">继续阅读</Link></button>
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
