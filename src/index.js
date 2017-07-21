import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , HashRouter , Match , Route , Link ,IndexLink } from 'react-router-dom';
import $ from 'jquery';
import createHistory from 'history/createBrowserHistory';
import './common.css';
import Home from './Home';
import Works from './Works';
import Points from './Points';
import Servies from './Servies';
import Vision from './Vision';
import History from './History';
import Team from './Team';
import Press from './Press';
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
  show(){
    var header=document.querySelector('.header');
    var nav_phone=document.querySelector('.nav_phone');  
    if(nav_phone.style.display=='block'){
      nav_phone.style.display='none';
    }else{
      header.style.height='100%';
      nav_phone.style.display='block';
    }
  }
  render(){
    return (<Router>
    <div className='Container' onWheel={this.onscroll} onLoad={this.change}>
      <div className="fixed" onClick={this.handleClick}></div>
      <div className='header clear' id='header'>
        <a className='logo'><img src={logo_1}/><img src={logo_2}/></a>
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
      <div className='mobile_menu_button' onClick={this.show}><span></span></div>
      <div className='nav_phone'>
        <ul className='phone_list'>
          <li className='mobile_menu'><Link to="/">
            <span className='menu_word'>主页</span></Link>
          </li>
          <li className='mobile_menu'><a>
            <span className='menu_word'>作品</span>
            <ul className='sub_menu'>
              <li><Link to="/works">作品</Link></li>
              <li><Link to="/points">奥美观点</Link></li>
            </ul>
            <span className='mobile_arrow'>&gt;</span></a>
          </li>
          <li className='mobile_menu'><Link to="/servies"><span className='menu_word'>我们的服务</span></Link></li>
          <li className='mobile_menu'><a>
            <span className='menu_word'>关于奥美</span>
            <ul className='sub_menu'>
              <li><Link to="/vision">奥美愿景</Link></li>
              <li><Link to="/history">奥美中国历史</Link></li>
              <li><Link to="/team">我们的领导团队</Link></li>
            </ul>
            <span className='mobile_arrow'>&gt;</span></a>
          </li>
          <li className='mobile_menu'><a>
            <span className='menu_word'>奥美新闻</span>
            <ul className='sub_menu'>
              <li><Link to="/press">新闻稿</Link></li>
              <li><Link to="/live">奥美生活</Link></li>
            </ul>
            <span className='mobile_arrow'>&gt;</span></a>
          </li>
          <li className='mobile_menu'><Link to="/contant"><span className='menu_word'>联系我们</span></Link></li>
        </ul>
      </div>
      <div className='right header_inner'>
        <a className='search left'><img src={searchOne}/></a>
        <div className='select right'>
          <ul>
            <li>
              <a href="#">CN</a>
              <ul className='lang'>
                <li><a>EN</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      </div>   
      <Route exact path="/" component={Home}/>
      <Route path="/works" component={Works}/>
      <Route path="/points" component={Points}/>
      <Route path="/vision" component={Vision}/>
      <Route path="/servies" component={Servies}/>    
      <Route path="/history" component={History}/>
      <Route path="/team" component={Team}/>
      <Route path="/press" component={Press}/>
      <Route path="/live" component={Live}/>
      <Route path="/contant" component={Contant}/>
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
        <div className='Copyright_box clear'>
          <ul className='copy left'>
            <li><Link to="/">主页</Link></li>
            <li><Link to="/">全球奥美</Link></li>
            <li><Link to="/">WPP</Link></li>
            <li><Link to="/">隐私政策</Link></li>
          </ul>
          <p className='right copyright'>© Copyright Ogilvy China 2016</p>
        </div>
      </div>
    </div>
  </Router>);
  }
}

export default Better;
ReactDOM.render(<Better/>, document.getElementById('root'));
registerServiceWorker();