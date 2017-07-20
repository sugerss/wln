import React, { Component } from 'react';
import './Live.css';

class Live extends Component {
  /*componentDidMount(){
  	var Focus=document.querySelector('.focus'),
		lb=Focus.querySelector('.lb'),
		li=lb.querySelectorAll('li');
		LBtn=Focus.querySelector('.LBtn'),
		RBtn=Focus.querySelector('.RBtn');

	var liW=parseInt(getComputedStyle(li[0]).width);

	var imgNum=0,//图片移动计数器	
		aniTime,//定时器
		lastNum=0,//图片每次移动距离计数器
		flag=true,//按钮时间开关
		dotNum=0;//焦点按钮计数器
		
	RBtn.onclick=function(){
		if(flag){
			flag=false;
			if(imgNum>=li.length-1){//限制图片范围
			lb.style.marginLeft='0px';//轮播初始化
			imgNum=0;//清零 若不清则一直大于5 图片相当于不动
		}
		animation(-30,liW);//图片移动
		if(dotNum>=dotLi.length-1){//限制焦点按钮范围
			dotNum=-1;	
		}
		noBg();//焦点按钮变为白色
		dotLi[dotNum+1].style.backgroundColor="yellow";//当前焦点按钮变为黄色
		imgNum++;//图片计数器自增1
		dotNum++;//焦点按钮计数器自增1
		}
	}

	LBtn.onclick=function(){
		if(flag){
			flag=false;
			if(imgNum<=0){
			lb.style.marginLeft=-parseInt(getComputedStyle(lb).width)+300+'px';
			imgNum=5;
		}
		animation(30,liW);
		if(dotNum<=0){
			dotNum=dotLi.length;	
		}
		noBg();//焦点按钮变为白色
		dotLi[dotNum-1].style.backgroundColor="yellow";//当前焦点按钮变为黄色
		imgNum--;
		dotNum--;
		}
	}

	//动画函数
	function animation(everyMove,liW){
		var moveNum=Math.abs(parseInt(liW/everyMove));
		
		aniTime=setInterval(function(){
			if(lastNum>=moveNum){
				clearInterval(aniTime);
				lastNum=0;
				flag=true;
				return//不加return则多出来30px
			}
			lb.style.marginLeft=parseInt(getComputedStyle(lb).marginLeft)+everyMove+'px'; 
			lastNum++;
		},24);
	}
		
	//自动播放
	var autoTime;
	function autoPlay(){
		autoTime=setInterval(function(){
		RBtn.onclick();
		},1000);
	}
	autoPlay();
	
	Focus.onmouseover=function(){
		clearInterval(autoTime);	
	}
		
	Focus.onmouseout=function(){
		autoPlay();	
	}
  }*/
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
        				<a className='location'></a>
        				<ul className='slides'>
        					<li></li>
        				</ul>
		        		<div className='lbtn btn'>&lt;</div>
		        		<div className='rbtn btn'>&gt;</div>
        			</div>
        		</div>     		
        	</div>
        	<div className='right live_banner'>
        		<div className='live_inner'>
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
