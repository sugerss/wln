import React, { Component } from 'react';
import './PointsTwo.css';
import './common.css';
import $ from 'jquery';
import conf from './Config';

class PointsTwo extends Component {
  constructor(){
    super();
    this.state={
      point_detail:[]
    }
  }
  componentDidMount(){
    var id = window.location.href.split('=')[1]
    $.ajax({
      url: conf.url+conf.port+'/point/points',
      data: {id:id},
      type: 'POST',
      success: function(e){
        console.log(e);
        this.setState({
          point_detail:e
        })
      }.bind(this)
    })
  }
  render() {
    return (
      <div className="PointsTwo">
        <div className="wrap clear">
          {this.state.point_detail.map(function(e){
             console.log(e.id)
            return <div className="views left">
              <div className="views_inner">
                <h4 className="views_date">{e.time}</h4>
                <h4 className="views_title">{e.title}</h4>
                <h5>{e.name}</h5>
                <p dangerouslySetInnerHTML={{__html:`${e.detail}`}}></p>
              </div>
            </div> 
          })}
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
        </div>  
      </div>
    );
  }
}
export default PointsTwo;
