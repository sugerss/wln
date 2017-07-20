import React, { Component } from 'react';
import './Works.css';
import './common.css';
import video from './img/video.png';
import video2 from './img/video2.png';

class Works extends Component {
  render() {
    return (
      <div className="works">
      	<ul className="clear">
      		<li>
      			<div className="text">
      				<p>发发呆</p>
      				<h3>范德萨</h3>
      				<p className="year">2015</p>
      				<div className="mask"></div>
					<div className="video">
						<div className="circle">
							<img className="video2" src={video2} />
							<img src={video} />
						</div>
					</div>
      			</div>
      		</li>
      		<li>
      			<div className="text">
      				<p></p>
      				<h3></h3>
      				<p className="year"></p>
      				<div className="mask"></div>
					<div className="video">
						<div className="circle">
							<img className="video2" src={video2} />
							<img src={video} />
						</div>
					</div>
      			</div>
      		</li>
      		<li>
      			<div className="text">
      				<p></p>
      				<h3></h3>
      				<p className="year"></p>
      				<div className="mask"></div>
					<div className="video">
						<div className="circle">
							<img className="video2" src={video2} />
							<img src={video} />
						</div>
					</div>
      			</div>
      		</li>
      	</ul>
      </div>
    );
  }
}
export default Works;
