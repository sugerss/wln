import React, { Component } from 'react';
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
                    <h4>
                      <a>奥美新闻</a> 
                    </h4>
                    <h5>奥美新闻</h5>
                    <p>奥美新闻</p>
                  </div>
                </div>
                <div className="news_date left">
                  <div>
                    <h4></h4> 
                    <div className="news_more">
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
export default Press;
