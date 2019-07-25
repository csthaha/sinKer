import React, { Component } from 'react';



import '../../base.styl'
import './Cart.styl'

import store from '../../store/store'

class Cart extends Component {
    state = {}
    constructor(props) {
        super(props)
        console.log(store.getState(), '+++++', props)
    }
    render() {
        return (
            <div className="Cart">
                <div className="head">
                    购物车
                </div>
                {/* <div className="empty-container">
                    <div className="img-container">
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4022444938,2637555545&fm=26&gp=0.jpg" alt=""/>
                    </div>
                    <h3>购物车暂无商品</h3>
                    <p>添加到购物车的商品会显示到这里</p>
                    <div className="login">登录</div>
                    <div className="choose">现在选购</div>
                </div> */}

                <div className="main" style={{ marginTop: '60px' }}>
                    {this.renderItemList()}

                    {/* <div className="cart-item">
                        <div className="chexbox">

                        </div>
                        <div className="item">
                            <div className="item-img">
                                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1816948731,4203604980&fm=26&gp=0.jpg" alt="" />
                            </div>
                            <div className="item-info">
                                <div className="title">锤子商城的手机</div>
                                <div className="attr">白色</div>
                                <div className="price">
                                    <div className="newPrice">
                                        <div className="newPrice-price">￥59.00</div>
                                        <div className="newPrice-num">x 1</div>
                                    </div>
                                    <div className="oldPrice">￥60.00</div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        )
    }
    renderItemList () {
        const { itemList } = store.getState()
        
        return itemList.map((item,index) => {
            return (
                <div className="cart-item" key={index}>
                    <div className="chexbox">

                    </div>
                    <div className="item">
                        <div className="item-img">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="item-info">
                            <div className="title">{item.name}</div>
                            <div className="attr">{item.color}</div>
                            <div className="price">
                                <div className="newPrice">
                                    <div className="newPrice-price">￥{item.newPrice}</div>
                                    <div className="newPrice-num">x{item.num}</div>
                                </div>
                                <div className="oldPrice">￥{item.oldPrice}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
}

export default Cart