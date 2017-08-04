import React, { Component } from 'react';
import './Contant.css';


class Contant extends Component {
    componentDidMount(){
        var BMap = window.BMap
        var map = new BMap.Map("allmap",{minZoom:4,maxZoom:15}); 
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); 
        map.addControl(new BMap.MapTypeControl()); 
        map.setCurrentCity("北京"); 
        map.enableDragging();   
        map.enableScrollWheelZoom(true); 
        var json_data = [[116.404,39.915],[116.383752,39.91334],[116.384502,39.932241]];
        var pointArray = new Array();
        for(var i=0;i<json_data.length;i++){
            var marker = new BMap.Marker(new BMap.Point(json_data[i][0], json_data[i][1])); // 创建点
            map.addOverlay(marker);    //增加点
            pointArray[i] = new BMap.Point(json_data[i][0], json_data[i][1]);
            //marker.addEventListener("click",attribute);
        }
        //让所有点在视野范围内
        map.setViewport(pointArray);
        var add_bar=document.querySelectorAll('.add_bar');     
        for(var i=0;i<add_bar.length;i++){
            add_bar[i].index=i;
            add_bar[i].onclick=function(){
                    for(var j=0;j<add_bar.length;j++){
                        add_bar[j].children[0].style.color='#B0B1B1';
                        add_bar[j].children[0].children[0].children[0].style.cssText=`transform:rotate(0deg);borderTopColor:rgb(176, 177, 177);`;
                        add_bar[j].style.backgroundColor='#fff';
                        add_bar[j].children[1].style.cssText=`display:none;height:0;`;
                    }
                    add_bar[this.index].children[0].style.color='#fff';
                    add_bar[this.index].children[0].children[0].children[0].style.cssText=`transform:rotate(-180deg);borderTopColor:rgb(255, 255, 255);`;
                    add_bar[this.index].style.backgroundColor='#e2231a';
                    add_bar[this.index].children[1].style.cssText=`display:block;height:247px;`;
            }
        }
    }
    handclick(num){
        if(num==1){
            var add_bar=document.querySelectorAll('.add_bar')[0];                       
        }else if(num==2){
            var add_bar=document.querySelectorAll('.add_bar')[1];
        }else if(num==3){
            var add_bar=document.querySelectorAll('.add_bar')[2];
        }else if(num==4){
            var add_bar=document.querySelectorAll('.add_bar')[3];
        }else if(num==5){
            var add_bar=document.querySelectorAll('.add_bar')[4];
        }  
        var add_title=add_bar.querySelector('.add_title');
        var trigon=add_bar.querySelector('.trigon');      
        if(getComputedStyle(trigon)['borderTopColor']=='rgb(176, 177, 177)'){ 
            trigon.style.transform='rotate(-180deg)';
            trigon.style.borderTopColor='#fff';
            add_title.style.color='#fff';
            add_bar.style.backgroundColor='#E2231A';
            add_bar.children[1].style.display='block';
            add_bar.children[1].style.height='247px';            
        }else{
            trigon.style.transform='rotate(0deg)';
            trigon.style.borderTopColor='rgb(176, 177, 177)';
            add_title.style.color='#B0B1B1';
            add_bar.style.backgroundColor='#fff';
            add_bar.children[1].style.display='none';
            add_bar.children[1].style.height='0';
        }
        
    }
    render() {
    return (
      <div className="Contant clear">
        <div className='add_list left'>
        	<div className='add_bar' ref='one' onClick={this.handclick.bind(this,1)}>
        		<div className='add_title clear'>
        			<span className='add_button'>北京
        				<span className='trigon right'></span>
        			</span>
        		</div>
        		<div className='add_bar_more'>
        			<div className='address'>
        				<p>北京市东城区金宝街58号华丽大厦9楼<br/>9/F, Huali Building, 58 Jinbao Street,<br/>East City District, Beijing, China</p>
        				<p>+86 10 8520 6688</p>
        			</div>
        			<div className='map'>
        				<button><span>查看地图</span></button>
        			</div>
        		</div>
        	</div>
        	<div className='add_bar' onClick={this.handclick.bind(this,2)}>
        		<div className='add_title clear'>
        			<span className='add_button'>上海
        				<span className='trigon right'></span>
        			</span>
        		</div>
        		<div className='add_bar_more'>
        			<div className='address'>
        				<p>上海市静安区恒丰路399号达邦协作广场8楼<br/>8/F, WPP Campus, 399 Hengfeng Road,<br/>
Jing’an District, Shanghai, China</p>
        				<p>+86 21 2405 1888</p>
        			</div>
        			<div className='map'>
        				<button><span>查看地图</span></button>
        			</div>
        		</div>
        	</div>
        	<div className='add_bar' onClick={this.handclick.bind(this,3)}>
        		<div className='add_title clear'>
        			<span className='add_button'>广州
        				<span className='trigon right'></span>
        			</span>
        		</div>
        		<div className='add_bar_more'>
        			<div className='address'>
        				<p>广州市海珠区滨江东路191号，195号金海湾3楼<br/>3/F, 191,195 East Binjiang Road,<br/>
Haizhu District, Guangzhou, China</p>
        				<p>+86 20 8113 6288</p>
        			</div>
        			<div className='map'>
        				<button><span>查看地图</span></button>
        			</div>
        		</div>
        	</div>
        	<div className='add_bar' onClick={this.handclick.bind(this,4)}>
        		<div className='add_title clear'>
        			<span className='add_button'>南京
        				<span className='trigon right'></span>
        			</span>
        		</div>
        		<div className='add_bar_more'>
        			<div className='address'>
        				<p>江苏省南京市鼓楼区中山北路8号云峰大厦19层<br/>19/F Yunfeng Tower,<br/>
Gulou District, Nanjing</p>
        				<p>+86 25 5226 2349</p>
        			</div>
        			<div className='map'>
        				<button><span>查看地图</span></button>
        			</div>
        		</div>
        	</div>
        	<div className='add_bar' onClick={this.handclick.bind(this,5)}>
        		<div className='add_title clear'>
        			<span className='add_button'>厦门
        				<span className='trigon right'></span>
        			</span>
        		</div>
        		<div className='add_bar_more'>
        			<div className='address'>
        				<p>厦门市思明区鹭江道96号钻石海岸B栋33楼<br/>
33/F, Diamond Coast Building B,<br/>96 Lujiang Road,<br/>Siming District, Xiamen</p>
        				<p>+86 592 806 9696</p>
        			</div>
        			<div className='map'>
        				<button><span>查看地图</span></button>
        			</div>
        		</div>
        	</div>
        </div>
        <div id="allmap" className='left'></div>
      </div>
    );
  }
}
export default Contant;