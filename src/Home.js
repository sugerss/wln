import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , HashRouter , Match , Route , Link ,IndexLink } from 'react-router-dom';
import './Home.css';
import gif from './img/downarrow4.gif';
import $ from 'jquery';
import { Carousel } from 'antd';
import image from "./img/wxin.png";
import conf from './Config';
import video from './img/ogilvy-advertising-reel-home.mp4';
import img1 from './img/VisitBritain-screenshot-2.jpg';
import img2 from './img/agoda-KV-1600500.jpeg';
import img3 from './img/Dove2.jpg';


class Home extends Component {
  constructor(){

  	super()
  	this.state={
  		arr:[],
      banner_video: [],
      banner_gif: [],
      services_bg: [],
      china_bg: [],
      sanya_img: [],
      sanya_bg: [],
      homebanner:[],
      url:''
  	}
  }	

    super()
    this.state={
     arr:[]
    }
  }

  componentDidMount(){
    var add='192.168.43.16';
    $('.slick-prev').html('<a><</a>');
    $('.slick-next').html('<a>></a>');
    $.ajax({

      url:conf.url+conf.port+'/home_text',
      type:'get',
      success:function(e){
        console.log(e)
        this.setState({arr:e});
      }.bind(this)
    })
    $.ajax({
      url:conf.url+conf.port+'/home_two',
      type:'get',
      success:function(e){
        console.log(e)
        this.setState({banner_video:e});
      }.bind(this)
    })
    $.ajax({
      url:conf.url+conf.port+'/home_three',
      type:'get',
      success:function(e){
        console.log(e)
        this.setState({banner_gif:e});
      }.bind(this)
    })
    $.ajax({
      url:conf.url+conf.port+'/home_four',
      type:'get',
      success:function(e){
        console.log(e);
      }.bind(this)
    })
    $.ajax({
      url:conf.url+conf.port+'/home_five',
      type:'get',
      success:function(e){
        console.log(e)
        this.setState({china_bg:e});
      }.bind(this)
    })
    $.ajax({
      url:conf.url+conf.port+'/home_six',
      type:'get',
      success:function(e){
        console.log(e)
        this.setState({sanya_img:e});
      }.bind(this)
    })
    $.ajax({
      url:conf.url+conf.port+'/home_seven',
      type:'get',
      success:function(e){
        console.log(e)
        this.setState({sanya_bg:e});
      }.bind(this)
    })
    $.ajax({
      url:conf.url+conf.port+'/home_banner',
      type:'get',
      success:function(e){
        console.log(e)
        this.setState({homebanner:e});
      }.bind(this)
    })
    $('video').attr('autoplay','autoplay');

    url:'http://'+add+':8005/home_text',
    type:'get',
    success:function(a){
      console.log(a)
      this.setState({arr:a});
    }.bind(this)
   })

  }
  Service(){
    var service=document.querySelector('.service');
    var ScrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var life=document.querySelector('.service');
    var services_wrap=document.querySelector('.services_wrap');
    var row_pad=document.querySelector('.row_pad');
    var row_padding=document.querySelector('.row_padding');
    var past_word=document.querySelector('.past_word');
    var life_word=document.querySelector('.life_word');
    if(ScrollTop>=service.offsetTop-166){
      services_wrap.style.opacity='1';
      services_wrap.style.right='0';   
      row_pad.style.opacity='1';
      row_pad.style.right='0';   
      row_padding.style.opacity='1';
      row_padding.style.right='0'; 
    }
    if(ScrollTop>=life.offsetTop-100){
      past_word.style.opacity='1';
      past_word.style.left='0'; 
      life_word.style.opacity='1';
      life_word.style.right='0'; 
    }

  }
  render() {
    return (
      <div className="Home" ref='home' onWheel={this.Service}>

        <div className="header_top">
          <video loop="loop" autoplay="autoplay" src={video}></video>
          {/*{this.state.banner_video.map(function(e){
                      return e.banner_video.slice(-3)=='mp4'?(<video loop="loop" preload="auto"><source src={e.banner_video} type="video/mp4"></source></video>):<img src={e.banner_video} />
                    })}*/}
          <header>
            <div className='full'>
              {this.state.arr.map(function(i){
                return (
                  <div>
                    <p>{i.banner_text.split(' ')[0]}</p>
                    <p>{i.banner_text.split(' ')[1]}</p>
                  </div>
                )
              })}
              {this.state.banner_gif.map(function(e){
                return <img src={e.banner_gif} />
              })}
            </div>{/*header_banner_text*/}
          </header> 
        </div>

        <header>
        	<div className='full'>
        		{this.state.arr.map(function(i){
              return <p>{i.banner_text}</p>
            })}
        		<img src={gif}/>
        	</div>{/*header_banner_text*/}
        </header>

        <div className='focus'>
          <Carousel autoplay>
            <div><h3><img src={img2} /></h3></div>
            <div><h3><img src={img1} /></h3></div>
            <div><h3><img src={img3} /></h3></div>
          </Carousel>
        	{/*<div className='lb'>
        		<div className='silder silder_one'>
              <a className='silder_location'></a>
              <div className='silder_mask'>
                <div className='silder_inner'>
                  <h4></h4>
                  <h2></h2>
                  <h6></h6>
                  <a className='btn_red'><span></span></a>
                </div>
              </div>
            </div>
        	</div>*/}{/*poster_lunbo_img%text*/}
          {/*<div className='dots'>
            <a className='dot'>
              <div className='dot_img'></div>
            </a>
          </div>*/}{/*poster_lunbo_jiaodian*/}
        </div>
        <div className='service' id='service'>
          <div className='services left'>        
            <div className='services_inner'>
            <div className='mask_bg'></div>
              <div className='services_wrap'>
                {this.state.arr.map(function(i){
                  return <div className='services_text_title'>{i.services_title}</div>
                })}
                {this.state.arr.map(function(i){
                  return <div className='services_text_text'>{i.services_text}</div>
                })}
                <a className='btn_white'><span><Link to='/servies' style={{color: '#000'}}>我们的服务</Link></span></a>
              </div>
            </div>
          </div>
          <div className='column right'>
            <div className='row row_1'>
              <div className='row_pad'>
                <Carousel dots="false" arrows="true">
                  {this.state.homebanner.map(function(e){
                    return <div>
                      <h2>{e.services_one_title}</h2>
                      <h4>{e.services_one_text}</h4>
                      <p>{e.services_one_time}</p>
                    </div>
                  })}
                  <div style={{display: 'none'}}><h3>1</h3></div>
                </Carousel>
              </div>
            </div>
            <div className='row row_2'>
              <div className='row_padding'>
                <div className="row_image">
                  <img alt="" src={image} />
                </div>
                <Carousel dots="false" autoplay arrows="true">
                  {this.state.homebanner.map(function(e){
                    return <div>
                      <h2>{e.services_two_title}</h2>
                      <p>{e.services_two_time}</p>
                    </div>
                  })}
                  <div style={{display: 'none'}}><h3>1</h3></div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className='life clear'>
          <div className='left past'>
            <div className='mask_bg'></div>
            <div className='past_word'>
              {this.state.arr.map(function(i){
                return <h2>{i.china_title}</h2>
              })}
              {this.state.arr.map(function(i){
                return <h4>{i.china_text}</h4>
              })}
              <a className='btn_black'><span><Link to='/history' style={{color: '#fff'}}>看我们历史</Link></span></a>
            </div>
          </div>
          <div className='right life_go'>
            <div className='mask_bg'></div>
            <div className='life_word'>
              {this.state.arr.map(function(i){
                return <h3>{i.sanya_title}</h3>
              })}
              {this.state.sanya_img.map(function(e){
                return <img src={e.sanya_img} />
              })}
              <a className='btn_white'><span><Link to='/live' style={{color: '#000'}}>奥美生活</Link></span></a>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;