import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , HashRouter , Match , Route , Link ,IndexLink } from 'react-router-dom';
import $ from 'jquery';
import Button from 'antd/lib/button'
import createHistory from 'history/createBrowserHistory';
import './common.css';
import Home from './Home';
import Works from './Works';
import WorksTwo from './WorksTwo';
import Points from './Points';
import PointsTwo from './PointsTwo';
import Servies from './Servies';
import ServiesTwo from './ServiesTwo';
import Vision from './Vision';
import History from './History';
import Team from './Team';
import Press from './Press';
import PressTwo from './PressTwo';
import Live from './Live';
import Contant from './Contant';
import './index.css';
import ewm from './img/QRcode_ogilvy_home.png';
import sxin from './img/sxin.png';
import logo_1 from './img/logo_ogilvy_sm_white.png';
import logo_2 from './img/logo_ogilvy_sm.png';
import searchOne from './img/search_1.png';
import searchTwo from './img/search_2.png';
import registerServiceWorker from './registerServiceWorker';



class Better extends Component {
  constructor(){
    super();
    this.state={
      
    }
  }  
  componentDidMount(){
    /*$.ajax({
      url:'http://localhost:8005/text',
      type:'get',
      success:function(opt){
        console.log(opt)
        this.setState({arr:opt});
      }.bind(this)
   })*/
    /*$('.mobile_menu').click(function(){
      var flag=true;
      if(flag){
        $('.mobile_menu').find($('.sub_menu')).slideDown();
        flag=false;
        $('.mobile_menu').find($('.sub_menu')).children().click(function(){
          flag=true;
          return false;
        })
      }else{
        $('.mobile_menu').find($('.sub_menu')).slideUp();
        flag=true;
      }

    })*/
    $('.mobile_menu_button').click(function(){
      $('.header').css('height','100%');
      if($(this).next().css('display')=='none'){
        $(this).next().slideDown(200).css('display','block');          
      }else{
        $(this).next().slideUp(200);
      }

    })
  }
  change(e){
    var header=document.querySelector('#header');
    var logo=document.querySelector('.logo');
    var a=header.querySelectorAll('li>a');
    if(window.location.href!='http://localhost:3000/'){
      logo.children[0].src=logo_2;
      for(var i=0;i<a.length;i++){
        a[i].style.color='#000';
        a[i].style.fontSize='15px';
      }
    }
  }
  onscroll(e){
    var header=document.querySelector('#header');
    var logo=document.querySelector('.logo');
    var fixed=document.querySelector('.fixed');
    var a=header.querySelectorAll('li>a');
    var service=document.querySelector('#service');
    var Scroll=document.body.scrollTop||document.documentElement.scrollTop;
    if(window.location.href=='http://localhost:3000/'){
      logo.children[0].src=logo_1;
      if(window.innerWidth>1000){
        if(Scroll>100){
          header.style.height=0;
          logo.children[0].style.cssText='height:50px; width:50%; margin-top:12px;';
          if(Scroll>400){
            header.style.cssText=`background:#fff; height:66px; position:fixed;top:0; z-index:100; transition:0.2s;`;
            for(var i=0;i<a.length;i++){
              a[i].style.color='#000';
            }
            logo.children[0].src=logo_2;
            logo.children[0].style.cssText='height:50px; width:50%; margin-top:12px;';
          }else if(Scroll<400){
            header.className='header';
            for(var i=0;i<a.length;i++){
              a[i].style.color='#fff';
            }
            logo.children[0].src=logo_1;
            logo.children[0].style.cssText='width:122px; margin-top:0;';
          }   
        } 
      }
    }else{
      logo.children[0].src=logo_2;
        if(Scroll>400){
          header.style.cssText=`background:#fff; height:66px; position:fixed;top:0; z-index:100; transition:0.3s;`;
          logo.children[0].style.cssText='height:50px; width:50%; margin-top:12px;';
        }else if(Scroll<400){
          header.style.cssText=`position:static;height:90px;`;
          logo.children[0].style.cssText='width:122px; margin-top:0;';     
        }   
    }

    if(Scroll>document.documentElement.clientHeight){
      fixed.style.opacity=1;
    }
    else{
      fixed.style.opacity=0;
    }
  }
  handleClick(){
    var fixed=document.querySelector('.fixed');
    var Scroll=document.body.scrollTop||document.documentElement.scrollTop;
    var t=null;
    clearInterval(t);
    t=setInterval(function(){
      if(Scroll<=0){
        clearInterval(t);
        document.body.scrollTop=document.documentElement.scrollTop=0;
      }
      if(Scroll<=document.documentElement.clientHeight){
         fixed.style.opacity=0; 
      }
      Scroll-=30;
      document.body.scrollTop=document.documentElement.scrollTop=Scroll;
    },10);
  }
  render(){
    return (<Router>
    <div className='Container' onWheel={this.onscroll} onLoad={this.change}>
      <div className="fixed" onClick={this.handleClick}></div>
      <div className='header clear' id='header'>
        <a className='logo'><img src={logo_1} alt=""/><img src={logo_2} alt=""/></a>
        <ul className='nav left'>      
          <li><Link to="/">主页</Link></li>
          <li>
            <a href='javascript:;'>作品</a>
            <div className='nav_list'>
              <p><Link to="/works">作品</Link></p>
              <p><Link to="/points">奥美观点</Link></p>
            </div>
          </li>
          <li><Link to="/servies">我们的服务</Link></li>
          <li><a href='javascript:;'>关于奥美</a>
            <div className='nav_list'>
              <p><Link to="/vision">奥美愿景</Link></p>
              <p><Link to="/history">奥美中国历史</Link></p>
              <p><Link to="/team">我们的领导团队</Link></p>
            </div>
          </li>
          <li>
            <a href='javascript:;'>奥美新闻</a>
            <div className='nav_list'>
              <p><Link to="/press">新闻稿</Link></p>
              <p><Link to="/live">奥美生活</Link></p>
            </div>
          </li>
          <li><Link to="/contant">联系我们</Link></li>
        </ul>
        {/*header pc end*/}
      <div className='mobile_menu_button'><span></span></div>
      <div className='nav_phone'>
        <ul className='phone_list'>
          <li className='mobile_menu'><Link to="/">
            <span className='menu_word'>主页</span></Link>
          </li>
          <li className='mobile_menu'><a>
            <span className='menu_word'>作品</span>
            <div className='sub_menu'>
              <p><Link to="/works">作品</Link></p>
              <p><Link to="/points">奥美观点</Link></p>
            </div>
            <span className='mobile_arrow'>&gt;</span></a>
          </li>
          <li className='mobile_menu'>
          <Link to="/servies"><span className='menu_word'>我们的服务</span>
          </Link></li>
          <li className='mobile_menu'><a>
            <span className='menu_word'>关于奥美</span>
            <div className='sub_menu'>
              <p><Link to="/vision">奥美愿景</Link></p>
              <p><Link to="/history">奥美中国历史</Link></p>
              <p><Link to="/team">我们的领导团队</Link></p>
            </div>
            <span className='mobile_arrow'>&gt;</span></a>
          </li>
          <li className='mobile_menu'><a>
            <span className='menu_word'>奥美新闻</span>
            <div className='sub_menu'>
              <p><Link to="/press">新闻稿</Link></p>
              <p><Link to="/live">奥美生活</Link></p>
            </div>
            <span className='mobile_arrow'>&gt;</span></a>
          </li>
          <li className='mobile_menu'><Link to="/contant"><span className='menu_word'>联系我们</span></Link></li>
        </ul>
      </div>
      {/*header ipone end*/}
      </div>   
      <Route exact path="/" component={Home}/>
      <Route path="/works" component={Works}/>
      <Route path="/worksTwo" component={WorksTwo}/>
      <Route path="/points" component={Points}/>
      <Route path="/pointsTwo" component={PointsTwo}/>
      <Route path="/vision" component={Vision}/>
      <Route path="/servies" component={Servies}/> 
      <Route path="/serviesTwo" component={ServiesTwo}/>   
      <Route path="/history" component={History}/>
      <Route path="/team" component={Team}/>
      <Route path="/press" component={Press}/>
      <Route path="/pressTwo" component={PressTwo}/>
      <Route path="/live" component={Live}/>
      <Route path="/contant" component={Contant}/>
      {/*路由组件*/}
      <div className='footer_box'>
        <div className='foot_box wrap clear'>
          <div className='left needlist'>
            <p>需要什么帮忙</p>
            <p className='clear'><a>查看我们的作品</a><span></span></p>
            <p className='clear'><a>联系我们</a><span></span></p>
            <p className='clear'><a>查看我们的业务</a><span></span></p>
            <p className='clear'><a>加入我们</a><span></span></p>
          </div>
          <div className='right about_our'>
            <p>关注我们</p><br/>
            <img src={ewm} alt=""/>
            <img className="sxin" src={sxin} alt=""/>
          </div>
        </div>
        {/*footer a end*/}
        <div className='Copyright_box clear'>
          <ul className='copy left'>
            <li><Link to="/">主页</Link></li>
            <li><Link to="/">全球奥美</Link></li>
            <li><Link to="/">WPP</Link></li>
            <li><Link to="/">隐私政策</Link></li>
          </ul>
          <p className='right copyright'>© Copyright Ogilvy China 2016</p>
        </div>
        {/*footer copyright end*/}
      </div>
    </div>
  </Router>);
  }
}

export default Better;
ReactDOM.render(<Better/>, document.getElementById('root'));
registerServiceWorker();