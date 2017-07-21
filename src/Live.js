import React, { Component } from 'react';
import './Live.css';
import { Carousel } from 'antd';

class Live extends Component {
  componentDidMount(){

  }
  render() {
    return (
      <div className="Live">
        <div className='live_life clear'>
        	<div className='left live_box'>
        		<div className='live_inner'>
        			
        		</div>
        	</div>
        	<Carousel dots="false" arrows="true" effect="fade">
				<div><h3>1</h3></div>
				<div><h3>2</h3></div>
				<div><h3>3</h3></div>
				<div><h3>4</h3></div>
			</Carousel>
        	<Carousel dots="false" arrows="true">
				<div><h3>1</h3></div>
				<div><h3>2</h3></div>
				<div><h3>3</h3></div>
				<div><h3>4</h3></div>
			</Carousel>
        	<div className='left live_banner'>
        		<div className='banner_first'>
        			<a className='location'></a>
        			<ul className='slides'>
        				<li></li>
        			</ul>
		        	<div className='lbtn btn'>&lt;</div>
		        	<div className='rbtn btn'>&gt;</div>
        		</div>    		
        	</div>
        </div>
        <div className='live_banner_second clear'>
        	<div className='left banner_left'>
        		<a className='location'></a>
        		<ul className='focus'></ul>
        		<div className='lbtn btn'>&lt;</div>
        		<div className='rbtn btn'>&gt;</div>
        	</div>
        	<div className='right banner_left'>
        		<a className='location'></a>
        		<ul className='focus'></ul>
        		<div className='lbtn btn'>&lt;</div>
        		<div className='rbtn btn'>&gt;</div>
        	</div>
        </div>
        <div className='live_banner_third clear'>
        	<div className='left banner_one'>
        		<a className='location'></a>
        		<ul className='focus'></ul>
        		<div className='lbtn btn'>&lt;</div>
        		<div className='rbtn btn'>&gt;</div>
        	</div>
        	<div className='left banner_one'>
        		<a className='location'></a>
        		<ul className='focus'></ul>
        		<div className='lbtn btn'>&lt;</div>
        		<div className='rbtn btn'>&gt;</div>
        	</div>
        	<div className='right banner_one'>
        		<a className='location'></a>
        		<ul className='focus'></ul>
        		<div className='lbtn btn'>&lt;</div>
        		<div className='rbtn btn'>&gt;</div>
        	</div>
        </div>
        
        <div className='live_banner_second clear'>
        	<div className='left banner_left'>
        		<a className='location'></a>
        		<ul className='focus'></ul>
        		<div className='lbtn btn'>&lt;</div>
        		<div className='rbtn btn'>&gt;</div>
        	</div>
        	<div className='right banner_right'>
        		<a className='location'></a>
        		<ul className='focus'></ul>
        	</div>
        </div>
      </div>
    );
  }
}
export default Live;
