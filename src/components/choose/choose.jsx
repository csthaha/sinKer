import React, { Component } from 'react';

import store from '../../store/store'
import { get } from '../../api/axios'
import * as api from '../../api/api'


import './choose.styl'
class Choose extends Component {
    state = {
        num: 1,
        currentIndex: '',
        currentIndex1: '',
        color: [],
        name1: '',
        size: [],
        name2: '',
        defaultImg: '',
        defaultColor: '',
        defaultName: '',
        defaultPrice: ''
    }
    constructor(props) {
        super(props)

        this.hiddenChoose = this.hiddenChoose.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    storeChange() {
        this.setState(store.getState())
    }
    render() {
        return (
            <div style={{ transition: '2s ease' }}>
                <div className="mc" onClick={this.hiddenChoose}></div>
                <div className="a" style={{ marginTop: '100px' }}>
                    <div className="b">
                        <div className="aa">
                            <img src={this.state.defaultImg} alt="" />
                        </div>
                        <div className="ab">
                            <h4>{this.state.defaultName}</h4>
                            <p>{this.state.defaultColor}</p>
                            <div className="price">￥{this.state.defaultPrice}</div>
                        </div>
                    </div>
                    <div className="c">
                        <div className="cc">
                            <div className="ccc">{this.state.name1}选择</div>
                            <div className="ccc-ab">
                                {/* <div className="ccc-color">白色</div>
                                <div className="ccc-color">黑色色</div> */}
                                <div className="ccc-color">
                                    {this.renderColor()}
                                </div>
                            </div>
                            <div className="ccc">{this.state.name2}</div>
                            <div className="ccc-ab">
                                <div className="ccc-size">
                                    {this.renderSize()}
                                </div>
                            </div>
                        </div>
                        <div className="cd">
                            <div className="cdd">数量选择</div>
                            <div className="cde">
                                <div className="cdec reduce" style={{ backgroundColor: (1 === this.state.num) ? 'gray' : '' }} onClick={this.reduce.bind(this)}>-</div>
                                <div className="cdec num">{ this.state.num }</div>
                                <div className="cdec add" onClick={this.add.bind(this)}>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    renderColor() {
        const { color } = this.state
        return (
            color.map((item, index) => {
                return (
                    <div style={{ backgroundColor: (index === this.state.currentIndex) ? 'green' : '' }} className="color" key={index} onClick={this.chooseColor.bind(this, index)}>
                        {item.item_value}
                    </div>
                )
            })
        )
    }
    chooseColor(index) {
        const self = this
        // console.log(index)
        this.setState({
            currentIndex: index,
            defaultImg: self.state.color[index].image,
            defaultColor: self.state.color[index].show_name
        })
    }
    
    renderSize() {
        const { size } = this.state
        if (size === '') return (
            <div className="sizeText" ></div>
        )
        return (
            size.map((item, index) => {
                return (
                    <div style={{backgroundColor: (index === this.state.currentIndex1) ? 'green' : ''}} className="size" key={index} onClick={this.chooseSize.bind(this,index)}>
                        {item.item_value}
                    </div>
                )
            })
        )
    }
    chooseSize(index) {
        console.log(index)
        const self = this
        this.setState({
            currentIndex1: index
        })
    }
    add() {
        let { num } = this.state
        num++
        this.setState({
            num
        })
        this.props.parentNum(num)
    }
    reduce() {
        let {num} = this.state
        num--
        if(num < 1) return
        this.setState({
            num
        })
    }
    hiddenChoose() {
        console.log('---')
        // console.log('++++', this.props.match)   

        const action = {
            type: 'CHANGE_CHOOSE_HIDDEN'
        }
        store.dispatch(action)
    }
    componentDidMount() {
        const self = this
        console.log('+++', this.props.url)
        get(api.default.floorDetailUrl + this.props.url)
            .then(res => {
                console.log('选择详情：', res.data.list[0])
                let good = res.data.list[0].shop_info.spec_v2
                if (!good[1]) {
                    self.setState({
                        size: '',
                        name2: ''
                    })
                } else {
                    self.setState({
                        size: good[1].spec_values,
                        name2: good[1].spec_name
                    })
                }
                if (!res.data.list[0].attr_info[1]) {
                    self.setState({
                        defaultColor:  res.data.list[0].attr_info[9].value,
                    })
                } else {
                    self.setState({
                        defaultColor:  res.data.list[0].attr_info[1].value
                    })
                }
                self.setState({
                    color: good[0].spec_values,
                    name1: good[0].spec_name,
                    defaultImg: res.data.list[0].shop_info.ali_image,
                    defaultName: res.data.list[0].shop_info.title,
                    // defaultColor: res.data.list[0].attr_info[1].value,
                    defaultPrice: res.data.list[0].price
                })
            })
    }
}

export default Choose