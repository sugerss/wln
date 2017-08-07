import React, { Component } from 'react';
import './Live.css';
import { Carousel } from 'antd';
import $ from 'jquery';
import conf from './Config';
import poster from './img/GU3_9806.jpg'

class Live extends Component {
  constructor(){
  	super();
  	this.state={
  		life: [],
  		lifeone: [],
  		lifetwo: [],
  		lifethree: [],
  		lifefour: [],
  		lifefive: [],
  		lifesix: [],
  		lifeseven: [],
  		lifeeight:[],
  		lifevideo: []
  	}
  }
  componentDidMount(){
	$('.slick-prev').html("<a><</a>");
	$('.slick-next').html("<a>></a>");
	$.ajax({
		url: conf.url+conf.port+'/life/life',
		type: 'GET',
		success: function(e){
			console.log(e);
			this.setState({
				life:e
			})
		}.bind(this)
	})
	$.ajax({
		url: conf.url+conf.port+'/life/life_pic_one',
		type: 'GET',
		success: function(e){
			console.log(e);
			this.setState({
				lifeone:e
			})
		}.bind(this)
	})
	$.ajax({
		url: conf.url+conf.port+'/life/life_pic_two',
		type: 'GET',
		success: function(e){
			console.log(e);
			this.setState({
				lifetwo:e
			})
		}.bind(this)
	})
	$.ajax({
		url: conf.url+conf.port+'/life/life_pic_three',
		type: 'GET',
		success: function(e){
			console.log(e);
			this.setState({
				lifethree:e
			})
		}.bind(this)
	})
	$.ajax({
		url: conf.url+conf.port+'/life/life_pic_four',
		type: 'GET',
		success: function(e){
			console.log(e);
			this.setState({
				lifefour:e
			})
		}.bind(this)
	})
	$.ajax({
		url: conf.url+conf.port+'/life/life_pic_five',
		type: 'GET',
		success: function(e){
			console.log(e);
			this.setState({
				lifefive:e
			})
		}.bind(this)
	})
	$.ajax({
		url: conf.url+conf.port+'/life/life_pic_six',
		type: 'GET',
		success: function(e){
			console.log(e);
			this.setState({
				lifesix:e
			})
		}.bind(this)
	})
	$.ajax({
		url: conf.url+conf.port+'/life/life_pic_seven',
		type: 'GET',
		success: function(e){
			console.log(e);
			this.setState({
				lifeseven:e
			})
		}.bind(this)
	})
	$.ajax({
		url: conf.url+conf.port+'/life/life_pic_eight',
		type: 'GET',
		success: function(e){
			console.log(e);
			this.setState({
				lifeeight:e
			})
		}.bind(this)
	})
	$.ajax({
		url: conf.url+conf.port+'/life/get_video',
		type: 'GET',
		success: function(e){
			console.log(e);
			this.setState({
				lifevideo:e
			})
		}.bind(this)
	})
  }
  render() {
    return (
      <div className="Live">
        <div className='live_life clear'>
        	<div className='left live_box'>
        		{this.state.life.map(function(e,i){
        			if(i==0){
	        			return <div className='live_inner'>
	        				<h2>{e.title.split(' ')[0]}<br />{e.title.split(' ')[1]}</h2>
	        				<p>{e.passage}</p>
	        			</div>
        			}
        		})}
        	</div>
        	<Carousel dots="false" arrows="true" effect="fade">
        		{this.state.lifeone.map(function(e){
        			return <div><h3><img src={e.life_pic_one} alt=""/></h3></div>
        		})} 
				<div style={{display: 'none'}}><h3>1</h3></div>
			</Carousel>
        	<Carousel dots="false" arrows="true">
        		{this.state.lifetwo.map(function(e){
        			return <div><h3><img src={e.life_pic_two} alt=""/></h3></div>
        		})}
				<div style={{display: 'none'}}><h3>1</h3></div>
			</Carousel>
        </div>
    	{/*live_life end*/}
        <div className='live_banner_second clear'>
        	<Carousel dots="false" arrows="true">
				{this.state.lifethree.map(function(e){
        			return <div><h3><img src={e.life_pic_three} alt=""/></h3></div>
        		})}
				<div style={{display: 'none'}}><h3>1</h3></div>
			</Carousel>
			<Carousel dots="false" arrows="true">
				{this.state.lifefour.map(function(e){
        			return <div><h3><img src={e.life_pic_four} alt=""/></h3></div>
        		})}
				<div style={{display: 'none'}}><h3>1</h3></div>
			</Carousel>
        </div>
    	{/*live_banner_second end*/}
        <div className='live_banner_third clear'>
			<Carousel dots="false" arrows="true">
				{this.state.lifefive.map(function(e){
        			return <div><h3><img src={e.life_pic_five} alt=""/></h3></div>
        		})}
				<div style={{display: 'none'}}><h3>1</h3></div>
			</Carousel>
			<Carousel dots="false" arrows="true">
				{this.state.lifesix.map(function(e){
        			return <div><h3><img src={e.life_pic_six} alt=""/></h3></div>
        		})}
				<div style={{display: 'none'}}><h3>1</h3></div>
			</Carousel>
			<Carousel dots="false" arrows="true">
				{this.state.lifeseven.map(function(e){
        			return <div><h3><img src={e.life_pic_seven} alt=""/></h3></div>
        		})}
				<div style={{display: 'none'}}><h3>1</h3></div>
			</Carousel>
        </div>
    	{/*live_banner_third end*/}
        <div className='live_banner_four clear'>
        	<Carousel dots="false" arrows="true">
        		{this.state.lifeeight.map(function(e){
        			return <div><h3><img src={e.life_pic_eight} alt=""/></h3></div>
        		})}
				<div style={{display: 'none'}}><h3>1</h3></div>
			</Carousel>
        	<div className='right banner_right'>

        		{this.state.lifevideo.map(function(e,i){
        			if(i==0){
        				return <div className='video'>
        					<video src={e.video} preload="auto" controls poster={poster}></video>
        				</div> 
        			}
        		})}
        	</div>
        </div>
    	{/*live_banner_four end*/}
      </div>
    );
  }
}
export default Live;
