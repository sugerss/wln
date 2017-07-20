import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import gif from './img/downarrow4.gif';
class Home extends Component {
  componentDidMount(){

  }
  Service(){
    var service=document.querySelector('.service');
    var life=document.querySelector('.service');
    var services_wrap=document.querySelector('.services_wrap');
    var row_pad=document.querySelector('.row_pad');
    var row_padding=document.querySelector('.row_padding');
    var past_word=document.querySelector('.past_word');
    var life_word=document.querySelector('.life_word');
    if(document.body.scrollTop>=service.offsetTop-166){
      services_wrap.style.opacity='1';
      services_wrap.style.left='200px';   
      row_pad.style.opacity='1';
      row_pad.style.right='0';   
      row_padding.style.opacity='1';
      row_padding.style.right='0'; 
    }
    if(document.body.scrollTop>=life.offsetTop-100){
      past_word.style.opacity='1';
      past_word.style.left='0'; 
      life_word.style.opacity='1';
      life_word.style.right='0'; 
    }
  }
  render() {
    return (
      <div className="Home" ref='home' onWheel={this.Service}>
        <header>
        	<div className='full'>
        		<p>我们让</p>
        		<p>品牌变得有意义</p>
        		<img src={gif}/>
        	</div>{/*header_banner_text*/}
        </header>
        <div className='focus'>
        	<div className='lb'>
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
            </div>{/*poster_lunbo_img%text*/}
        	</div>
          <div className='dots'>
            <a className='dot'>
              <div className='dot_img'></div>
            </a>
          </div>{/*poster_lunbo_jiaodian*/}
        </div>
        <div className='service' id='service'>
          <div className='services left'>
            <a className='location'></a>          
            <div className='services_inner'>
            <div className='mask_bg'></div>
              <div className='services_wrap'>
                <a className='location'></a>
                <div className='services_text_title'></div>
                <div className='services_text_text'></div>
                <a className='btn_white'><span></span></a>
              </div>
            </div>
          </div>
          <div className='column right'>
            <div className='row row_1'>
              <div className='row_pad'>
                <div className='slick_track'>
                  <div className='slick_slide'>
                    <h3><a></a></h3>
                    <h4>cc</h4>
                    <h4>cc</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='row row_2'>
              <div className='row_padding'>
                <div className='row_inner'>
                  <div className='row_icon'>
                    <p></p>
                  </div>
                  <div className='row_introduce'>
                    <div className='slicklist'>
                      <div className='slick_slide'>
                        <h2><a>cc</a></h2>
                        <h4>cccc</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='life clear'>
          <div className='left past'>
            <div className='mask_bg'></div>
            <div className='past_word'>
              <h2></h2>
              <h4></h4>
              <a className='btn_black'><span></span></a>
            </div>
          </div>
          <div className='right life_go'>
            <div className='mask_bg'></div>
            <div className='life_word'>
              <h3></h3>
              <a className='btn_white'><span></span></a>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;