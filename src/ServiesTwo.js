import React, { Component } from 'react';
import './ServiesTwo.css';
import './common.css';
import $ from 'jquery';
import conf from './Config';

class ServiesTwo extends Component {
  constructor(){
    super();
    this.state={
      servicescon: []
    }
  }
  componentDidMount(){
    var id=window.location.href.split('=')[1];
    $.ajax({
      url: conf.url+conf.port+'/services/text',
      data: {id:id},
      type: 'POST',
      success:function(e){
        console.log(e);
        this.setState({
          servicescon:e
        })
      }.bind(this)
    })
  }
  render() {
    return (
      <div className="serviesTwo">
        {this.state.servicescon.map(function(e){
          return <div className="serve">
          <div className="serve_inner">
            <div className="serve_pro">
              <img className="active_image" src={e.services_small_pic} alt=""/>
              <h3>{e.services_vision}</h3>
            </div>
            <p className="serve_intro">{e.services_text}</p>
            <div className="serve_contact">
              <h4>联系方式</h4>
              <p>{e.services_admin}</p>
              <p>{e.services_work}</p>
              <p>
                <a>cathycy.chang@ogilvy.com</a>
              </p>
            </div>
          </div>
        </div>
        })}
        {/*servies_detail end*/}
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
