import React, { Component } from 'react';
import './Live.css';

class Live extends Component {
  render() {
    return (
      <div className="Live">
        <div className='live_life clear'>
        	<div className='left live_box'>
        		<div className='live_inner'>

        		</div>
        	</div>
        	<div className='right live_banner'>
        		<div className='live_inner'>
        			<div className='banner_first'>
        				<ul className='slides'>
        					<li><a className='location'></a></li>
        				</ul>
        			</div>
        			<div className='banner_second'></div>
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
        		<ul className='focus_three'></ul>
        		<div className='lbtn btn'>&lt;</div>
        		<div className='rbtn btn'>&gt;</div>
        	</div>
        	<div className='left banner_one'>
        		<a className='location'></a>
        		<ul className='focus_three'></ul>
        		<div className='lbtn btn'>&lt;</div>
        		<div className='rbtn btn'>&gt;</div>
        	</div>
        	<div className='left banner_one'>
        		<a className='location'></a>
        		<ul className='focus_three'></ul>
        		<div className='lbtn btn'>&lt;</div>
        		<div className='rbtn btn'>&gt;</div>
        	</div>
        </div>
        <div className='live_banner_second clear'>
        	<div className='left banner_left'></div>
        	<div className='right'></div>
        </div>
      </div>
    );
  }
}
export default Live;
