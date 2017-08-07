import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , HashRouter , Match , Route , Link ,IndexLink } from 'react-router-dom';
import $ from 'jquery';
import createHistory from 'history/createBrowserHistory';
import './Servies.css';
import './common.css';
import conf from './Config';

class Servies extends Component {
  constructor(){
    super();
    this.state={
      services: []
    }
  }
  componentDidMount(){
    $.ajax({
      url: conf.url+conf.port+'/services/text',
      type: 'GET',
      success:function(e){
        console.log(e);
        this.setState({
          services:e
        })
      }.bind(this)
    })
  }
  render() {
    return (
      <div className="servies">
        <ul className="clear">
          {this.state.services.map(function(e){
            return <li>
            <Link to={`/serviesTwo?id=${e.id}`}>
              <div className="servies_img">
                <div>
                  <img className="active_image" src={e.services_img} alt=""/>
                  <img src={e.services_gif} alt=""/>
                </div>  
              </div>
              <div className="servies_title">
                <h3>
                  <a>{e.services_vision}</a>
                </h3>
              </div>
            </Link>
          </li>
          })}
          {/*servies li end*/}
        </ul>
      </div>
    );
  }
}
export default Servies;
