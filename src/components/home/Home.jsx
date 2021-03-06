import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'



import * as api from '../../api/api'
import { get } from '../../api/axios'
import Search from '../search/Search'
import Menu from '../menu/Menu'
import HotGood from '../hotGood/HotGood'

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
// import 'swiper/dist/css/swiper.min.css'
import '../../base.styl'
import './Home.styl'

import * as otherGood from '../../content/otherGood.json'
import * as hotGood from '../../content/goodList.json'
 
import {message, Button} from 'antd'

class User extends Component {
    constructor(props) {
        super(props);
        this.goToSearch = this.goToSearch.bind(this)
        this.goToMenu = this.goToMenu.bind(this)
    }
    state = {
        goodsList: [],
        cpList: [],
        chxList: [],
        gfpjList: [],
        phoneList: []
    }
    renderGoods() {
        const { goodsList = [] } = this.state
        const { match } = this.props;
        return goodsList.map((item, index) => {
            return (
                <div className="good" key={index} onClick={this.handleToGoodDetail(`${match.url}/${item.id}`, index)}>
                    <div className="good-msg">
                        <div className="img-good">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="text-good">
                            <h4 className="good-name">{item.name}</h4>
                            <p className="good-desc">{item.desc}</p>
                            <p className="good-price">{item.price}</p>
                        </div>
                    </div>

                </div>
            )
        })
    }
    handleToGoodDetail(url) {
        console.log(url)
        return () => {
            this.props.history.push({
                pathname: url
            })
        }
    }
    renderCp() {
        const { cpList = [] } = this.state
        const { match } = this.props;
        return cpList.map((item, index) => {
            return (
                <div className="cp-content" key={index} onClick={this.handleToGoodDetail(`${match.url}/${item.id}`, index)} >
                    <div className="cp-msg">
                        <div className="cp-img">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="cp-text">
                            <h5 className="cp-name">{item.name}</h5>
                            <p className="cp-desc">{item.desc}</p>
                            <p className="cp-price">{item.price}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    renderChx() {
        const { chxList = [] } = this.state;
        const { match } = this.props;
        return chxList.map((item, index) => {
            return (
                <div className="chx-content" key={index} onClick={this.handleToGoodDetail(`${match.url}/${item.id}`, index)} >
                    <div className="chx-msg">
                        <div className="chx-img">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="chx-text">
                            <h5 className="chx-name">{item.name}</h5>
                            <p className="chx-desc">{item.desc}</p>
                            <p className="chx-price">{item.price}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    renderGfpj() {
        const { gfpjList = [] } = this.state
        const { match } = this.props;
        return gfpjList.map((item, index) => {
            return (
                <div className="chx-content" key={index} onClick={this.handleToGoodDetail(`${match.url}/${item.id}`, index)}>
                    <div className="chx-msg">
                        <div className="chx-img">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="chx-text">
                            <h5 className="chx-name">{item.name}</h5>
                            <p className="chx-desc">{item.desc}</p>
                            <p className="chx-price">{item.price}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    renderPhone() {
        const { phoneList = [] } = this.state
        const { match } = this.props;
        return phoneList.map((item, index) => {
            return (
                <div className="chx-content" key={index} onClick={this.handleToGoodDetail(`${match.url}/${item.id}`, index)}>
                    <div className="chx-msg">
                        <div className="chx-img">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="chx-text">
                            <h5 className="chx-name">{item.name}</h5>
                            <p className="chx-desc">{item.desc}</p>
                            <p className="chx-price">{item.price}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    goToSearch(e) {
        this.props.history.push('/Search')
    }
    goToMenu(e) {
        console.log(111);
        
        this.props.history.push('/Menu')
    }
    render() {

        const { match } = this.props
        return (

            <div>
                <div className="Home">
                    {/* 头部 */}
                    <div className="head">
                        <div className="menu" onClick={this.goToMenu}></div>
                        <div className="logo"></div>
                        <div className="search" onClick={this.goToSearch}></div>
                    </div>
                    {/* swiper 轮播图 */}

                    <div className="swiper-container" style={{ marginTop: '50px' }}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide" >
                                <div className="img">
                                    <img src="https://resource.smartisan.com/resource/h/h51008420.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper-slide" >
                                    <div className="img">
                                        <img src="https://resource.smartisan.com/resource/fda5c3e61a71c0f883bbd6c76516cd85.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper-slide" >
                                    <div className="img">
                                        <img src="https://resource.smartisan.com/resource/a/app1008420.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='swiper-pagination'></div>
                    </div>
                    {/* 热销商品 */}
                    <div className="hotGoods">
                        <div className="hotGoods-head">
                            <div className="head-title"> 热销商品</div>
                            <div className="head-arrow"> > </div>
                        </div>
                        <div className="hotGoods-good">
                            <div className="ul">
                                {this.renderGoods()}
                            </div>
                        </div>
                    </div>
                    {/* 服装包厢 */}
                    <div className="clothes-package">
                        <div className="cp-head">
                            <div className="cp-title"> 服装包箱</div>
                            <div className="cp-arrow"> > </div>
                        </div>
                        <div className="cp-good">
                            <div className="cp-ul">
                                {this.renderCp()}
                            </div>
                        </div>
                    </div>
                    {/* 畅呼吸 */}
                    <div className="chx">
                        <div className="chx-head">
                            <div className="chx-title"> 畅呼吸 </div>
                            <div className="chx-arrow"> > </div>
                        </div>
                        <div className="chx-good">
                            <div className="chx-ul">
                                {this.renderChx()}
                            </div>
                        </div>
                    </div>
                    {/* 官方配件 */}
                    <div className="chx">
                        <div className="chx-head">
                            <div className="chx-title"> 官方配件 </div>
                            <div className="chx-arrow"> > </div>
                        </div>
                        <div className="chx-good">
                            <div className="chx-ul">
                                {this.renderGfpj()}
                            </div>
                        </div>
                    </div>
                    {/* 坚果系列及其配件 */}
                    <div className="chx phone">
                        <div className="chx-head">
                            <div className="chx-title"> 坚果系列及其配件 </div>
                            <div className="chx-arrow"> > </div>
                        </div>
                        <div className="chx-good">
                            <div className="chx-ul">
                                {this.renderPhone()}
                            </div>
                        </div>
                    </div>
                </div>
                <Route path={`${match.url}/:id`} component={HotGood}></Route>
                <Route path={`/Search`} component={Search}></Route>
                <Route path={`/Menu`} component={Menu}></Route>
            </div>
        )
    }
    componentDidMount() {
        console.log('路径:', this.props.match)
        console.log('其他商品：', hotGood)
        const cpList = otherGood.default.data[0].cp;
        const chxList = otherGood.default.data[1].chx;
        const gfpjList = otherGood.default.data[2].gfpj;
        const phoneList = otherGood.default.data[3].phone;

        const goodsList = hotGood.default.data;

        const self = this
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
        console.log(api.default.floorsUrl)
        //    await axios.get('/?json=true')
        //         .then(res => {
        //             console.log(res)
        //         })

        //获取到 热销商品
        // get(api.default.floorsUrl)
        //     .then(res => {
        //         console.log(res)
        //         self.setState({
        //             goodsList: res.data
        //         })
        //     })

        // 获取到其他商品
        // get(api.default.floorOtherUrl)
        //     .then(res => {
        //         console.log('其他商品:', res.data[0])
        //         self.setState({
        //             cpList: res.data[0].cp,
        //             chxList: res.data[1].chx,
        //             gfpjList: res.data[2].gfpj,
        //             phoneList: res.data[3].phone,
        //         })
        //     })

        // 通过 json 
        this.setState({
            cpList,
            chxList,
            gfpjList,
            phoneList,
            goodsList
        })
    }
}

export default User