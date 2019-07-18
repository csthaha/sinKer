import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { get } from '../../api/axios'
import * as api from '../../api/api'

import Choose from '../choose/choose'

import Scroll from '../../common/scroll/scroll'
// import Swiper from 'swiper/dist/js/swiper.js'
// import 'swiper/dist/css/swiper.min.css'
import Cart from '../cart/Cart'
import * as icon from '../../images/img'
import './HotGood.styl'
class HotGood extends Component {
    state = {
        name: '',
        desc: '',
        swiperImg: [],
        detailImg: [],
        priceNew: '',
        //技术参数
        tecParameters: [],
        // 服务说明
        explain: [],
        refreshScroll: true,
        //已选版本
        chooseColor: '',
        chooseSize: '',
        chooseSizeValue: '',
        chooseNum: ''

    }
    render() {
        const { refreshScroll } = this.state
        return (
            <div className="hotGood" style={{ width: '100%', height: '100%' }}>
                
                <div className="hotGood-head">
                    <Link className="back" to="/index">返回</Link>
                    <h1 className="hotGood-name">{this.state.name}</h1>
                </div>
                <div className="head-tab">
                    <div className="tab-list">
                        <div className="tab">商品</div>
                        <div className="tab">详情</div>
                        <div className="tab">参数</div>
                        <div className="tab">推荐</div>
                    </div>
                </div>
                <div className="good-scroll" style={{ marginTop: '65px' }}>
                    <Scroll onScroll={() => { }} >
                        {/* 图片 */}
                        <div style={{ width: "100%" }}>
                            <Scroll onScroll={() => { }}>

                                <div className="good-container" >
                                    {this.renderSwiper()}
                                </div>
                            </Scroll>
                            {/* 信息 */}

                            <div className="good-msg">
                                <div className="msg-title">商品信息</div>
                                <div className="msg-content">
                                    <div className="msg-name">{this.state.name}</div>
                                    <div className="msg-desc">{this.state.desc}</div>
                                    <div className="msg-price">
                                        <div className="price-new">￥{this.state.priceNew - 1}.00</div>
                                        <div className="price-old">￥{this.state.priceNew}.00</div>
                                    </div>
                                </div>
                                <div className="msg-foot">
                                    <div className="foot-title">
                                        优惠信息
                                    </div>
                                    <div className="foot-content">
                                        人气好物限量秒杀，仅此一天
                                     </div>
                                </div>
                            </div>
                            {/* 版本 */}

                            <div className="good-type">
                                <div className="type-choose">已选版本</div>
                                
                                    <div style={{ display: 'flex', position: 'realtive' }} >
                                        <div className="type-color">
                                            <div className="color">{this.state.chooseColor.spec_name}：{this.state.chooseColor.value}</div>
                                            <div className="color-size">{this.state.chooseSize}: {this.state.chooseSizeValue}</div>
                                            <div className="num">数量：{this.state.chooseNum}</div>
                                        </div>
                                        <div className="arrow" style={{ position: 'absolute', right: '20px' }}>></div>
                                    </div>
                                
                            </div>
                            {/* 商品详情 */}
                            <div className="good-detail">
                                <div className="detail-title">商品详情</div>
                                {this.renderDetailImg()}
                            </div>
                            {/* 技术详情 */}
                            <div className="tec-param">
                                <div className="tec-name">{this.state.tecName}</div>
                                <div className="tec-param-main">
                                    {this.renderTecParam()}
                                </div>
                            </div>
                            {/* 服务说明 */}
                            <div className="explain">
                                <div className="explain-title">服务说明</div>
                                {this.renderExplain()}
                            </div>

                        </div>
                    </Scroll>

                </div>
                <div className="good-footer">
                    <div className="cart-entry">
                        <Link to="/cart">
                            <img src={icon.gouWuChe} alt="" />
                        </Link>
                    </div>
                    <div className="add">
                        <span>加入购物车</span>
                    </div>
                    <div className="buy">
                        <span>现在购买</span>
                    </div>
                </div>
                <div className="showChoose" style={{display:'none'}}>
                    <Choose />
                </div>
                
                <Route path="/cart" component={Cart}></Route>
            </div>
        )
    }
    //选择 
    
    renderSwiper() {
        const { swiperImg = [] } = this.state
        return (
            swiperImg.map((item, index) => {
                return (
                    <div className="good-slide" key={index}>
                        <img src={item} alt="" />
                    </div>
                )
            })
        )
    }
    renderDetailImg() {
        const { detailImg = [] } = this.state
        return (
            detailImg.map((item, index) => {
                return (

                    <img src={item} alt="" key={index} />

                )
            })
        )
    }
    renderTecParam() {
        const { tecParameters = [] } = this.state
        return (
            tecParameters.map((item, index) => {
                return (

                    <div className="list-type" key={index} >
                        <div className="type-name">{item.name}</div>
                        <div className="type-param">{item.value}</div>
                    </div>

                )
            })
        )
    }
    renderExplain() {
        const { explain = [] } = this.state
        return (
            explain.map((item, index) => {
                return (
                    <div className="why" key={index}>{item}</div>
                )
            })
        )
    }
    componentDidMount() {
        // console.log('---', this.props.match.params.id)   
        const self = this

        get(api.default.floorDetailUrl + this.props.match.params.id)
            .then(res => {
                console.log('详细信息：', res.data.list[0])
                console.log('详细信息：', res.data.list[0].shop_info.ali_images)
                const good = res.data.list[0]
                if (!good.attr_info[8]) {
                    self.setState({
                        chooseSize: '',
                        chooseSizeValue: ''
                    })
                } else {
                    self.setState({
                        chooseSize: good.attr_info[8].spec_name,
                        chooseSizeValue: good.attr_info[8].value
                    })
                }
                self.setState({
                    name: good.shop_info.title,
                    swiperImg: good.shop_info.ali_images,
                    detailImg: good.shop_info.tpl_content.base.images.ali.url,
                    desc: good.shop_info.sub_title,
                    priceNew: good.price,
                    tecName: good.shop_info.tpl_content.base.attributes[0].title,
                    tecParameters: good.shop_info.tpl_content.base.attributes[0].list,
                    explain: good.shop_info.buy_notes,
                    chooseColor: good.attr_info[1],
                    chooseNum: 1
                })
            })
    }
}

export default HotGood