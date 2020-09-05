// import React, {Component} from 'react'

// class Index extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( <div>vvvv</div> );
//     }
// }
 
// export default Index;
import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link, Redirect, NavLink, Switch
} from 'react-router-dom'

import Home from '../home/Home'
import Category from '../category/Category'
import Cart from '../cart/Cart'
import User from '../user/User'
import Search from '../search/Search'
// import  Login from './components/login/Login'
import Login from '../login/Login'
// import Index from './components/index/Index'
import Menu from '../menu/Menu'
// import Search from '../search/Search'
import Address from '../address/address'
import AddAdress from '../addAdress/addAdress'


import './Index.styl';
import * as icon from '../../images/img'
// 使用 NavLink 来实现页面跳转， link 也可以实现

function App() {
  return (
    <Router>
      <div className="app">
        
        <div className="shop-tab">
          <div className="tab-item">
            <NavLink className="nav-link" to="/index">
              <img src={icon.shouYe} alt="" />
              <div>首页</div>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/category">
              <img src={icon.fenLei} alt="" />
              <div>分类</div>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/cart">
              <img src={icon.gouWuChe} alt="" />
              <div>购物车</div>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/user">
              <img src={icon.geRen} alt="" />
              <div>个人中心</div>
            </NavLink>
          </div>
        </div>
        <div className="shop-view">
          {/* 路由 */}
          <Switch>
            <Route path="/index" component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/cart" component={Cart} />
            <Route path="/user" component={User} />
            {/* <Route path='/index' component={Index} /> */}
            {/* <Route exact path="/login" component={Login} /> */}
            <Route path = '/Menu' component={Menu} />
            <Route path = '/Search' component={Search} />
            <Route path = '/Address' component={Address} />
            <Route path = '/AddAdress' component={AddAdress} />
            
            {/* <Route path = '/login' component={Login} /> */}
          </Switch>
          {/* 使用 Switch 来选择固定的路径， 当为根路径的时候显示 index 路径下的东西 */}
          {/* <Redirect from="/" to="/login" /> */}

        </div>
      </div>
    </Router>
  );
}

export default App;
