import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Home from '../home/Home'

import '../../base.styl'
import './Cart.styl'

import store from '../../store/store'

class Cart extends Component {
    state = {
        currentIndex: '',
        choose: false,
        total: 0,
        n: 0
    }
    constructor(props) {
        super(props)
        console.log(store.getState(), '+++++', props)
        this.caculate = this.caculate.bind(this)
        this.selectAll = this.selectAll.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    storeChange() {
        this.setState(store.getState())
    }
    render() {
        const { itemList } = store.getState()
        return (
            <div className="Cart">
                <div className="head">
                    购物车
                </div>
                <div className="empty-container" style={{ display: itemList.length === 0 ? '' : 'none' }}>
                    <div className="img-container">
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4022444938,2637555545&fm=26&gp=0.jpg" alt="" />
                    </div>
                    <h3>购物车暂无商品</h3>
                    <p>添加到购物车的商品会显示到这里</p>
                    <div className="login">登录</div>
                    <div className="choose">
                        <Link to="/index">
                            现在选购
                        </Link>
                    </div>
                </div>

                <div className="main" style={{ marginTop: '60px', display: itemList.length === 0 ? 'none' : '' }}>
                    {this.renderItemList()}
                </div>

                <div className="cash" style={{ display: store.getState().itemList.length === 0 ? 'none' : '' }}>
                    <div className="select">
                        <div className="chexbox" onClick={this.selectAll}></div>
                        <div className="chexbuy">已选购 {this.state.n} 件</div>
                    </div>
                    <div className="sum-info">
                        <div className="desc">
                            <p className="p">
                                <div className="name">合计：</div>
                                <div className="total">￥{this.state.total}.00</div>
                            </p>
                            <p className="desc">应付总额不含运费</p>
                        </div>
                        <div className="btn" style={{backgroundColor: this.state.choose ? '#4682B4' : '#CDCDB4'}}>现在结算</div>
                    </div>
                </div>
                <Route path="/index" component={Home}></Route>
            </div>
        )
    }
    renderItemList() {
        const { itemList } = store.getState()

        return itemList.map((item, index) => {
            return (
                <div className="cart-item" key={index} onClick={this.caculate.bind(this, index, item)}>
                    <div className="chexbox" style={{ backgroundColor: store.getState().itemList[index].select ? '#4682B4' : '' }}>

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
    caculate(index, item) {
        let self = this
        console.log(index, item)
        const action = {
            type: 'SELECT',
            id: index
        }
        store.dispatch(action)

        console.log(store.getState().itemList, '++++')
        // this.getTotalPrice(index)
        var total = 0, n = 0;
        for(let i = 0; i < store.getState().itemList.length; i++) {
            if(store.getState().itemList[i].select) {
                // console.log('dfg')
                self.setState({
                    choose:true
                })
                n++
                total = total + (+store.getState().itemList[i].newPrice) * (+store.getState().itemList[i].num)
            }
        }
        if(n === 0) {
            self.setState({
                choose: false
            })
        }
        console.log(total,n)
        this.setState({
            total,
            n
        })
    }
   
    selectAll() {
        const action = {
            type: 'SELECT_ALL'
        }
        store.dispatch(action)
    }

}

export default Cart