import React, { Component } from 'react';
import './History.css';//ogilvy-history-in-china-newspaper-advertsing.jpg
import timeline from './img/timeline-moment-icon.png';
import ogilvy from './img/ogilvy-history-in-china-newspaper-advertsing.jpg';
import China_Team from './img/1991_Ogilvy_China_Team.jpg';
import Ogilvy_PR from './img/Ogilvy-PR_1995-655x463.jpg';
import zone from './img/M-zone-太极-1.gif';
import ogallery from './img/ogallery_1.jpg';
import CDparticipants from './img/MG_3531-CDparticipants-655x437.jpg';



class History extends Component {
  render() {
    return (
      <div className="History wrap">
        <div className='history_title'>
        	<h2>奥美中国历史</h2>
        	<h3>二十多年的沧海桑田，中国发生了翻天覆地的变化，而奥美则见证了每一步的前进， 点滴的增长……</h3>
        </div>
        <div className='history_time_box'>
        	<div className='time_border'>
        		<div className='time_cir'></div>
        		<div className='time_cir'></div>
        	</div>
        	<div className='time_box clear'>
        		<div className='time_first left'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_left'>
        				<h2>1972</h2>
        				<h3>奥美成立香港办公室，为日后正式进驻中国市场进行前期运筹。</h3>
        			</div>
        		</div>
        		<div className='time_second right'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_right'>
        				<h2>1979</h2>
        				<h3 className='sixity'>随着改革开放的深入， 上海《文汇报》在1979年1月份的社论文章中宣布了商业广告的正式回归。奥美广告快速响应市场政策的变化，于同年3月15日投放了中国大陆地区的第一支作品——雷达表广告。</h3>
        				<img src={ogilvy}/>
        			</div>
        		</div>
        		<div className='time_first left'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_left'>
        				<h2>1985</h2>
        				<h3 className='sixity'>1985年，国泰建业与奥美共同创立了台湾奥美广告公司，台湾奥美由此诞生，成为台湾地区的首家4A广告公司。</h3>
        			</div>
        		</div>
        		<div className='time_first left'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_left'>
        				<h2>1991</h2>
        				<h3 className='sixity'>放眼中国市场， 宋秩铭（今天奥美大中华区董事长） 正式成立上海奥美，这是一支当时仅有20人的团队。我们最初的客户名单中包括联合利华、大众等跨国公司，至今， 我们仍然维系着与这些客户的合作关系。</h3>
        				<img src={China_Team}/>
        			</div>
        		</div>
        		<div className='time_second right'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_right'>
        				<h2>1992</h2>
        				<h3>奥美北京办公室正式成立，进一步彰显了扎根中国的决心。</h3>
        			</div>
        		</div>
        		<div className='time_second right'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_right'>
        				<h2>1993</h2>
        				<h3>奥美在华南地区的经济中心——广州开设了广州办公室。</h3>
        			</div>
        		</div>
        		<div className='time_first left fisrt_top'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_left'>
        				<h2>1995</h2>
        				<h3 className='sixity'>奥美将公关业务引入正处于起步阶段的中国市场。</h3>
        				<img src={Ogilvy_PR}/>
        			</div>
        		</div>
        		<div className='time_second right'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_right'>
        				<h2>1997</h2>
        				<h3 className='sixity'>奥美中国在华推出大众桑塔纳，这款车型很快红遍大江南北。当时的广告语“拥有桑塔纳，走遍天下都不怕”使用了近十年。</h3>
        				<img src={Ogilvy_PR}/>
        			</div>
        		</div>
        		<div className='time_first left fisrt_top'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_left'>
        				<h2>1999</h2>
        				<h3 className='sixity'>奥美互动在北京正式成立，2002年发展成为如今的OgilvyOne。成立后第一个客户——IBM至今仍维持合作伙伴关系。根据Forrester Research 2015年的研究报告，奥美互动现已发展成为中国领先数字营销代理商。</h3>
        			</div>
        		</div>
        		<div className='time_second right'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_right'>
        				<h2>2004</h2>
        				<h3 className='sixity'>为中国移动“动感地带”所做的数字营销战为奥美中国赢得了第一座戛纳国际创意节狮子奖杯。</h3>
        				<img src={zone}/>
        			</div>
        		</div>
        		<div className='time_first left'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_left'>
        				<h2>2005</h2>
        				<h3 className='sixity'>奥美不仅专注于品牌创意，还致力于为本土艺术家和不断增长的创意产业提供支持。为了展示办事处和城市周边的创意才能，北京奥美内部设立了首个永久艺术展“奥美零空间”，展览期间，墙上和公共空间陈列绘画、摄影、雕塑作品、前卫家居以及三维装置。</h3>
        				<img src={ogallery}/>
        			</div>
        		</div>
        		<div className='time_second right'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_right'>
        				<h2>2006</h2>
        				<h3 className='sixity'>奥美红坊诞生，关注以卓越的内容与创意来促进业务增长。如今，奥美红坊成为了<a href="">贺加斯奥美</a>。</h3>
        			</div>
        		</div>
        		<div className='time_first left'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_left'>
        				<h2>2006</h2>
        				<h3 className='sixity'>奥美中国并购了世纪华美，并成立<a href='#'>奥美世纪</a>，至今已经发展成为中国顶尖的数字媒体代理商。</h3>
        			</div>
        		</div>
        		<div className='time_second right'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_right'>
        				<h2>2008</h2>
        				<h3 className='sixity'>奥美中国收购达生，以进一步扩展其零售推广能力，现如今已发展成为中国规模最大的零售行销团队——<a href="">经纬行动</a>。</h3>
        			</div>
        		</div>
        		<div className='time_first left'>
        			<div className='time_circular'></div>
        			<div className='timeline timeline_left'>
        				<h2>2009</h2>
        				<h3 className='sixity'>奥美在中国推出面向本土青年人才的Portfolio Night——“这一夜，晒作品”，旨在鼓励青年创意人士追求自己的梦想和志向。</h3>
        				<img src={CDparticipants}/>
        			</div>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default History;
