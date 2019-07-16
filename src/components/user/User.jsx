import React, { Component } from 'react';

import '../../base.styl'
import './User.styl'
class User extends Component {
    state = {}
    render() {
        return (
            <div className="User">
                <div className="head">
                    个人中心
                </div>
                <div className="user-content">
                    <div className="user-content-head">
                        <div className="avatar">
                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg" alt="" />

                        </div>
                        <p className="login-up">登录注册</p>
                        <div className="arrow">></div>
                    </div>
                    <ul className="user-content-container">
                        <li className="user-content-list">
                            <div className="list-img one">
                                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3148303323,831087728&fm=27&gp=0.jpg" alt="" />
                            </div>
                            <div className="list-text">全部订单</div>
                        </li>
                        <li className="user-content-list">
                            <div className="list-img two">
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=213312306,3162915871&fm=27&gp=0.jpg" alt="" />
                            </div>
                            <div className="list-text">待付款</div>
                        </li>
                        <li className="user-content-list">
                            <div className="list-img three">
                                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1735947112,2880697954&fm=27&gp=0.jpg" alt="" />
                            </div>
                            <div className="list-text">待收货</div>
                        </li>
                        <li className="user-content-list">
                            <div className="list-img four">
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3538336203,4046400367&fm=27&gp=0.jpg" alt="" />
                            </div>
                            <div className="list-text">售后</div>
                        </li>
                    </ul>
                    <ul className="menu">
                        <li className="menu-list">
                            <div className="text">地址管理</div>
                            <div className="arrow">></div>
                        </li>
                        <li className="menu-list">
                            <div className="text">我的优惠券</div>
                            <div className="arrow">></div>
                        </li>
                        <li className="menu-list">
                            <div className="text">优先购买</div>
                            <div className="arrow">></div>
                        </li>
                        <li className="menu-list">
                            <div className="text">提货兑换卡</div>
                            <div className="arrow">></div>
                        </li>
                    </ul>
                    <ul className="menu">
                        <li className="menu-list">
                            <div className="text">常见问题</div>
                            <div className="arrow">></div>
                        </li>
                        <li className="menu-list">
                            <div className="text">服务支持</div>
                            <div className="arrow">></div>
                        </li>
                    </ul>
                    <ul className="menu">
                        <li className="menu-list">
                            <div className="text">意外碎屏保险服务</div>
                            <div className="arrow">></div>
                        </li>
                        <li className="menu-list">
                            <div className="text">延长保修服务</div>
                            <div className="arrow">></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default User