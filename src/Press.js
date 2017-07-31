import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , HashRouter , Match , Route , Link ,IndexLink } from 'react-router-dom';
import $ from 'jquery';
import createHistory from 'history/createBrowserHistory';
import './Press.css';
import './common.css';

class Press extends Component {
  render() {
    return (
      <div className="press">
        <div className="wrap">
          <h3>新闻稿</h3>
          <div className="news">
            <p>媒体咨询，敬请联系china.corpcomms@ogilvy.com</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <ul>
              <li className="clear">
                <div className="news_text left">
                  <div>
                    <h4 className="news_date"></h4>
                    <h4  className="news_title">
                      <Link to='/pressTwo'>奥美新闻</Link> 
                    </h4>
                    <h5>奥美新闻</h5>
                    <p>奥美新闻</p>
                  </div>
                </div>
                <div className="news_detail left">
                  <div>
                    <h4 className="views_date"></h4> 
                    <div className="news_more">
                      <a>
                        <button><Link to='/pressTwo'>继续阅读</Link></button>
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
export default Press;
