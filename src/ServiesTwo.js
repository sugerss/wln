import React, { Component } from 'react';
import './ServiesTwo.css';
import './common.css';
import brand from './img/services_brand-strategy.gif';

class ServiesTwo extends Component {
  render() {
    return (
      <div className="serviesTwo">
        <div className="serve">
          <div className="serve_inner">
            <div className="serve_pro">
              <img className="active_image" src={brand}/>
              <h3></h3>
            </div>
            <p className="serve_intro"></p>
            <div className="serve_contact">
              <h4>联系方式</h4>
              <p></p>
              <p></p>
              <p>
                <a>cathycy.chang@ogilvy.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section_inner">
            <h2>相关作品</h2>
            <ul className="clear">
              <li>
                <div>
                  <img src="" alt="" />
                </div>
                <div className="section_con">
                  <h3></h3>
                  <p></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ServiesTwo;
