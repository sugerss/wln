import React, { Component } from 'react';
import './Live.css';
import { Carousel } from 'antd';
import $ from 'jquery';

class Live extends Component {
  componentDidMount(){
	$('.slick-prev').text("<");
	$('.slick-next').text(">");
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
        </div>
        <div className='live_banner_second clear'>
        	<Carousel dots="false" arrows="true">
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
        </div>
        <div className='live_banner_third clear'>
			<Carousel dots="false" arrows="true">
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
			<Carousel dots="false" arrows="true">
				<div><h3>1</h3></div>
				<div><h3>2</h3></div>
				<div><h3>3</h3></div>
				<div><h3>4</h3></div>
			</Carousel>
        </div>
        
        <div className='live_banner_second clear'>
        	<Carousel dots="false" arrows="true">
				<div><h3>1</h3></div>
				<div><h3>2</h3></div>
				<div><h3>3</h3></div>
				<div><h3>4</h3></div>
			</Carousel>
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
