import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , HashRouter , Match , Route , Link ,IndexLink } from 'react-router-dom';
import $ from 'jquery';
import createHistory from 'history/createBrowserHistory';
import './Points.css';
import './common.css';
import conf from './Config';

class Points extends Component {
  constructor(){
    super()
    this.state={
      points: []
    }
  }
  componentDidMount(){
    $.ajax({
      url: conf.url+conf.port+'/point/points',
      type: 'GET',
      success: function(e){
        console.log(e);
        this.setState({
          points:e
        })
      }.bind(this)
    })
  }
  render() {
    return (
      <div className="points wrap">
        <div>
          <h3>奥美观点</h3>
          <div className="views">
            <ul>
            {this.state.points.map(function(e){
              return <li className="clear">
                <div className="views_text left">
                  <div>
                    <h4 className="views_date">{e.time}</h4>
                    <h4 className="views_title">
                      <Link to={`/pointsTwo?id=${e.id}`}>{e.title}</Link> 
                    </h4>
                    <h5>{e.name}</h5>
                    <p>{e.text}</p>
                  </div>
                </div>
                {/*views_text end*/}
                <div className="views_detail left">
                  <div>
                    <h4 className="views_date">{e.time}</h4> 
                    <div className="views_more clear">
                      <a>
                        <button><Link to={`/pointsTwo?id=${e.id}`}>继续阅读</Link></button>
                      </a>
                    </div>
                  </div>
                </div>
                {/*views_detail end*/}
              </li>
            })}
            </ul> 
          </div>
        </div>
      </div>
    );
  }
}
export default Points;
