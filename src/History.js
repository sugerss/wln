import React, { Component } from 'react';
import './History.css';
import $ from 'jquery';
import conf from './Config';

class History extends Component {
  constructor(){
    super()
    this.state={
      historys:[]
    }
  }
  componentDidMount(){
    $.ajax({
      url: conf.url+conf.port+'/history/history',
      type: 'GET',
      success: function(e){
        console.log(e);
        this.setState({
          historys:e
        })
      }.bind(this)
    })
  }
  render(){
    return (
      <div className="History wrap">
        <div className='history_title'>
        	<h2>奥美中国历史</h2>
        	<h3>二十多年的沧海桑田，中国发生了翻天覆地的变化，而奥美则见证了每一步的前进， 点滴的增长……</h3>
        </div>
        <div className='history_time_box'>
        	<div className='time_border'>
        		<div className='time_cir'></div>
        		<div className='time_cir'></div>
        	</div>
        	<div className='time_box clear'>
                {this.state.historys.map(function(e,i){
                    if(e.fff=='left'){
                      return <div className='time_first left'>
                          <div className='time_circular'></div>
                          <div className='timeline timeline_left'>
                            <h2>{e.year}</h2>
                            {e.font=='true'?<h3 className="sixity">{e.text}</h3>:<h3>{e.text}</h3>} 
                            {e.img?<img src={e.img}/>:''}
                          </div>
                        </div>
                    }else{
                      return <div className='time_second right'>
                          <div className='time_circular'></div>
                          <div className='timeline timeline_right'>
                            <h2>{e.year}</h2>
                            {e.font=='true'?<h3 className="sixity">{e.text}</h3>:<h3>{e.text}</h3>} 
                            {e.img?(e.img.slice(-3)=='mp4'?<video controls preload="auto" src={e.img}></video>:<img src={e.img}/>):''}
                          </div>
                        </div>  
                    }
                })}
        	</div>
        </div>
      </div>
    );
  }
}

export default History;
