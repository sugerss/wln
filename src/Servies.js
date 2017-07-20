import React, { Component } from 'react';
import './Servies.css';
import './common.css';
import brand from './img/services_brand-strategy.gif';
import content from './img/services_content-marketing.gif';
import data from './img/services_data.gif';
import media from './img/services_digital-media.gif';
import ecom from './img/services_ecommerce.gif';
import events from './img/services_events.gif';
import innovat from './img/services_innovation-1.gif';
import perform from './img/services_performance-marketing.gif';
import journey from './img/services_personas-journey.gif';
import pr from './img/services_pr.gif';
import retail from './img/services_retail-activation.gif';
import social from './img/services_social.gif';

import ani_brand from './img/services_ani-brand-strategy.gif';
import ani_content from './img/services_ani-content.gif';
import ani_data from './img/services_ani-data.gif';
import ani_media from './img/services_ani-digital-media-1.gif';
import ani_ecom from './img/services_ani-ecommerce-2.gif';
import ani_events from './img/services_ani-events.gif';
import ani_innovat from './img/services_ani-innovation.gif';
import ani_perform from './img/services_ani-performance-marketing.gif';
import ani_journey from './img/services_ani-personas-journey.gif';
import ani_pr from './img/services_ani-pr.gif';
import ani_retail from './img/services_ani-retail-activation.gif';
import ani_social from './img/services_ani-social-marketing-1.gif';


class Servies extends Component {
  render() {
    return (
      <div className="servies">
        <ul className="clear">
          <li>
            <div className="servies_img">
              <div>
                <a>
                  <img className="active_image" src={brand} />
                  <img src={ani_brand} />
                </a>
              </div>
            </div>
            <div className="servies_title">
              <h3>
                <a>多撒多</a>
              </h3>
            </div>
          </li>
          <li>
            <div className="servies_img">
              <div>
                <a>
                  <img className="active_image" src={brand} />
                  <img src={ani_brand} />
                </a>
              </div>
            </div>
            <div className="servies_title">
              <h3>
                <a>多撒多</a>
              </h3>
            </div>
          </li>
          <li>
            <div className="servies_img">
              <div>
                <a>
                  <img className="active_image" src={brand} />
                  <img src={ani_brand} />
                </a>
              </div>
            </div>
            <div className="servies_title">
              <h3>
                <a>多撒多</a>
              </h3>
            </div>
          </li>
          <li>
            <div className="servies_img">
              <div>
                <a>
                  <img className="active_image" src={brand} />
                  <img src={ani_brand} />
                </a>
              </div>
            </div>
            <div className="servies_title">
              <h3>
                <a>多撒多</a>
              </h3>
            </div>
          </li>
          <li>
            <div className="servies_img">
              <div>
                <a>
                  <img className="active_image" src={brand} />
                  <img src={ani_brand} />
                </a>
              </div>
            </div>
            <div className="servies_title">
              <h3>
                <a>多撒多</a>
              </h3>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default Servies;
