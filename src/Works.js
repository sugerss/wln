import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , HashRouter , Match , Route , Link ,IndexLink } from 'react-router-dom';
import $ from 'jquery';
import createHistory from 'history/createBrowserHistory';
import './Works.css';
import './common.css';
import video from './img/video.png';
import video2 from './img/video2.png';
import conf from './Config';

class Works extends Component {
  constructor(){
    super()
    this.state={
      works: []
    }
  }
  componentDidMount(){
    $.ajax({
      url:  conf.url+conf.port+'/work/text',
      type: 'GET',
      success: function(e){
        console.log(e);
        this.setState({
          works:e
        })
      }.bind(this)
    })
  }
  render() {
    return (
      <div className="works">
      	<ul className="clear">
        {this.state.works.map(function(e){
          return <li>
            <Link to={`/worksTwo?id=${e.id}`}>
              <div className="text">
                <p>{e.poster_company}</p>
                <h3>{e.poster_name}</h3>
                <p className="year">{e.year}</p>
                <div className="mask"></div>
                <div className="video">
                  <div className="circle">
                    <img className="video2" src={video2} alt=""/>
                    <img src={video} alt=""/>
                  </div>
                </div>
              </div>
            </Link>
          </li> 
        })}
    	{/*works li end*/}
      	</ul>
      </div>
    );
  }
}
export default Works;
