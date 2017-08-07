import React, { Component } from 'react';
import { Carousel } from 'antd';
import './WorksTwo.css';
import './common.css';
import $ from 'jquery';
import conf from './Config';

class WorksTwo extends Component {
  constructor(){
    super();
    this.state={
        workscon:[]
    }
  }
  componentDidMount(){
  	var id=window.location.href.split('=')[1];
    $('.slick-prev').html("<a><</a>");
    $('.slick-next').html("<a>></a>");
    $.ajax({
      url: conf.url+conf.port+'/work/text',
      data:{id:id},
      type: 'POST',
      success: function(e){
        console.log(e);
        this.setState({
          workscon:e
        })
      }.bind(this)
    })
  }   
  render() {
    return (
      <div className="WorksTwo">
     	<div className="works">
     		<div className="works_banner clear">
     			{this.state.workscon.map(function(e){
     				return <div className="left works_con">
	     				<h4>{e.poster_company}</h4>
	     				<h2>{e.poster_name}</h2>
	     				<p>{e.year}</p>
	     			</div>
     			})}
		        <Carousel dots="false" arrows="true">
		          <div>
                    <video></video>
                  </div>
		          <div><img/></div>
		          <div><h3>3</h3></div>
		          <div><h3>4</h3></div>
		        </Carousel>
     		</div>
     		{/*works_banner end*/}
     	</div>
     	<div className="works_article">
     		<div className="clear section_inner">
     			<div className="works_text left">
     				<div className="works_text_inner"></div>
     			</div>
     			<div className="works_image left"></div>
     		</div>
     	</div>
     	{/*works_article end*/}

     	{this.state.workscon.map(function(e){
     		if(e.work_say!=null){
	     		return <div className="works_person">
		     		<div className="section_inner clear">
		     			<div className="left works_person_intro">
		     				<div className="works_person_intro_inner">
			     				<img src={e.work_img} alt="" />
			     				<h3>{e.work_about.split('  ')[0]}</h3>
			     				<h4>{e.work_about.split('  ')[1]}</h4>
		     				</div>
		     			</div>
		     			<div className="left works_person_saying">
		     				<div className="works_person_saying_inner">
		     					<h4>{e.work_say}</h4>
		     				</div>
		     			</div>
		     		</div>
		     	</div>	
     		}
     	})}
     	{/*works_person end*/}

     	{/*{this.state.workscon.map(function(e){
     		if(e.prize_img!=null){
	     		return <div className="works_pro">
		     		<div className="section_inner">
		     			<ul className="clear">
		     				<li>
		     					<div className='li_inner'>
		     						<img src={e.prize_img.split('  ')[0]} alt="" />
		     						<h3>{e.prize_text.split(' ')[0]}</h3>
		     						<h4>{e.prize_text_two.split('  ')[0]}</h4>
		     						<h5>{e.prize_time.split('  ')[0]}</h5>
		     					</div>
		     				</li>
		     				<li>
		     					<div className='li_inner'>
		     						<img src={e.prize_img.split('  ')[1]} alt="" />
		     						<h3>{e.prize_text.split(' ')[1]}</h3>
		     						<h4>{e.prize_text_two.split('  ')[1]}</h4>
		     						<h5>{e.prize_time.split('  ')[1]}</h5>
		     					</div>
		     				</li>
		     				<li>
		     					<div className='li_inner'>
		     						<img src={e.prize_img.split('  ')[2]} alt="" />
		     						<h3>{e.prize_text.split(' ')[2]}</h3>
		     						<h4>{e.prize_text_two.split('  ')[2]}</h4>
		     						<h5>{e.prize_time.split('  ')[2]}</h5>
		     					</div>
		     				</li>
		     			</ul>
		     		</div>
		     	</div>
     		}
     	})}
*/}
     	
      </div>
    );
  }
}
export default WorksTwo;
