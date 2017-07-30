import React, { Component } from 'react';
import './WorksTwo.css';
import './common.css';

class WorksTwo extends Component {
  render() {
    return (
      <div className="WorksTwo">

     	<div className="works">
     		<div className="works_banner clear">
     			<div className="left works_con">
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

     	<div className="works_article">
     		<div className="clear section_inner">
     			<div className="works_text left">
     				<div className-"works_text_inner"></div>
     			</div>
     			<div className="works_image left"></div>
     		</div>
     	</div>

     	<div className="works_person">
     		<div className="section_inner clear">
     			<div className="left works_person_intro">
     				<div className="works_person_intro_inner">
	     				<img src="" alt="" />
	     				<h3></h3>
	     				<h4></h4>
     				</div>
     			</div>
     			<div className="left works_person_saying">
     				<div className="works_person_saying_inner">
     					<h4></h4>
     				</div>
     			</div>
     		</div>
     	</div>

     	<div className="works_pro">
     		<div className="section_inner">
     			<ul className="clear">
     				<li>
     					<div className='li_inner'>
     						<img src="" alt="" />
     						<h3></h3>
     						<h4></h4>
     						<h5></h5>
     					</div>
     				</li>
     			</ul>
     		</div>
     	</div>

      </div>
    );
  }
}
export default WorksTwo;
