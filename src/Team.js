import React, { Component } from 'react';
import './Team.css';
import $ from 'jquery';
import conf from './Config';

class Team extends Component {
  constructor(){
    super();
    this.state={
      team:[]
    }
  }
  componentDidMount(){
    $.ajax({
      url:  conf.url+conf.port+'/team/team',
      type: 'GET',
      success:function(e){
        console.log(e);
        this.setState({
          team:e
        })
      }.bind(this)
    })
  }
  render() {
    return (
      <div className="Team">
      	<div className='show_team'></div>
        <ul className='team_list clear'>
            {this.state.team.map(function(e,i){
                if(i<3){
                  return <li className="team_first">
                      <div className='team_mask'></div>
                      <img src={e.img} alt=""/>
                      <h3>{e.name}</h3>
                      <h2>{e.job_one}</h2>
                      <h2>{e.job_two}</h2>
                      <div className='team_add'></div>
                  </li> 
                }else{
                  return <li>
                      <div className='team_mask'></div>
                      <img src={e.img} alt=""/>
                      <h3>{e.name}</h3>
                      <h2>{e.job_one}</h2>
                      <h2>{e.job_two}</h2>
                      <div className='team_add'></div>
                  </li>
                }
            })}
            {/*team_list end*/}
        </ul>
      </div>
    );
  }
}

export default Team;
