import React, { Component } from 'react';
import './WorksTwo.css';
import './common.css';

class WorksTwo extends Component {
  render() {
    return (
      <div className="WorksTwo">
     	<div className="works">
     		<div className="works_banner clear">
     			<div className="left">
     				<h4></h4>
     				<h2></h2>
     				<p></p>
     			</div>	
	        	<Carousel dots="false" arrows="true">
					<div><h3>1</h3></div>
					<div><h3>2</h3></div>
					<div><h3>3</h3></div>
					<div><h3>4</h3></div>
				</Carousel>
     		</div>
     	</div>
      </div>
    );
  }
}
export default WorksTwo;
