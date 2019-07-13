import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link, Redirect, NavLink, Switch
} from 'react-router-dom'

import Home from './components/home/Home'
import Category from './components/category/Category'
import Cart from './components/cart/Cart'
import User from './components/user/User'

import './App.css';
import * as icon from './images/img'
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
            <Route path="/" component={Home} />
          </Switch>
          {/* 使用 Switch 来选择固定的路径， 当为根路径的时候显示 index 路径下的东西 */}
        </div>
      </div>
    </Router>
  );
}

export default App;
