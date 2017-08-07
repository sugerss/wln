import React, { Component } from 'react';
import './PressTwo.css';
import './common.css';
import $ from 'jquery';
import conf from './Config';

class PressTwo extends Component {
  constructor(){
    super()
    this.state={
      presscon: []
    }
  }
  componentDidMount(){
    var id = window.location.href.split('=')[1]
    $.ajax({
      url: conf.url+conf.port+'/press/press',
      data: {id:id},
      type: 'POST',
      success: function(e){
        console.log(e);
        this.setState({
          presscon:e
        })
      }.bind(this)
  	})
  }	
  render() {
    return (
      <div className="PressTwo">
        <div className="wrap clear">
          {this.state.presscon.map(function(e){
          	return <div className="news left">
            <div className="news_inner">
              <h4 className="news_date">{e.time}</h4>
              <h4 className="news_title">{e.title}</h4>
              <h5>{e.sub_title}</h5>
              <p dangerouslySetInnerHTML={{__html:`${e.detail}`}}></p>
            </div>
          </div>
          })}
          {/*news end*/}
          <div className="more left">
            <div className="more_inner">
              <h3>WHAT’S POPULAR</h3>
              <ul>
                <li>
                  <a>范德萨发电风扇费大幅度发</a>
                </li>
              </ul>
            </div>
          </div> 
          {/*more end*/}   
        </div>
      </div>
    );
  }
}
export default PressTwo;
